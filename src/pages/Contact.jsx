import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import { MdEmail} from "react-icons/md";

const contactInfo = [
    {
        icon: <MdEmail />,
        label: "Email",
        value: "dani.nedqlkow@gmail.com",
        href: "mailto:dani.nedqlkow@gmail.com",
    },
    {
        icon: <FaLinkedin />,
        label: "LinkedIn",
        value: "Daniel Nedyalkov",
        href: "https://www.linkedin.com/in/daniel-nedyalkov17",
        target: "_blank",
    },
    {
        icon: <FaGithub />,
        label: "GitHub",
        value: "DanielNed11",
        href: "https://github.com/DanielNed11",
        target: "_blank",
    }
];

function Contact() {
    return (
            <section className="p-0">
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
                                    className="contact-card h-100 text-decoration-none border-0 shadow-sm"
                                >
                                    <Card.Body className="text-center p-4">
                                        <div className="display-4 mb-3">{contact.icon}</div>
                                        <h5 className="card-title fw-bold">{contact.label}</h5>
                                        <p className="card-text text-muted mb-0">{contact.value}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>


                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <a href="src/assets/Daniel Nedyalkov CV.pdf" download className="btn-sm px-4">
                                <FaDownload /> Download Resume
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
}

export default Contact;