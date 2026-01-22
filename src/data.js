import blockade from "./assets/blockade.png";
import placeholder from "./assets/placeholder.png";

// Import certificates
import javaFundCert from "./assets/Programming Fundamentals with Java - May 2023 - Certificate.pdf";
import javaAdvCert from "./assets/Java Advanced - September 2023 - Certificate.pdf";
import javaOopCert from "./assets/Java OOP - October 2023 - Certificate.pdf";
// Note: Daniel Nedyalkov CV.pdf is usually for the About/Resume section, but could be listed here if it was a specific milestone.

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
        isFinished: true,
        status: "completed",
        github: "https://github.com/DanielNed11/CleanTank",
        featured: true,
        category: "IoT System"
    },
    {
        id: 3,
        title: "F1 Manager Web App",
        description: "A Spring Boot + Thymeleaf application to manage F1 drivers, teams, and races, with multilingual support.",
        technologies: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap"],
        image: placeholder,
        isFinished: true,
        status: "completed",
        github: "https://github.com/DanielNed11/F1-Managmant-System",
        featured: true,
        category: "Web Application"
    },
    {
        id: 4,
        title: "Chess Engine",
        description: "A custom-built chess engine written in C++ featuring piece movement logic, move validation, board representation, and future AI search capabilities.",
        technologies: ["C++", "WASM", "CMake", "Algorithms"],
        image: placeholder,
        isFinished: false,
        status: "planning",
        github: "",
        featured: true,
        category: "Console Application"
    },
];

export const journey = [
    {
        id: 1,
        date: "May 2023",
        title: "Programming Fundamentals with Java",
        subtitle: "Software University (SoftUni)",
        description: "Mastered the core concepts of programming, including loops, arrays, methods, and basic data structures in Java.",
        type: "education",
        certificate: javaFundCert
    },
    {
        id: 2,
        date: "September 2023",
        title: "Java Advanced",
        subtitle: "Software University (SoftUni)",
        description: "Deepened knowledge in Java with streams, stacks, queues, multidimensional arrays, and functional programming concepts.",
        type: "education",
        certificate: javaAdvCert
    },
    {
        id: 3,
        date: "October 2023",
        title: "Java OOP",
        subtitle: "Software University (SoftUni)",
        description: "Learned Object-Oriented Programming principles: Encapsulation, Inheritance, Abstraction, and Polymorphism, along with Design Patterns.",
        type: "education",
        certificate: javaOopCert
    },
    {
        id: 4,
        date: "Present",
        title: "Applied Computer Science",
        subtitle: "University",
        description: "Currently a second-year student focusing on full-stack development, IoT, and embedded systems.",
        type: "education",
        certificate: null
    }
];