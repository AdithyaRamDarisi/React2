export const students = [
  {
    id: 1,
    name: "Adithya",
    role: "Frontend Developer",
    department: "Frontend",
    email: "adithya@example.com",
    status: "Active",
    skills: ["React", "JavaScript", "CSS"],
    score: 92
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Developer",
    department: "Backend",
    email: "rahul@example.com",
    status: "Active",
    skills: ["Node.js", "Express", "MongoDB"],
    score: 85
  },
  {
    id: 3,
    name: "Sneha",
    role: "UI Designer",
    department: "Design",
    email: "sneha@example.com",
    status: "Inactive",
    skills: ["Figma", "UI", "UX"],
    score: 88
  },
  {
    id: 4,
    name: "Kiran",
    role: "React Developer",
    department: "Frontend",
    email: "kiran@example.com",
    status: "Active",
    skills: ["React", "Redux", "HTML"],
    score: 90
  },
  {
    id: 5,
    name: "Priya",
    role: "API Developer",
    department: "Backend",
    email: "priya@example.com",
    status: "Inactive",
    skills: ["API", "Java", "SQL"],
    score: 78
  },
  {
    id: 6,
    name: "Arjun",
    role: "UI Designer",
    department: "Design",
    email: "arjun@example.com",
    status: "Active",
    skills: ["CSS", "Figma", "Design"],
    score: 95
  }
];

export const departments = [
  {
    id: 101,
    name: "Frontend",
    manager: "Frontend Manager",
    employees: [
      { id: 1, name: "Adithya", role: "Frontend Developer" },
      { id: 4, name: "Kiran", role: "React Developer" }
    ]
  },
  {
    id: 102,
    name: "Backend",
    manager: "Backend Manager",
    employees: [
      { id: 2, name: "Rahul", role: "Backend Developer" },
      { id: 5, name: "Priya", role: "API Developer" }
    ]
  },
  {
    id: 103,
    name: "Design",
    manager: "Design Manager",
    employees: [
      { id: 3, name: "Sneha", role: "UI Designer" },
      { id: 6, name: "Arjun", role: "UI Designer" }
    ]
  }
];