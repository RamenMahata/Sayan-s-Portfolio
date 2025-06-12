export const blogPosts = [
  {
    id: 1,
    title: "Exploring Data Cleaning with Pandas",
    slug: "exploring-data-cleaning-with-pandas",
    excerpt:
      "Learn essential data cleaning techniques using Pandas to prepare your datasets for analysis. This comprehensive guide covers handling missing values, removing duplicates, and data transformation.",
    date: "2024-12-15",
    readTime: "8 min read",
    content: `
# Exploring Data Cleaning with Pandas

Data cleaning is one of the most crucial steps in any data analysis project. In this post, we'll explore various techniques using Pandas to clean and prepare your data for analysis.

## Why Data Cleaning Matters

Raw data is often messy, incomplete, or inconsistent. Before we can extract meaningful insights, we need to:

- Handle missing values
- Remove duplicates
- Fix data types
- Deal with outliers
- Standardize formats

## Essential Pandas Functions for Data Cleaning

### 1. Handling Missing Values

\`\`\`python
import pandas as pd

# Check for missing values
df.isnull().sum()

# Drop rows with missing values
df.dropna()

# Fill missing values
df.fillna(value=0)
df.fillna(method='forward')
\`\`\`

### 2. Removing Duplicates

\`\`\`python
# Check for duplicates
df.duplicated().sum()

# Remove duplicates
df.drop_duplicates()
\`\`\`

## Conclusion

Data cleaning is an iterative process that requires attention to detail and domain knowledge. With Pandas, we have powerful tools to make this process more efficient and effective.
    `,
  },
  {
    id: 2,
    title: "How I Built My First Power BI Dashboard",
    slug: "how-i-built-my-first-power-bi-dashboard",
    excerpt:
      "A step-by-step journey of creating my first Power BI dashboard, from data connection to final visualization. Learn about the challenges I faced and lessons learned.",
    date: "2024-12-10",
    readTime: "12 min read",
    content: `
# How I Built My First Power BI Dashboard

Creating my first Power BI dashboard was both exciting and challenging. In this post, I'll share my journey and the lessons I learned along the way.

## The Project

I was tasked with creating a sales performance dashboard that would help the management team understand:

- Monthly sales trends
- Regional performance
- Top-performing products
- Customer segments

## Step 1: Data Connection

The first step was connecting to our data sources:

- SQL Server database for sales transactions
- Excel file for product information
- CSV file for customer data

## Step 2: Data Modeling

Creating relationships between tables was crucial for accurate analysis:

\`\`\`
Sales Table -> Product Table (Product ID)
Sales Table -> Customer Table (Customer ID)
Sales Table -> Date Table (Date)
\`\`\`

## Key Visualizations

1. **Line Chart**: Monthly sales trends
2. **Map**: Regional performance
3. **Bar Chart**: Top products
4. **Pie Chart**: Customer segments

## Lessons Learned

- Start with a clear understanding of business requirements
- Spend time on data modeling - it's the foundation
- Keep visualizations simple and focused
- Test with real users early and often

## Conclusion

Building my first Power BI dashboard taught me the importance of understanding both the technical aspects and business context of data visualization.
    `,
  },
  {
    id: 3,
    title: "Statistical Analysis Fundamentals for Data Analysts",
    slug: "statistical-analysis-fundamentals",
    excerpt:
      "Master the essential statistical concepts every data analyst should know. From descriptive statistics to hypothesis testing, this guide covers the fundamentals.",
    date: "2024-12-05",
    readTime: "15 min read",
    content: `
# Statistical Analysis Fundamentals for Data Analysts

Understanding statistics is crucial for any data analyst. This post covers the fundamental concepts you need to know to make informed decisions based on data.

## Descriptive Statistics

Descriptive statistics help us understand the basic features of our data:

### Measures of Central Tendency
- **Mean**: Average value
- **Median**: Middle value when sorted
- **Mode**: Most frequently occurring value

### Measures of Variability
- **Range**: Difference between max and min
- **Variance**: Average squared deviation from mean
- **Standard Deviation**: Square root of variance

## Inferential Statistics

Inferential statistics help us make conclusions about populations based on sample data.

### Hypothesis Testing

The process of testing assumptions about population parameters:

1. State null and alternative hypotheses
2. Choose significance level (α)
3. Calculate test statistic
4. Make decision based on p-value

### Common Tests
- **t-test**: Compare means
- **Chi-square**: Test independence
- **ANOVA**: Compare multiple groups

## Practical Applications

Understanding these concepts helps in:
- A/B testing
- Quality control
- Market research
- Performance analysis

## Conclusion

Statistical knowledge empowers data analysts to make confident, data-driven decisions and communicate findings effectively to stakeholders.
    `,
  },
]
