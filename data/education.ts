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
    institution: "College of Engineering & Management, Kolaghat",
    duration: "Sept 2022 – June 2026",
    location: "Kolaghat, West Bengal",
    gpa: "7.83/10",
    description: [
      "Studied computer science fundamentals including algorithms, data structures, operating systems, and software engineering.",
      "Completed coursework in machine learning, artificial intelligence, and database management systems.",
      "Participated in hackathons, coding competitions, and technical projects."
    ],
    subjects: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Machine Learning",
      "Artificial Intelligence",
      "Compiler Design",
      "Object-Oriented Programming",
      "Computer Architecture"
    ],
    achievements: [
      "Maintained strong academic performance with CGPA of 7.83/10.",
      "Actively involved in academic and project-based learning."
    ]
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Ramakrishna Mission Vidyabhavan, Medinipur",
    duration: "April 2022",
    location: "Medinipur, West Bengal",
    gpa: "86.2%",
    description: [
      "Completed higher secondary education under WBCHSE with Science stream.",
      "Focused on Mathematics, Physics, Chemistry, and Statistics.",
      "Strengthened analytical and logical reasoning skills."
    ],
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Statistics",
      "English"
    ],
    achievements: [
      "Strengthened mathematical skills like statistics."
    ]
  },
  {
    degree: "Secondary Education (10th Grade)",
    institution: "Bikrampur High School (H.S.)",
    duration: "March 2020",
    location: "Bikrampur, West Bengal",
    gpa: "93.43%",
    description: [
      "Completed secondary education under WBBSE with excellent academic record.",
      "Built strong fundamentals in science and mathematics."
    ],
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "History",
      "Geography"
    ],
    achievements: [
      "Secured 93.43% in WBBSE.",
      "Awarded for outstanding academic performance."
    ]
  }
];
