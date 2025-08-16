export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa?: string;
  description: string[];
  subjects: string[];
  achievements?: string[];
}

export const educations: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "University College of Engineering & Technology, Hazaribagh",
    duration: "2021 – 2025",
    location: "Hazaribagh, Jharkhand",
    gpa: "8.5/10",
    description: [
      "Comprehensive study of computer science fundamentals including algorithms, data structures, and software engineering",
      "Specialized coursework in machine learning, artificial intelligence, and web development",
      "Active participation in coding competitions and technical projects"
    ],
    subjects: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Machine Learning",
      "Artificial Intelligence",
      "Web Technologies",
      "Object-Oriented Programming",
      "Computer Architecture"
    ],
    achievements: [
      "Dean's List for academic excellence",
      "Top 10% in class ranking",
      "Active member of coding club",
      "Participated in multiple hackathons and coding competitions"
    ]
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Don Bosco School",
    duration: "2019 – 2021",
    location: "Hazaribagh, Jharkhand",
    gpa: "85%",
    description: [
      "Completed higher secondary education with focus on Science stream",
      "Strong foundation in Mathematics, Physics, and Chemistry",
      "Developed analytical and problem-solving skills"
    ],
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English"
    ],
    achievements: [
      "Distinction in Mathematics and Computer Science",
      "Active participant in science exhibitions",
      "Member of school debate team"
    ]
  }
];
