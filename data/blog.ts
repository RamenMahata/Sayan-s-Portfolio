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

df.isnull().sum()
df.dropna()
df.fillna(value=0)
df.fillna(method='forward')
\`\`\`

### 2. Removing Duplicates
\`\`\`python
df.duplicated().sum()
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

Connected to:
- SQL Server database for sales transactions
- Excel file for product information
- CSV file for customer data

## Step 2: Data Modeling

Relationships:
\`\`\`
Sales -> Product (Product ID)
Sales -> Customer (Customer ID)
Sales -> Date (Date)
\`\`\`

## Key Visualizations
1. **Line Chart**: Monthly sales trends
2. **Map**: Regional performance
3. **Bar Chart**: Top products
4. **Pie Chart**: Customer segments

## Lessons Learned
- Understand business requirements first
- Spend time on data modeling
- Keep visualizations simple
- Test with real users

## Conclusion
Power BI is as much about storytelling as it is about numbers.
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

Statistics is crucial for any data analyst. This post covers the fundamental concepts you need to know.

## Descriptive Statistics
- Mean, Median, Mode
- Range, Variance, Standard Deviation

## Inferential Statistics
- Hypothesis Testing: null vs alternative, α, test statistic, p-value
- Common Tests: t-test, Chi-square, ANOVA

## Applications
- A/B testing
- Market research
- Performance analysis

## Conclusion
Statistics empowers data analysts to make confident, data-driven decisions.
    `,
  },
  {
    id: 4,
    title: "Building a CNN Model for Skin Disease Detection",
    slug: "cnn-skin-disease-detection",
    excerpt:
      "A deep dive into how I developed a CNN-based image classification model to detect skin diseases with PyTorch.",
    date: "2025-01-10",
    readTime: "14 min read",
    content: `
# Building a CNN Model for Skin Disease Detection

In this blog, I share how I created a deep learning model to detect various skin diseases using PyTorch.

## Steps
1. **Dataset Preparation**: Preprocessing, augmentation, and label encoding.
2. **Model Architecture**: Convolutional layers, pooling, fully connected layers.
3. **Training**: Optimizers, loss functions, early stopping.
4. **Evaluation**: Accuracy, precision, recall, confusion matrix.

## Conclusion
CNNs can be powerful in healthcare when combined with quality data and proper preprocessing.
    `,
  },
  {
    id: 5,
    title: "Predicting TCS Stock Prices with Machine Learning",
    slug: "tcs-stock-price-prediction",
    excerpt:
      "A case study on predicting TCS stock prices using regression techniques, EDA, and feature engineering.",
    date: "2025-01-05",
    readTime: "10 min read",
    content: `
# Predicting TCS Stock Prices with Machine Learning

This project involved building a regression model to predict TCS stock prices using historical data.

## Workflow
1. **EDA**: Identified patterns and seasonal trends.
2. **Feature Engineering**: Created moving averages, lag features.
3. **Modeling**: Tried multiple regression models and compared R², RMSE, MAE.
4. **Results**: Best model achieved strong predictive performance.

## Conclusion
Feature engineering played a huge role in improving model accuracy.
    `,
  }
];
