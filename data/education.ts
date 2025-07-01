export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "VITB",
      degree: "Bachelor of Science in Computer Science and Business Systems",
      institution: "Vishnu Institute of Technology",
      location: "Bhimavaram, India",
      startDate: "October 2022",
      endDate: "November 2026",
      gpa: "8.5/10.00"
    }
  ];