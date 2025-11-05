import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-vh-100 d-flex align-items-center hero-section">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8} xl={6}>
                        <div>
                            <div className="mb-3">
                                <span className="greeting-text">Hi, I'm</span>
                            </div>

                            <h1 className="hero-name mb-4">
                                <span className="name-animated">Daniel Nedyalkov</span>
                            </h1>

                            <p className="lead hero-description mb-4">
                                I'm a second-year <strong>Applied Computer Science</strong> student passionate about
                                <strong> full-stack development</strong>, <strong> IoT systems</strong>, and
                                <strong> embedded programming</strong>.
                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                <button
                                    onClick={scrollToProjects}
                                    className="btn-sm px-4"
                                >
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

                            {/* Scroll indicator */}
                            <div className="scroll-indicator mt-5">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;