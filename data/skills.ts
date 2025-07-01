export type SkillCategory =
  | "Languages"
  | "UI/UX Designing"
  | "Data Analytics"
  | "Core Subjects"
  | "Web Development"
  | "AI-ML Technologies"
  | "Cloud Computing & DevOps";

export interface Skill {
  name: string;
  logoKey: string; // This should match your TechIcon keys
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "Python", logoKey: "python" },
    { name: "Java", logoKey: "java" },
    { name: "C", logoKey: "c" },
  ],
  "UI/UX Designing": [
    { name: "Figma", logoKey: "figma" },
    { name: "Wireframing", logoKey: "wireframe" },
    { name: "Prototyping", logoKey: "prototype" },
    { name: "Design Systems", logoKey: "designsystem" },
  ],
  "Data Analytics": [
    { name: "Data Visualization", logoKey: "dataviz" },
    { name: "SQL", logoKey: "sql" },
    { name: "Excel", logoKey: "excel" },
    { name: "Power BI", logoKey: "powerbi" },
    { name: "Tableau", logoKey: "tableau" },
  ],
  "Core Subjects": [
    { name: "DSA", logoKey: "dsa" },
    { name: "System Design", logoKey: "systemdesign" },
    { name: "Cryptography", logoKey: "crypto" },
    { name: "Network Security", logoKey: "network" },
  ],
  "Web Development": [
    { name: "HTML", logoKey: "html" },
    { name: "CSS", logoKey: "css" },
    { name: "JavaScript", logoKey: "javascript" },
    { name: "TailwindCSS", logoKey: "tailwind" },
    { name: "Bootstrap", logoKey: "bootstrap" },
    { name: "React.js", logoKey: "react" },
    { name: "Node.js", logoKey: "node" },
    { name: "Express.js", logoKey: "express" },
    { name: "MongoDB", logoKey: "mongodb" },
    { name: "Firebase", logoKey: "firebase" },
  ],
  "AI-ML Technologies": [
    { name: "Pytorch", logoKey: "pytorch" },
    { name: "Scikit-learn", logoKey: "scikit" },
    { name: "Deep Learning", logoKey: "deeplearning" },
    { name: "NLP", logoKey: "nlp" },
    { name: "Gen-AI", logoKey: "genai" },
  ],
  "Cloud Computing & DevOps": [
    { name: "AWS Cloud", logoKey: "aws" },
    { name: "Docker", logoKey: "docker" },
    { name: "Kubernetes", logoKey: "kubernetes" },
    { name: "Git", logoKey: "git" },
    { name: "GitHub", logoKey: "github" },
    { name: "Linux", logoKey: "linux" },
    { name: "CI/CD Pipelines", logoKey: "cicd" },
  ],
};