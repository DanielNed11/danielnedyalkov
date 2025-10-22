import blockade from "./assets/blockade.png";
import placeholder from "./assets/placeholder.png";

export const projects = [
    {
        id: 1,
        title: "Blockade Game (JavaFX)",
        description: "A 3D board game recreation using MVP architecture, rule-based AI, and movement logic with visual highlights.",
        technologies: ["Java", "JavaFX", "MVP Pattern", "Bash", "PostgreSQL"],
        image: blockade,
        isFinished: true,
        status: "completed",
        github: "https://github.com/DanielNed11/Blockade-Game",
        featured: true,
        category: "Desktop Application"
    },
    {
        id: 2,
        title: "Clean Tank",
        description: "An Arduino-based water-quality monitoring system connected to a receiver on a RedHat server and Spring Boot application.",
        technologies: ["Java", "Arduino", "Python", "Bash", "Spring Boot", "PostgreSQL"],
        image: placeholder,
        isFinished: false,
        status: "development",
        github: "",
        featured: true,
        category: "IoT System"
    },
    {
        id: 3,
        title: "F1 Manager Web App",
        description: "A Spring Boot + Thymeleaf application to manage F1 drivers, teams, and races, with multilingual support.",
        technologies: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap"],
        image: placeholder,
        isFinished: false,
        status: "planning",
        github: "",
        featured: true,
        category: "Web Application"
    },
];
