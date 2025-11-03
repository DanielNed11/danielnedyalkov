import React, { useState, useMemo, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaPython, FaJsSquare, FaReact, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiPostgresql, SiSpring, SiFlask, SiBootstrap, SiArduino } from "react-icons/si";

function About() {
    const [flippedCards, setFlippedCards] = useState(new Set());

    const toggleFlip = useCallback((id) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, []);

    const skills = useMemo(() => ({
        languages: [
            { id: 'java', name: 'Java', icon: <FaJava />, description: 'Robust OOP knowledge applied across academic and production-style projects', projects: 'F1 Management System, Blockade Game' },
            { id: 'python', name: 'Python', icon: <FaPython />, description: 'Backend scripting, IoT data pipelines, automation tasks and API integration', projects: 'Clean Tank' },
            { id: 'javascript', name: 'JavaScript', icon: <FaJsSquare />, description: 'Core language of the web, powering interactive UIs and application logic', projects: 'This Portfolio, Web Projects' },
            { id: 'cpp', name: 'C/C++', icon: <SiCplusplus />, description: 'Performance-focused systems programming and embedded hardware integration', projects: 'IoT Projects, Embedded Systems, Chess engine' },
            { id: 'sql', name: 'SQL', icon: <SiPostgresql />, description: 'Database querying, schema design, normalization and data analytics', projects: 'Blockade Game, Clean Tank, Bricks' },
        ],
        frameworks: [
            { id: 'spring', name: 'Spring Boot', icon: <SiSpring />, description: 'Enterprise REST APIs, layered architecture, dependency injection and services', projects: 'F1 Management System' },
            { id: 'flask', name: 'Flask', icon: <SiFlask />, description: 'Lightweight backend for rapid prototyping and sensor-driven data ingestion', projects: 'Clean Tank' },
            { id: 'react', name: 'React', icon: <FaReact />, description: 'Dynamic UI composition using components, hooks, routing and state patterns', projects: 'Portfolio' },
            { id: 'javafx', name: 'JavaFX', icon: <FaJava />, description: 'Interactive desktop UIs, event-driven game logic and custom rendering', projects: 'Blockade 3D Game' },
            { id: 'bootstrap', name: 'Bootstrap', icon: <SiBootstrap />, description: 'Responsive UI layout, utility classes and theme-oriented styling', projects: 'Portfolio, F1 Management System' },
        ],
        tools: [
            { id: 'git', name: 'Git', icon: <FaGitAlt />, description: 'Version control, branching workflows, collaboration and CI-friendly processes', projects: 'All Projects' },
            { id: 'postgresql', name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Relational DB management, query optimization and performance-driven analytics', projects: 'Blockade Game, Clean Tank, Bricks' },
            { id: 'arduino', name: 'Arduino', icon: <SiArduino />, description: 'Sensor integration, microcontroller I/O, calibration logic and serial communication', projects: 'Clean Tank, Treasure Hunt' },
        ],
    }), []);

    const SkillCard = React.memo(
        ({ skill, category, isFlipped, onToggle }) => {
            return (
                <div className={`skill-flip-card ${isFlipped ? 'flipped' : ''}`} onClick={onToggle}>
                    <div className="skill-flip-inner">
                        <div className={`skill-flip-front skill-${category}`}>
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-hint">Click to flip</div>
                        </div>
                        <div className={`skill-flip-back skill-${category}`}>
                            <div className="skill-back-title">{skill.name}</div>
                            <div className="skill-back-description d-none d-sm-block">{skill.description}</div>
                            <div className="skill-back-projects">Used in: {skill.projects}</div>
                        </div>
                    </div>
                </div>
            );
        },
        (prev, next) => prev.isFlipped === next.isFlipped
    );

    return (
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center mb-5 text-center">
                        <Col lg={12}>
                            <h2 className="display-4 fw-bold mb-3">About Me</h2>
                            <p className="lead text-muted">Passionate developer with expertise across the full stack</p>
                        </Col>
                    </Row>

                    <Row className="g-4 mb-5">
                        <Col lg={12}>
                            <div className="pe-lg-4 text-center">
                                <p className="fs-5 mb-4">
                                    I’m currently studying <strong>Applied Computer Science</strong> at Karel de Grote University in Antwerp, Belgium. I’m a curious developer who enjoys solving complex technical problems and turning creative ideas into real applications.
                                </p>
                                <p className="fs-5 mb-4">
                                    I love challenging myself with projects that blend creativity, strategy, and problem‑solving.
                                </p>
                                <p className="fs-5 mb-4">
                                    I’m always open to learning new technologies, exploring team projects, and improving my development practices. My goal is to become a versatile full-stack developer who can work across multiple layers of modern systems — from database design to front-end development and IoT integration.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-4 text-center">
                        <Col lg={12}>
                            <h3 className="display-6 fw-bold mb-2">My Skills & Expertise</h3>
                            <p className="text-muted">Click any skill to see where I’ve used it</p>
                        </Col>
                    </Row>

                    {/* Programming Languages */}
                    <div className="skill-section mb-5">
                        <div className="skill-section-header">
                            <span className="skill-section-icon">💻</span>
                            <h4 className="skill-section-title">Programming Languages</h4>
                            <div className="skill-section-line"></div>
                        </div>
                        <Row className="g-3 justify-content-center mb-5">
                            {skills.languages.map(skill => (
                                <Col xs={6} sm={6} md={4} lg={3} key={skill.id} className="d-flex">
                                    <SkillCard
                                        skill={skill}
                                        category="language"
                                        isFlipped={flippedCards.has(skill.id)}
                                        onToggle={() => toggleFlip(skill.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Frameworks */}
                    <div className="skill-section mb-5">
                        <div className="skill-section-header">
                            <span className="skill-section-icon">⚛️</span>
                            <h4 className="skill-section-title">Frameworks & Libraries</h4>
                            <div className="skill-section-line"></div>
                        </div>
                        <Row className="g-3 justify-content-center mb-5">
                            {skills.frameworks.map(skill => (
                                <Col xs={6} sm={6} md={4} lg={3} key={skill.id} className="d-flex ">
                                    <SkillCard
                                        skill={skill}
                                        category="framework"
                                        isFlipped={flippedCards.has(skill.id)}
                                        onToggle={() => toggleFlip(skill.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="skill-section">
                        <div className="skill-section-header">
                            <span className="skill-section-icon">🛠️</span>
                            <h4 className="skill-section-title">Tools & Technologies</h4>
                            <div className="skill-section-line"></div>
                        </div>
                        <Row className="g-3 justify-content-center mb-5">
                            {skills.tools.map(skill => (
                                <Col xs={6} sm={6} md={4} lg={3} key={skill.id} className="d-flex">
                                    <SkillCard
                                        skill={skill}
                                        category="tool"
                                        isFlipped={flippedCards.has(skill.id)}
                                        onToggle={() => toggleFlip(skill.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
    );
}

export default About;