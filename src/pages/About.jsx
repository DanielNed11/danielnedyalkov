import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import AnimatedSection from "../components/AnimatedSection.jsx";

const skills = {
    languages: ["Java", "C", "C++", "C#", "Python", "JavaScript", "SQL", "PostgreSQL"],
    frameworks: ["Spring Boot", "Flask", "React", "JavaFX", "Bootstrap"],
    tools: ["Git", "Arduino", "REST APIs", "PostgreSQL"],
};

function About() {
    return (

        <AnimatedSection>
        <section className="py-5">
            <Container>
                <Row className="justify-content-center mb-5 text-center">
                    <Col lg={12}>
                        <h2 className="display-4 fw-bold mb-3">About Me</h2>
                        <p className="lead text-muted">
                            Passionate developer with a love for solving complex problems.
                        </p>
                    </Col>
                </Row>

                {/* === Main Content === */}
                <Row className="g-4 align-items-stretch">
                    {/* === Text Column === */}
                    <Col lg={7}>
                        <div className="pe-lg-4">
                            <p className="fs-5 mb-4">
                                My name is <strong>Daniel Nedyalkov</strong>, and I'm currently studying
                                <strong> Applied Computer Science</strong> at Karel de Grote University in Antwerp, Belgium.
                                I'm a curious developer who enjoys solving complex technical problems and turning creative ideas into real applications.
                            </p>

                            <p className="fs-5 mb-4">
                                I have hands-on experience with both <strong>software engineering</strong> and{" "}
                                <strong>embedded systems</strong>. Some of my favorite projects include developing a{" "}
                                <em>3D JavaFX board game (Blockade)</em>, an{" "}
                                <em>IoT-based water-quality monitoring system (Clean Tank)</em>, and a{" "}
                                <em>Spring Boot web application for managing F1 teams and races</em>.
                            </p>

                            <p className="fs-5 mb-0">
                                I'm always open to learning new technologies, exploring team projects, and improving my development practices.
                                My goal is to become a versatile full-stack developer who can work across multiple layers of modern systems —
                                from database design to front-end development and IoT integration.
                            </p>
                        </div>
                    </Col>

                    {/* === Skills Card === */}
                    <Col lg={5}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <h3 className=" mb-4 text fw-bold">Core Skills</h3>

                                <div className="mb-4">
                                    <h5 className="mb-3 text-muted">Programming Languages</h5>
                                    <div className="d-flex flex-wrap gap-2 bg-transparent">
                                        {skills.languages.map((skill, index) => (
                                            <Badge key={index} bg="primary" className="px-3 py-2 fw-semibold">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h5 className=" mb-3 text-muted">Frameworks</h5>
                                    <div className="d-flex flex-wrap gap-2 bg-transparent">
                                        {skills.frameworks.map((skill, index) => (
                                            <Badge key={index} bg="secondary" className="px-3 py-2 fw-semibold">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h5 className=" mb-3 text-muted">Tools & Technologies</h5>
                                    <div className="d-flex flex-wrap gap-2 bg-transparent">
                                        {skills.tools.map((skill, index) => (
                                            <Badge key={index} bg="info" className="px-3 py-2 fw-semibold">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
            </AnimatedSection>
    );
}

export default About;
