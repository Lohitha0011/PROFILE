export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'research' | 'education' | 'leadership' | 'internship';
}

export const experiences: Experience[] = [
  {
    id: "ai-ml-intern",
    title: "AI-ML Intern",
    company: "AWS (AICTE Eduskills)",
    location: "Remote",
    startDate: "01/2024",
    endDate: "03/2024",
    description: "Collaborated with peers to solve complex machine learning problems using AWS infrastructure.",
    achievements: [
      "Enhanced knowledge of cloud-based machine learning workflows, including data processing, training, and deployment."
    ],
    type: "internship"
  },
  {
    id: "cloud-foundations-intern",
    title: "Cloud Foundations Intern",
    company: "AWS (AICTE Eduskills)",
    location: "Remote",
    startDate: "04/2024",
    endDate: "06/2024",
    description: "Completed foundational training on core AWS cloud services, including compute, storage, networking, and security.",
    achievements: [
      "Acquired skills in cloud concepts, AWS architecture, and services like EC2, S3, RDS, and IAM."
    ],
    type: "internship"
  },
  {
    id: "web-dev-intern",
    title: "Web Development Intern",
    company: "Eduskills Academy",
    location: "Remote",
    startDate: "04/2025",
    endDate: "06/2025",
    description: "Completed foundational training on full stack web development using HTML, CSS, JavaScript, Tailwind CSS, and Git.",
    achievements: [
      "Gained hands-on experience with SQL and MongoDB for database integration and dynamic web application development."
    ],
    type: "internship"
  },
  {
    id: "accenture-data-analytics",
    title: "Data Analytics Virtual Experience",
    company: "Accenture (Forage)",
    location: "Remote",
    startDate: "05/2025",
    endDate: "05/2025",
    description: "Analyzed 7 datasets to identify social media content trends and strategic insights.",
    achievements: [
      "Delivered findings via PowerPoint and video presentation to simulate client advisory."
    ],
    type: "internship"
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Virtual Experience",
    company: "Deloitte (Forage)",
    location: "Remote",
    startDate: "05/2025",
    endDate: "05/2025",
    description: "Completed a Deloitte job simulation involving data analysis and forensic technology.",
    achievements: [
      "Created a data dashboard using Tableau.",
      "Used Excel to classify data and draw business conclusions."
    ],
    type: "internship"
  },
  {
    id: "campus-connect",
    title: "Project: Campus Connect",
    company: "Personal Project",
    location: "Remote",
    startDate: "2024",
    endDate: "2024",
    description: "Developed a web platform connecting college students with freelancing opportunities.",
    achievements: [
      "Built client selection system, integrated payment functionality, and designed intuitive interface for managing tasks, profiles, and transactions.",
      "Technologies: React.js, Node.js, Express.js, Firebase."
    ],
    type: "work"
  },
  {
    id: "prepmaster",
    title: "Project: PrepMaster",
    company: "Personal Project",
    location: "Remote",
    startDate: "2024",
    endDate: "2024",
    description: "Developed a web platform to help students excel in placements through a structured approach.",
    achievements: [
      "Integrated progress tracking tools, curated placement resources, and built a collaborative community forum.",
      "Technologies: React.js, TailwindCSS, Node.js, Express.js, MongoDB."
    ],
    type: "work"
  },
  {
    id: "alumni-platform",
    title: "Project: Alumni Association Platform",
    company: "Personal Project",
    location: "Remote",
    startDate: "2024",
    endDate: "2024",
    description: "Developed a web application for the Alumni Association to enhance alumni engagement.",
    achievements: [
      "Integrated job portals, donation modules, and seamless event registration.",
      "Technologies: React.js, TailwindCSS, Node.js, Express.js, MongoDB."
    ],
    type: "work"
  },
  {
    id: "face-emotion-detection",
    title: "Project: Face Emotion Detection Model",
    company: "Personal Project",
    location: "Remote",
    startDate: "2023",
    endDate: "2023",
    description: "Built a machine learning model to detect emotions from facial expressions using CNNs.",
    achievements: [
      "Trained the model on a labeled dataset, enabling classification of emotions such as happiness, sadness, surprise, and anger.",
      "Technologies: Python, TensorFlow, Keras, OpenCV."
    ],
    type: "work"
  },
  {
    id: "genai-chatbot",
    title: "Project: Chatbot Using Generative AI",
    company: "Personal Project",
    location: "Remote",
    startDate: "2023",
    endDate: "2023",
    description: "Developed a GenAI-based chatbot that combines retrieval and generative techniques for context-aware, dynamic responses.",
    achievements: [
      "Built a real-time, interactive interface to provide relevant answers for user queries.",
      "Technologies: Python, Hugging Face Transformers, RAG, GPT."
    ],
    type: "work"
  }
];