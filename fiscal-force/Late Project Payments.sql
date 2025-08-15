WITH transactions_with_prev AS (
  SELECT
    PROJECT,
    DEPARTMENT,
    DIVISION,
    CHECK_DATE,
    AMOUNT,
    LAG(CHECK_DATE) OVER (
      PARTITION BY PROJECT, DEPARTMENT, DIVISION
      ORDER BY CHECK_DATE
    ) AS prev_check_date,
    LAG(AMOUNT) OVER (
      PARTITION BY PROJECT, DEPARTMENT, DIVISION
      ORDER BY CHECK_DATE
    ) AS prev_amount
  FROM
    `jpmc1-468719.de_ds1.checkbookdata`
  WHERE
    PROJECT IS NOT NULL
),
transactions_with_gap AS (
  SELECT
    *,
    DATE_DIFF(CHECK_DATE, prev_check_date, MONTH) AS months_since_prev,
    CASE
      WHEN prev_check_date IS NOT NULL
           AND DATE_DIFF(CHECK_DATE, prev_check_date, MONTH) > 12
        THEN TRUE
      ELSE FALSE
    END AS gap_flag
  FROM
    transactions_with_prev
),
project_counts AS (
  SELECT
    PROJECT,
    COUNT(*) AS project_transaction_count,
    COUNTIF(
      prev_check_date IS NOT NULL
      AND DATE_DIFF(CHECK_DATE, prev_check_date, MONTH) > 12
    ) AS flagged_transaction_count
  FROM
    transactions_with_gap
  GROUP BY
    PROJECT
)
SELECT
  t.PROJECT,
  t.DEPARTMENT,
  t.DIVISION,
  t.CHECK_DATE,
  t.AMOUNT,
  t.prev_check_date,
  t.prev_amount,
  t.months_since_prev,
  t.gap_flag,
  c.project_transaction_count,
  c.flagged_transaction_count
FROM
  transactions_with_gap t
JOIN
  project_counts c
USING (PROJECT)
WHERE
  t.gap_flag = TRUE
ORDER BY
  t.PROJECT,
  t.CHECK_DATE
