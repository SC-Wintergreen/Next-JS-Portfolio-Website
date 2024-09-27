import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import {
  SiShadcnui,
  SiAlwaysdata,
  SiOracle,
  SiMui,
  SiTailwindcss,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

export const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiAlwaysdata />,
      name: "Data Structures And Algorithms",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },

    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <RiBootstrapLine />,
      name: "Bootstrap",
    },
    {
      icon: <SiMui />,
      name: "Material UI Design",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCN UI",
    },

    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <SiOracle />,
      name: "Oracle SQL",
    },
    {
      icon: <DiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
  ],
};
