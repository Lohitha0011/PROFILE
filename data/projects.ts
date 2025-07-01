export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "campus-connect",
    title: "Campus Connect",
    description: "A web platform connecting college students with freelancing opportunities.",
    longDescription:
      "Developed a web platform connecting college students with freelancing opportunities, enabling clients to post tasks (e.g., video editing, data entry) and students to apply based on skills. Built a client selection system, integrated seamless payment functionality, and designed an intuitive interface for managing tasks, profiles, and transactions.",
    technologies: ["React.js", "Node.js", "Express.js", "Firebase"],
    achievements: [
      "Built client selection system and integrated payment functionality.",
      "Designed intuitive interface for managing tasks, profiles, and transactions."
    ],
    image: "/images/campus pic.jpg",
    github: "", // Add your GitHub link if available
    featured: true
  },
  {
    id: "prepmaster",
    title: "PrepMaster",
    description: "A web platform to help students excel in placements through a structured approach.",
    longDescription:
      "Developed a web platform to help students excel in placements through a structured approach, featuring a DSA roadmap and skill-building paths for Android, Web, and Cloud Development. Integrated progress tracking tools, curated placement resources (mock tests, interview tips), and built a collaborative community forum for peer discussions and mentorship.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    achievements: [
      "Integrated progress tracking tools and curated placement resources.",
      "Built a collaborative community forum for peer discussions and mentorship."
    ],
    image: "/images/prepmaster.jpg",
    github: "", // Add your GitHub link if available
    featured: true
  },
  {
    id: "alumni-platform",
    title: "Alumni Association Platform",
    description: "A web application for the Alumni Association to enhance alumni engagement.",
    longDescription:
      "Developed a web application for the Alumni Association to enhance alumni engagement, featuring user-friendly interfaces with directories and networking hubs. Integrated job portals, donation modules, and seamless event registration for career opportunities, contributions, and alumni gatherings.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    achievements: [
      "Integrated job portals, donation modules, and seamless event registration.",
      "Designed user-friendly interfaces for alumni engagement."
    ],
    image: "/images/alumni pic.jpg",
    github: "", // Add your GitHub link if available
    featured: false
  },
  {
    id: "face-emotion-detection",
    title: "Face Emotion Detection Model",
    description: "A machine learning model to detect emotions from facial expressions using CNNs.",
    longDescription:
      "Built a machine learning model to detect emotions from facial expressions using CNNs. Trained the model on a labeled dataset of facial expressions, enabling it to classify emotions such as happiness, sadness, surprise, and anger.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    achievements: [
      "Trained the model on a labeled dataset for emotion classification.",
      "Enabled classification of emotions such as happiness, sadness, surprise, and anger."
    ],
    image: "/images/face1.png",
    github: "", // Add your GitHub link if available
    featured: false
  },
  {
    id: "genai-chatbot",
    title: "Chatbot Using Generative AI",
    description: "A GenAI-based chatbot combining retrieval and generative techniques for dynamic responses.",
    longDescription:
      "Developed a GenAI-based chatbot that combines retrieval and generative techniques for context-aware, dynamic responses. Built a real-time, interactive interface to provide relevant answers for user queries.",
    technologies: ["Python", "Hugging Face Transformers", "RAG", "GPT"],
    achievements: [
      "Built a real-time, interactive interface for user queries.",
      "Combined retrieval and generative techniques for context-aware responses."
    ],
    image: "/images/chTBOT2.jpg",
    github: "", // Add your GitHub link if available
    featured: false
  }
];