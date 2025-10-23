import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AnimatedSection from "../components/AnimatedSection.jsx";

const contactInfo = [
    {
        icon: "📧",
        label: "Email",
        value: "dani.nedqlkow@gmail.com",
        href: "mailto:dani.nedqlkow@gmail.com",
    },
    {
        icon: "💼",
        label: "LinkedIn",
        value: "Daniel Nedyalkov",
        href: "https://www.linkedin.com/in/daniel-nedyalkov17",
        target: "_blank",
    },
    {
        icon: "🐙",
        label: "GitHub",
        value: "DanielNed11",
        href: "https://github.com/DanielNed11",
        target: "_blank",
    }
];

function Contact() {
    return (
        <AnimatedSection>
        <section className="py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="display-4 fw-bold mb-3">Let's Connect</h2>
                        <p className="lead text-muted">
                            I'm always open to new opportunities, collaborations, or simply a chat about technology and innovation.
                            Feel free to reach out — I'll be happy to connect!
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 mb-5 justify-content-center">
                    {contactInfo.map((contact, index) => (
                        <Col key={index} md={4}>
                            <Card 
                                as="a"
                                href={contact.href}
                                target={contact.target}
                                rel={contact.target ? "noopener noreferrer" : undefined}
                                className={`h-100 text-decoration-none`}
                            >
                                <Card.Body className="text-center p-4">
                                    <div className="display-4 mb-3">{contact.icon}</div>
                                    <h5 className="card-title">{contact.label}</h5>
                                    <p className="card-text text-muted">{contact.value}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <a
                                href="mailto:dani.nedqlkow@gmail.com"
                                className="btn-sm px-4"
                            >
                                Send me an Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/daniel-nedyalkov17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-sm px-4"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            </AnimatedSection>
    );
}

export default Contact;
