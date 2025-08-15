"""
calculate_percentage_error.py

A utility script that reads a CSV file containing pairs of columns for actual
values and corresponding predictions, computes the percentage error for each
pair, and writes the results to a new CSV file.

Column naming convention:
    - Actual column names should end with "_actual"
    - Prediction column names should end with "_predict" (or "_prediction")

The script will create a new column for each pair named
    "<base>_pct_error" where <base> is the common prefix before the suffix.

Percentage error is calculated as:
    ((actual - prediction) / actual) * 100

If the actual value is zero, the percentage error is set to NaN to avoid
division‑by‑zero errors.

Usage:
    python calculate_percentage_error.py input.csv output.csv
"""

import argparse
import sys
import pandas as pd
import numpy as np
from pathlib import Path


def find_column_pairs(df: pd.DataFrame) -> list[tuple[str, str, str]]:
    """
    Identify matching actual/prediction column pairs.

    Returns a list of tuples:
        (base_name, actual_column, prediction_column)
    """
    actual_cols = [c for c in df.columns if c.lower().endswith("_actual")]
    pred_cols = [c for c in df.columns if c.lower().endswith(("_predict", "_prediction"))]

    pairs = []
    for act in actual_cols:
        base = act[: -len("_actual")]
        # Look for a prediction column with the same base
        pred_candidates = [
            p for p in pred_cols if p.lower().startswith(base.lower())
        ]
        if pred_candidates:
            # If multiple candidates, pick the first (could be refined)
            pairs.append((base, act, pred_candidates[0]))
    return pairs


#####PERCENT ERROR CALCULATION#####
def compute_percentage_error(df: pd.DataFrame) -> pd.DataFrame:
    """
    For each identified actual/prediction pair, compute the percentage error
    and add it as a new column to the DataFrame.
    """
    pairs = find_column_pairs(df)

    if not pairs:
        print("No matching actual/prediction column pairs found.", file=sys.stderr)
        return df

    for base, actual_col, pred_col in pairs:
        error_col = f"{base}_pct_error"
        actual = df[actual_col].astype(float)
        pred = df[pred_col].astype(float)

        # Avoid division by zero
        with np.errstate(divide="ignore", invalid="ignore"):
            pct_error = (actual - pred) / actual * 100
            pct_error = pct_error.replace([np.inf, -np.inf], np.nan)

        df[error_col] = pct_error

    return df
#####END PERCENT ERROR CALCULATION#####


def report_error_statistics(df: pd.DataFrame) -> None:
    """
    Find and report the minimum and maximum percent error across all
    generated percent‑error columns, including the column names where they
    occur.
    """
    error_cols = [c for c in df.columns if c.lower().endswith("_pct_error")]
    if not error_cols:
        print("No percent error columns to report statistics for.", file=sys.stderr)
        return

    # Compute per‑column minima and maxima (ignoring NaN)
    per_col_min = df[error_cols].min()
    per_col_max = df[error_cols].max()

    # Overall min / max values
    overall_min = per_col_min.min()
    overall_max = per_col_max.max()

    # Identify the columns that contain these overall values
    # If multiple columns share the same min/max, idxmin/idxmax will return the first.
    min_col = per_col_min.idxmin() if not pd.isna(overall_min) else None
    max_col = per_col_max.idxmax() if not pd.isna(overall_max) else None

    print("Overall percent error statistics:")
    if min_col is not None:
        print(f"  Minimum percent error: {overall_min} (in column '{min_col}')")
    else:
        print("  Minimum percent error: NaN (no valid values)")

    if max_col is not None:
        print(f"  Maximum percent error: {overall_max} (in column '{max_col}')")
    else:
        print("  Maximum percent error: NaN (no valid values)")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Calculate percentage error between actual and prediction columns."
    )
    parser.add_argument(
        "input_csv",
        type=Path,
        help="Path to the input CSV file containing actual and prediction columns.",
    )
    parser.add_argument(
        "output_csv",
        type=Path,
        help="Path where the output CSV with percentage error columns will be saved.",
    )
    args = parser.parse_args()

    if not args.input_csv.is_file():
        print(f"Error: Input file '{args.input_csv}' does not exist.", file=sys.stderr)
        sys.exit(1)

    try:
        df = pd.read_csv(args.input_csv)
    except Exception as e:
        print(f"Failed to read CSV: {e}", file=sys.stderr)
        sys.exit(1)

    df_with_error = compute_percentage_error(df)

    # Report min/max percent error across all generated columns, with column names
    report_error_statistics(df_with_error)

    try:
        df_with_error.to_csv(args.output_csv, index=False)
        print(f"Output written to {args.output_csv}")
    except Exception as e:
        print(f"Failed to write output CSV: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
