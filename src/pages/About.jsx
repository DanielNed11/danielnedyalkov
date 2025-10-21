import React from "react";
import "../styles/main.css";

function About() {
    return (
        <div className="container mt-5 mb-5 p-4">
            <h2 className="text-center mb-4">About Me</h2>

            <p>
                My name is <strong>Daniel Nedyalkov</strong>, and I’m currently studying
                <strong> Applied Computer Science</strong> at Karel de Grote University in Antwerp, Belgium.
                I’m a curious developer who enjoys solving complex technical problems and turning creative ideas into real applications.
            </p>

            <p>
                I have hands-on experience with both <strong>software engineering</strong> and <strong>embedded systems</strong>.
                Some of my favorite projects include developing a <em>3D JavaFX board game (Blockade)</em>, an
                <em>IoT-based water-quality monitoring system (Clean Tank)</em>, and a
                <em>Spring Boot web application for managing F1 teams and races</em>.
            </p>

            <h4 className="mt-4">Core Skills</h4>
            <ul>
                <li><strong>Programming Languages:</strong> Java, C, C++, C#, Python, JavaScript, SQL, PostgreSQL</li>
                <li><strong>Frameworks:</strong> Spring Boot, Flask, React, JavaFX</li>
                <li><strong>Tools & Technologies:</strong> Git, Docker, IntelliJ, Arduino, Bootstrap, REST APIs</li>
            </ul>

            <p className="mt-4">
                I’m always open to learning new technologies, exploring team projects, and improving my development practices.
                My goal is to become a versatile full-stack developer who can work across multiple layers of modern systems —
                from database design to front-end development and IoT integration.
            </p>
        </div>
    );
}

export default About;
