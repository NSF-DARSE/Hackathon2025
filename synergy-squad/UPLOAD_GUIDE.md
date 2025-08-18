# Step-by-Step Upload Guide for NSF-DARSE Hackathon2025

## Prerequisites
- Git installed on your system
- GitHub account
- Access to the NSF-DARSE/Hackathon2025 repository

## Step 1: Fork the Repository
1. Go to https://github.com/NSF-DARSE/Hackathon2025
2. Click the "Fork" button in the top-right corner
3. This creates your own copy of the repository

## Step 2: Clone Your Fork
```bash
# Replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/Hackathon2025.git
cd Hackathon2025
```

## Step 3: Find Your Team Folder
1. Navigate to your team's folder in the repository
2. If your team folder doesn't exist, create it:
   ```bash
   mkdir your-team-name
   cd your-team-name
   ```

## Step 4: Copy Your Project Files
Copy all your project files to your team folder:
```bash
# Copy all your files to the team folder
cp /path/to/your/project/* .
```

## Step 5: Add Files to Git
```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Add Delaware Checkbook Analysis project - Hen Hacks 2025"
```

## Step 6: Push to Your Fork
```bash
git push origin main
```

## Step 7: Create Pull Request
1. Go to your forked repository on GitHub
2. Click "Compare & pull request"
3. Add a description of your project:
   ```
   ## Delaware Checkbook Expenditure Analysis
   
   **Team**: [Your Team Name]
   **Hackathon**: Hen Hacks 2025
   
   ### The Big Idea
   Different state agencies might be buying the same type of thing (like office supplies, IT services, or even furniture) from different vendors at different prices. This means the state could be missing out on big discounts if they bought in bulk!
   
   ### Project Overview
   This project uses AI to identify where different state departments are spending money on similar items or services, but perhaps from different vendors or at different costs. It's like finding "buy one, get one free" opportunities the state didn't even know it had.
   
   ### Key Results Achieved
   **KR1**: Used AI (clustering/topic modeling) to group 5+ common spending categories across different state departments
   **KR2**: Pinpointed 3+ instances where multiple departments are spending on the same type of item/service but from different vendors, or with significant price variations
   **KR3**: Estimated potential savings if these identified purchases were consolidated or standardized
   
   ### Key Features
   - Data exploration and preprocessing of 11M+ expenditure records
   - Anomaly detection using Isolation Forest algorithm
   - Department-wise cost analysis and efficiency metrics
   - BigQuery integration for large-scale data processing
   - Consolidated purchasing opportunity identification
   
   ### Files Included
   - Nikhil_Notebook.ipynb - Main data exploration
   - Isolation_Forest.ipynb - Anomaly detection
   - jpm_team_cost_2023.ipynb - Cost analysis
   - Additional analysis notebooks
   - README.md - Project documentation
   - requirements.txt - Dependencies
   
   ### Technologies Used
   - Python, Pandas, NumPy, Scikit-learn
   - BigQuery for data processing
   - Machine learning for anomaly detection and clustering
   ```

## Step 8: Wait for Review
The hackathon organizers will review your pull request and merge it into the main repository.

## Troubleshooting

### If you get permission errors:
```bash
# Make sure you're using your GitHub credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### If you need to update your fork:
```bash
# Add the original repository as upstream
git remote add upstream https://github.com/NSF-DARSE/Hackathon2025.git

# Fetch latest changes
git fetch upstream

# Merge changes
git merge upstream/main
```

### If you need to force push (use with caution):
```bash
git push origin main --force
```

## Final Checklist
- [ ] Forked the repository
- [ ] Cloned your fork locally
- [ ] Created/found your team folder
- [ ] Copied all project files
- [ ] Added and committed files
- [ ] Pushed to your fork
- [ ] Created pull request with detailed description
- [ ] Included all necessary documentation (README, requirements.txt)

## Contact
If you encounter any issues, contact the hackathon organizers or refer to the repository's README for additional guidance.
