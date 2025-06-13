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
    role: "Research Intern",
    company: "Indian Institute of Technology, Kharagpur",
    duration: "Dec 2024 – Present",
    location: "Kharagpur, India",
    description: [
      "Gaining hands-on experience in Edge Computing, Neural Networks, and Deep Learning",
      "Exploring advanced research concepts in computational models and intelligent systems",
      "Contributing to the development of efficient computational models"
    ],
    tools: ["Python", "PyTorch/TensorFlow", "Neural Networks", "Edge Computing"]
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    duration: "2024 – Present",
    location: "Remote",
    description: [
      "Working with multiple real-world datasets involving data cleaning, analysis, and visualization",
      "Processed live TCS stock data to track performance trends and generate insights",
      "Conducted IBM HR Analytics to explore employee attrition and performance using ML models"
    ],
    tools: ["Python", "Pandas", "Machine Learning", "Data Visualization"]
  }
  
]; 