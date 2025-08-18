# Delaware Checkbook Expenditure Analysis - Hen Hacks 2025

## The Big Idea (Problem Statement)

Different state agencies might be buying the same type of thing (like office supplies, IT services, or even furniture) from different vendors at different prices. This means the state could be missing out on big discounts if they bought in bulk!

**The Challenge**: Delaware state departments are potentially missing significant cost savings opportunities by purchasing similar items or services from different vendors at varying prices, rather than leveraging bulk purchasing power.

## Your Team's AI/FinTech Application

We use AI to identify where different state departments are spending money on similar items or services, but perhaps from different vendors or at different costs. It's like finding "buy one, get one free" opportunities the state didn't even know it had.

## Objective (O)
Identify opportunities for cost savings and increased efficiency through consolidated purchasing across state agencies.

## Key Results (KRs)

**KR1**: Use AI (e.g., clustering or topic modeling) to group at least 5 common spending categories across different state departments.

**KR2**: Pinpoint at least 3 instances where multiple departments are spending on the same type of item/service but from different vendors, or with significant price variations.

**KR3**: (Bonus) Estimate the potential savings if these identified purchases were consolidated or standardized.

## Data Source Focus
Delaware Open Checkbook (opencheckbook.delaware.gov) – focusing on "Expenditures" by department, vendor, and spending category.

## Project Overview

This project analyzes Delaware's government expenditure data from the Delaware Checkbook to identify anomalies, patterns, and insights in government spending. The analysis focuses on detecting unusual transactions, analyzing department-wise spending patterns, and providing cost-per-employee metrics while specifically targeting opportunities for consolidated purchasing and cost savings.

## Team Information

- **Hackathon**: Hen Hacks 2025
- **Team Name**: [Synergy-Squad]
- **Team Members**: [Nikhil Dhanankam, Saieda Ali Zada, SAMEER RITHWIK SIDDABHAKTUNI, JD Wang]
- **Repository**: NSF-DARSE/Hackathon2025

## Project Components

### 1. Data Exploration and Preprocessing (`Nikhil_Notebook.ipynb`)
- Initial data loading and exploration of Delaware Checkbook expenditure data
- Data cleaning and preprocessing
- Vendor analysis and null value handling
- Amount distribution analysis (positive, negative, zero amounts)
- Data filtering for positive amounts only
- **Z-Score Anomaly Detection**: Statistical outlier detection using log-transformed amounts
  - Calculated z-scores for transaction amounts to identify statistical outliers
  - Used log transformation to handle financial data skewness
  - Identified transactions with z-scores < -1 (unusually low) and > 1.5 (unusually high)
  - Grouped analysis by vendor and account description to find pricing anomalies

### 2. Anomaly Detection using Isolation Forest (`Isolation_Forest.ipynb`)
- Implementation of Isolation Forest algorithm for anomaly detection
- Feature engineering using category encoding
- Data scaling and preprocessing for machine learning
- Identification of unusual transactions in government spending
- BigQuery integration for large-scale data processing

### 3. Cost Analysis by Department (`jpm_team_cost_2023.ipynb`)
- Department-wise office supplies cost analysis for 2023
- Cost per employee calculations
- Employee count mapping for different departments
- Comparative analysis across government departments

### 4. Additional Analysis Notebooks
- `f92f0a14_f312_4315_b587_3516d19bc6ee.ipynb`: Additional analysis notebook
- `Nikhil_Notebookipynb.ipynb`: Extended analysis notebook

## Key Findings & Results

### KR1 Achievement: Common Spending Categories Identified
1. **Office Supplies** - Analyzed across multiple departments with cost variations
2. **IT Services** - Identified different vendors and pricing structures
3. **Professional Services** - Found opportunities for consolidated contracts
4. **Equipment & Furniture** - Discovered price variations across departments
5. **Travel & Training** - Identified potential for standardized rates

### KR2 Achievement: Vendor Price Variations Detected
1. **Office Supplies**: Multiple departments purchasing similar items from different vendors at varying prices
2. **IT Services**: Different departments using different vendors for similar services
3. **Professional Services**: Significant price variations for comparable services across departments

### KR3 Achievement: Potential Savings Estimation
- **Data Scale**: Analyzed over 11 million expenditure records
- **Anomaly Detection**: Identified unusual spending patterns using machine learning
- **Department Analysis**: Compared spending efficiency across different government departments
- **Cost Efficiency**: Calculated cost-per-employee metrics for office supplies
- **Consolidation Opportunities**: Estimated potential savings through bulk purchasing
- **Statistical Analysis**: Z-score analysis identified pricing outliers and anomalies

## Technologies Used

- **Python**: Primary programming language
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computations
- **Scikit-learn**: Machine learning (Isolation Forest)
- **Matplotlib/Seaborn**: Data visualization
- **BigQuery**: Large-scale data processing
- **Category Encoders**: Feature engineering for categorical variables

## Statistical Analysis Methods

### Z-Score Analysis
- **Purpose**: Identify statistical outliers in transaction amounts
- **Method**: Log transformation + z-score calculation
- **Thresholds**: 
  - Unusually low: z-score < -1 (potential underpricing)
  - Unusually high: z-score > 1.5 (potential overpricing)
- **Grouping**: Analysis by vendor and account description
- **Output**: Excel report with vendor-service z-score analysis

### Volume Analysis
- **Purpose**: Detect bulk purchasing opportunities
- **Method**: Quintile-based volume analysis
- **Metrics**: Volume efficiency ratios and consolidation potential
- **Threshold**: 15% expected advantage for bulk purchases

### Price Variance Analysis
- **Purpose**: Identify price inconsistencies across departments
- **Method**: Coefficient of variation analysis
- **Threshold**: 30% variance threshold for flagging opportunities
- **Scope**: Fund types, department-vendor pairs, identical items

## Data Source

- **Dataset**: Delaware Checkbook Expenditure Details (2025-08-13)
- **Source**: Delaware Government Open Data
- **Records**: Over 11 million expenditure transactions

## Installation and Setup

1. Clone this repository
2. Install required dependencies:
   ```bash
   pip install pandas numpy matplotlib seaborn scikit-learn category_encoders bigframes
   ```
3. Ensure access to BigQuery for large-scale data processing
4. Run notebooks in order for complete analysis

## Usage

1. Start with `Nikhil_Notebook.ipynb` for data exploration
2. Run `Isolation_Forest.ipynb` for anomaly detection
3. Execute `jpm_team_cost_2023.ipynb` for cost analysis
4. Review additional notebooks for extended insights

## Project Structure

```
├── README.md                           # This file
├── Nikhil_Notebook.ipynb              # Main data exploration notebook
├── Isolation_Forest.ipynb             # Anomaly detection implementation
├── jpm_team_cost_2023.ipynb           # Cost analysis by department
├── f92f0a14_f312_4315_b587_3516d19bc6ee.ipynb  # Additional analysis
├── Nikhil_Notebookipynb.ipynb         # Extended analysis
├── email.htm                          # Email template/alert system
└── email_alert.patch                  # Email alert configuration
```

## Contributing

This project was developed as part of Hen Hacks 2025 hackathon. For questions or contributions, please contact the team members.

## License

This project is part of the NSF-DARSE Hackathon2025 repository.

---

**Note**: This project demonstrates the application of data science and machine learning techniques to government transparency and fiscal accountability through the analysis of public expenditure data.
