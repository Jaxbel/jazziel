export type EdcucationItem = {
  institution: string;
  detail: string;
  year?: string;
  url?: string;
  featured?: boolean;
  image?: string;
  certification?: string;
  certificationUrl?: string;
};

export const education: EdcucationItem[] = [
  {
    institution: "Instituto Tecnológico de Tijuana",
    detail: "Computer Software Engineer — August 2019",
    year: "2019 – 2024",
    url: "https://www.tijuana.tecnm.mx/",               
    featured: true,
    image: "/logos/logo_TECT.png", 
    certification: "Degree in Computer Software Engineering",
    certificationUrl: ""   
  },
  {
    institution: "Oracle ONE / Alura LATAM",
    detail: "Backend with Java",
    year: "2023",
    url: "https://www.aluracursos.com/",              
    featured: true,
    image: "/logos/Oracle1.png", 
    certification: "Backend with Java Certification",
    certificationUrl: "https://app.aluracursos.com/program/certificate/acb13fbb-eadd-4529-a7db-7d73ffe3b0de"   
  },
  {
    institution: "ICOHS College",
    detail: "Cybersecurity Specialist",
    year: "In progress",
    url: "https://icohs.edu/",               
    featured: false,
    image: "/logos/icohs.png", 
    certification: "",
    certificationUrl: ""
  }
];
