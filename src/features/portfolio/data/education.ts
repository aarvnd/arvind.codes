import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "btech-cs",
    school: "B.Tech in Computer Science",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science",
    period: {
      start: "2023",
      end: "2027",
    },
    description: `- Core CS: data structures and algorithms, DBMS, operating systems, computer networks.
- Coursework projects in Java (banking management system) and machine learning labs in Python.
- 1,000+ DSA problems solved across LeetCode, Codeforces, CodeChef and GeeksforGeeks alongside the degree.`,
    skills: [
      "Java",
      "Python",
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
    ],
    isExpanded: true,
  },
]
