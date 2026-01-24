import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload, FaPaperPlane } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import cvFile from "../assets/Daniel Nedyalkov CV.pdf";

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/xlgjglll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus(''), 5000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error, ' + error.message);
        }
    };

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


                    <Row className="justify-content-center mb-5">
                        <Col lg={8}>
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <h3 className="fw-bold mb-4 text-center">Send Me a Message</h3>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Your message..."
                                                required
                                            />
                                        </Form.Group>

                                        {formStatus === 'success' && (
                                            <div className="alert alert-success" role="alert">
                                                Message sent successfully! I'll get back to you soon.
                                            </div>
                                        )}

                                        {formStatus === 'error' && (
                                            <div className="alert alert-danger" role="alert">
                                                Oops! Something went wrong. Please try again.
                                            </div>
                                        )}

                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                disabled={formStatus === 'sending'}
                                                className="btn-sm px-4"
                                                style={{ opacity: formStatus === 'sending' ? 0.6 : 1 }}
                                            >
                                                <FaPaperPlane className="me-2" />
                                                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-5">
                        <Col className="text-center">
                            <a href={cvFile} download="Daniel Nedyalkov CV.pdf" className="btn-sm px-4">
                                <FaDownload /> Download Resume
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
}

export default Contact;