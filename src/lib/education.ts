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
    certificationUrl: ""   // TODO: link a título/constancia
  },
  {
    institution: "Oracle ONE / Alura LATAM",
    detail: "Backend with Java Certification",
    year: "2023",
    url: "https://www.aluracursos.com/",               // TODO: URL del programa
    featured: true,
    image: "/logos/Oracle1.png", 
    certification: "Backend with Java Certification",
    certificationUrl: ""   // TODO: link oficial de la credencial
  },
  {
    institution: "ICOHS College",
    detail: "Cybersecurity Specialist",
    year: "2025",
    url: "https://icohs.edu/",               // TODO: URL del college o programa
    featured: false,
    image: "/logos/icohs.png", 
    certification: "",
    certificationUrl: ""
  }
];
