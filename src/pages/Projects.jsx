import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Projects() {
    return (
        <AnimatedSection>
        <section className="py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="display-4 fw-bold mb-3">Featured Projects</h2>
                        <p className="lead text-muted">
                            A showcase of my recent work and technical projects
                        </p>
                    </Col>
                </Row>
                
                <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                    {projects.map((project) => (
                        <Col key={project.id}>
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
        </AnimatedSection>
    );
}

export default Projects;
