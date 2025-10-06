import orbit from "@/app/assets/project/orbit.png";
import ebook from "@/app/assets/project/ebook.png";
import easybank from "@/app/assets/project/easybank.png";
import fortry from "@/app/assets/project/fortry.png";
import indotravi from "@/app/assets/project/indotravi.png";
import huddle from "@/app/assets/project/huddle.png";
import focus from "@/app/assets/project/focus.png";
import shop from "@/app/assets/project/shop.png";
import virtualr from "@/app/assets/project/virtualr.png";
import dv from "@/app/assets/project/dv.png";
import insta from "@/app/assets/project/insta.png";
import fortry2 from "@/app/assets/project/fortry2.png";
import leinad from "@/app/assets/project/leinad.png";
import legacy from "@/app/assets/project/legacy.png";
import ade from "@/app/assets/project/ade.png";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string | StaticImageData;
  liveUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Orbit",
    description:
      "A simple static website showcasing my early understanding of HTML structure and responsive CSS design.",
    technologies: ["HTML", "CSS"],
    image: orbit,
    liveUrl: "https://orbit-eta.vercel.app/index.html",
    year: "2022",
  },
  {
    id: 2,
    title: "E-book",
    description:
      "A responsive landing page built with Bootstrap to practice layout structure and framework-based styling.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: ebook,
    liveUrl: "https://e-book-alpha.vercel.app/",
    year: "2024",
  },
  {
    id: 3,
    title: "Easybank",
    description:
      "A modern bank landing page from Frontend Mentor, focused on design accuracy and responsive layout.",
    technologies: ["HTML", "CSS", "Frontend Mentor"],
    image: easybank,
    liveUrl: "https://easybank-lemon.vercel.app/index.html",
    year: "2024",
  },
  {
    id: 4,
    title: "Fortry",
    description:
      "A personal portfolio site built for a designer, translating visual concepts into a functional layout.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: fortry,
    liveUrl: "https://fortry.vercel.app/",
    year: "2024",
  },
  {
    id: 5,
    title: "Indotravi",
    description:
      "A travel-themed UI recreation from Pinterest, focusing on layout precision and clean styling.",
    technologies: ["HTML", "CSS"],
    image: indotravi,
    liveUrl: "https://indotravi-inky.vercel.app",
    year: "2024",
  },
  {
    id: 6,
    title: "Huddle",
    description:
      "A responsive landing page built with HTML, CSS, and JS to strengthen layout and structure fundamentals from Frontend Mentor.",
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Mentor"],
    image: huddle,
    liveUrl: "https://huddle-beige.vercel.app/",
    year: "2025",
  },
  {
    id: 7,
    title: "FocusFlow",
    description:
      "A To-Do web app built with vanilla JavaScript for managing daily tasks interactively.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: focus,
    liveUrl: "https://focus-flow-sigma.vercel.app/",
    year: "2025",
  },
  {
    id: 8,
    title: "ShopEase",
    description:
      "A shopping cart app, my first project in react to practice state management and passing props, featuring product listing and cart management.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: shop,
    liveUrl: "https://shop-ease-orpin.vercel.app/",
    year: "2025",
  },
  {
    id: 9,
    title: "VirtualR",
    description:
      "A VR-themed landing page built with React and Tailwind to explore modern UI design.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: virtualr,
    liveUrl: "https://virtual-r-henna-sigma.vercel.app/",
    year: "2025",
  },
  {
    id: 10,
    title: "DV",
    description:
      "A modern, responsive landing page designed for a wedding-themed project.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: dv,
    liveUrl: "https://dv-taupe.vercel.app/",
    year: "2025",
  },
  {
    id: 11,
    title: "Instaclone",
    description:
      "A UI clone replicating Instagram’s layout and interactions, created to sharpen visual and functional design accuracy.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: insta,
    liveUrl: "https://instagram-clone-theta-sage.vercel.app/",
    year: "2025",
  },
  {
    id: 12,
    title: "Fortry v2",
    description:
      "An upgraded version of Fortry’s design portfolio featuring refined motion effects, enhanced UX, and cleaner storytelling.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: fortry2,
    liveUrl: "https://fortry-portfolio.vercel.app/",
    year: "2025",
  },
  {
    id: 13,
    title: "Leinad",
    description:
      "A sleek photographer portfolio highlighting dynamic galleries, smooth animations, and elegant visual flow.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: leinad,
    liveUrl: "https://leinad-gamma.vercel.app/",
    year: "2025",
  },
  {
    id: 14,
    title: "Legacy234",
    description:
      "An engaging event website created for Lagos State’s Legacy234 Paint & Sip competition to celebrate creativity and culture.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    image: legacy,
    liveUrl: "https://legacy234.org/",
    year: "2025",
  },
  {
    id: 15,
    title: "Adetunwase360",
    description:
      "Full-stack site built for Adetunwase’s, a Guiness World record holder — to collect and animates 1M Nigerian stories in attempt to break another World Record.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    image: ade,
    liveUrl: "https://adetunwase360.com/",
    year: "2025",
  },
];
