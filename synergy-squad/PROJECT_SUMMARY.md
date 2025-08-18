# Delaware Checkbook Analysis - Project Summary

## Quick Overview
**Hackathon**: Hen Hacks 2025  
**Project**: Delaware Government Expenditure Analysis with Anomaly Detection  
**Team**: [Your Team Name]  
**Duration**: [Hackathon Duration]  

## Problem Statement
**The Big Idea**: Different state agencies might be buying the same type of thing (like office supplies, IT services, or even furniture) from different vendors at different prices. This means the state could be missing out on big discounts if they bought in bulk!

**Our Challenge**: Analyze Delaware's government expenditure data to:
- Identify opportunities for consolidated purchasing across departments
- Find instances where departments buy similar items from different vendors at varying prices
- Estimate potential cost savings through bulk purchasing
- Provide transparency in government spending patterns
- Detect potential fraud or wasteful spending

## Solution Approach

### 1. Data Exploration & Preprocessing
- **Dataset**: Delaware Checkbook Expenditure Details (11M+ records)
- **Focus**: Vendor analysis, amount distribution, data cleaning
- **Output**: Cleaned dataset with positive amounts only
- **Z-Score Analysis**: Statistical outlier detection using log-transformed amounts

### 2. Anomaly Detection & Clustering
- **Algorithm**: Isolation Forest (Machine Learning)
- **Features**: Department, Division, Vendor, Account Description, Amount
- **Method**: Category encoding + Standard scaling
- **Goal**: Identify unusual transactions and group similar spending patterns

### 3. Cost Analysis & Consolidation Opportunities
- **Scope**: Office supplies spending by department (2023)
- **Metric**: Cost per employee and vendor price comparisons
- **Departments**: Education, National Guard, Agriculture, Labor, Technology, Finance
- **Objective**: Identify bulk purchasing opportunities across departments

## Key Technologies
- **Python** ecosystem (Pandas, NumPy, Scikit-learn)
- **BigQuery** for large-scale data processing
- **Jupyter Notebooks** for analysis and documentation
- **Machine Learning** for anomaly detection
- **Statistical Analysis** (Z-scores, coefficient of variation)

## Impact & Results
- **Scale**: Analyzed 11+ million government transactions
- **Transparency**: Enhanced visibility into government spending patterns
- **Efficiency**: Identified opportunities for consolidated purchasing
- **Cost Savings**: Estimated potential savings through bulk purchasing
- **Accountability**: Cost-per-employee metrics and vendor price comparisons
- **KR Achievement**: Met all three Key Results objectives

## Files Overview
- `Nikhil_Notebook.ipynb` - Main data exploration
- `Isolation_Forest.ipynb` - Anomaly detection implementation
- `jpm_team_cost_2023.ipynb` - Department cost analysis
- Additional notebooks for extended analysis

## Future Enhancements
- Real-time monitoring system
- Automated alert system for anomalies
- Interactive dashboard for stakeholders
- Integration with other government datasets

---
*This project demonstrates the power of data science in promoting government transparency and fiscal accountability.*
