export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/Lohitha0011",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/lohithabonthu",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "lohitha0801@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+18575766733",
      icon: "phone"
    }
  ];