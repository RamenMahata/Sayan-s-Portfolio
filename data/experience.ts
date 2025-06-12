export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tools: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Data Analyst Intern",
    company: "ABC Analytics Pvt. Ltd.",
    duration: "Jan 2023 – April 2023",
    location: "Remote",
    description: [
      "Cleaned and analyzed sales data using Pandas and SQL",
      "Built interactive dashboards in Power BI",
      "Collaborated with marketing to optimize campaign insights"
    ],
    tools: ["Python", "SQL", "Power BI", "Pandas"]
  },
  {
    role: "Freelance Data Visualization",
    company: "Self-employed via Upwork",
    duration: "May 2022 – Aug 2022",
    location: "Remote",
    description: [
      "Created visual reports for small ecommerce brands",
      "Used Tableau to create monthly performance dashboards",
      "Implemented automated data pipelines for client reporting"
    ],
    tools: ["Excel", "Tableau", "Python"]
  }
]; 