import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8} xl={6}>
                        <motion.h1
                            className="display-3 fw-bold mb-4"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Hi, I'm <span className="name">Daniel Nedyalkov</span> 👋
                        </motion.h1>

                        <motion.p
                            className="lead mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            I'm a second-year <strong>Applied Computer Science</strong> student passionate about
                            <strong> full-stack development</strong>, <strong> IoT systems</strong>, and
                            <strong> embedded programming</strong>.
                        </motion.p>

                        <motion.div
                            className="d-flex flex-column flex-sm-row gap-3 justify-content-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <button onClick={scrollToProjects} className="btn px-4">
                                My Projects
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="btn btn-outline px-4"
                            >
                                Get In Touch
                            </button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
