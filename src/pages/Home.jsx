import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Home() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatedSection>
        <section className="min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8} xl={6}>
                        <h1 className="display-3 fw-bold mb-4">
                            Hi, I'm <span className="name">Daniel Nedyalkov</span> 👋
                        </h1>

                        <p className="lead mb-4">
                            I'm a second-year <strong>Applied Computer Science</strong> student passionate about
                            <strong> full-stack development</strong>, <strong> IoT systems</strong>, and
                            <strong> embedded programming</strong>.
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <button onClick={scrollToProjects} className="btn-sm px-4">
                                My Projects
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="btn-sm px-4"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </AnimatedSection>
    );
}

export default Home;
