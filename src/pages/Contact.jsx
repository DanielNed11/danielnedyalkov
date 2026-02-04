import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Form, Spinner } from "react-bootstrap";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaPaperPlane,
    FaEnvelope,
    FaClock,
    FaCheckCircle,
    FaExclamationCircle,
    FaGlobe
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cvFile from "../assets/Daniel Nedyalkov CV.pdf";
import Stats from "../components/Stats";

const contactInfo = [
    {
        icon: <MdEmail />,
        label: "Email",
        value: "dani.nedqlkow@gmail.com",
        href: "mailto:dani.nedqlkow@gmail.com",
        description: "Send me an email"
    },
    {
        icon: <FaLinkedin />,
        label: "LinkedIn",
        value: "Daniel Nedyalkov",
        href: "https://www.linkedin.com/in/daniel-nedyalkov17",
        target: "_blank",
        description: "Connect professionally"
    },
    {
        icon: <FaGithub />,
        label: "GitHub",
        value: "DanielNed11",
        href: "https://github.com/DanielNed11",
        target: "_blank",
        description: "Check out my code"
    }
];

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear validation error for this field
        if (validationErrors[name]) {
            setValidationErrors({
                ...validationErrors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

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
                setValidationErrors({});

                // Auto-hide success message after 5 seconds
                setTimeout(() => setFormStatus(''), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus(''), 5000);
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 5000);
        }
    };

    // Quick facts stats
    const statsData = useMemo(() => [
        {
            icon: <FaGlobe />,
            value: "Bulgaria • Belgium",
            label: "Location",
            variant: "info"
        },
        {
            icon: <FaEnvelope />,
            value: "Email & LinkedIn",
            label: "Best channels",
            variant: "success"
        },
        {
            icon: <FaGlobe />,
            value: "Europe • Brussels",
            label: "Timezone",
            variant: "info"
        },
        {
            icon: <FaCheckCircle />,
            value: "Open",
            label: "Internships • Junior roles",
            variant: "success"
        }
    ], []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaEnvelope className="hero-icon" />
                                Get In Touch
                            </h1>
                            <p className="hero-subtitle">
                                I'm always open to new <strong>opportunities</strong>, <strong>collaborations</strong>,
                                or simply a chat about <strong>technology and innovation</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} className="contact-stats-section" />

            {/* Contact Cards Section */}
            <section className="contact-section">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title">
                            <FaEnvelope className="section-icon" />
                            Connect With Me
                        </h2>
                        <p className="section-subtitle">
                            Choose your preferred way to reach out
                        </p>
                    </div>

                    <Row className="g-4 mb-5 justify-content-center">
                        {contactInfo.map((contact, index) => (
                            <Col key={index} md={6} lg={4}>
                                <a
                                    href={contact.href}
                                    target={contact.target}
                                    rel={contact.target ? "noopener noreferrer" : undefined}
                                    className="contact-info-card"
                                >
                                    <div className="contact-info-icon">
                                        {contact.icon}
                                    </div>
                                    <h3 className="contact-info-label">{contact.label}</h3>
                                    <p className="contact-info-description">{contact.description}</p>
                                    <p className="contact-info-value">{contact.value}</p>
                                    <div className="contact-info-arrow">→</div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Contact Form Section */}
            <section className="contact-section contact-form-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Card className="contact-form-card">
                                <Card.Body className="p-4 p-md-5">
                                    <div className="text-center mb-4">
                                        <div className="contact-form-icon">
                                            <FaPaperPlane />
                                        </div>
                                        <h3 className="contact-form-title">Send Me a Message</h3>
                                        <p className="contact-form-subtitle">
                                            Fill out the form below and I'll get back to you as soon as possible
                                        </p>
                                    </div>

                                    <Form onSubmit={handleSubmit} noValidate>
                                        <Form.Group className="mb-4" controlId="formName">
                                            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                required
                                                isInvalid={!!validationErrors.name}
                                                disabled={formStatus === 'sending'}
                                                className="contact-form-input"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {validationErrors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formEmail">
                                            <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                                isInvalid={!!validationErrors.email}
                                                disabled={formStatus === 'sending'}
                                                className="contact-form-input"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {validationErrors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formMessage">
                                            <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                placeholder="Tell me about your project, question, or just say hello..."
                                                required
                                                isInvalid={!!validationErrors.message}
                                                disabled={formStatus === 'sending'}
                                                className="contact-form-input"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {validationErrors.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        {formStatus === 'success' && (
                                            <div className="contact-alert contact-alert-success">
                                                <FaCheckCircle className="contact-alert-icon" />
                                                <div>
                                                    <strong>Message sent successfully!</strong>
                                                    <p className="mb-0">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                                                </div>
                                            </div>
                                        )}

                                        {formStatus === 'error' && (
                                            <div className="contact-alert contact-alert-error">
                                                <FaExclamationCircle className="contact-alert-icon" />
                                                <div>
                                                    <strong>Oops! Something went wrong.</strong>
                                                    <p className="mb-0">Please try again or contact me directly via email.</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="text-center mt-4">
                                            <button
                                                type="submit"
                                                disabled={formStatus === 'sending'}
                                                className={`btn-lg ${formStatus === 'sending' ? 'btn-loading' : ''}`}
                                            >
                                                {formStatus === 'sending' ? (
                                                    <>
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                            className="me-2"
                                                        />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaPaperPlane className="me-2" />
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Download CV Section */}
            <section className="contact-section contact-cv-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="contact-cv-card">
                                <div className="contact-cv-content">
                                    <div className="contact-cv-icon">
                                        <FaDownload />
                                    </div>
                                    <div className="contact-cv-text">
                                        <h3 className="contact-cv-title">Download My Resume</h3>
                                        <p className="contact-cv-subtitle">
                                            Get a detailed overview of my experience, skills, and education
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={cvFile}
                                    download="Daniel_Nedyalkov_CV.pdf"
                                    className="btn-lg contact-cv-button"
                                >
                                    <FaDownload className="me-2" />
                                    Download CV
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Contact;