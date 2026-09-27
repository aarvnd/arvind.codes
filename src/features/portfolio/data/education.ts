import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "galgotias",
    school: "Galgotias University",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science",
    period: {
      start: "2024",
      end: "2028",
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
  {
    id: "ganga-singh-college",
    school: "Ganga Singh College",
    degree: "Senior Secondary (Class 12)",
    period: {
      start: "2020",
      end: "2022",
    },
  },
  {
    id: "scholars-abode",
    school: "Scholars Abode",
    degree: "Secondary (Class 10)",
    period: {
      start: "2020",
      end: "2020",
    },
  },
]
