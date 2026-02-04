import React, { useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
    FaUser,
    FaGraduationCap,
    FaCode,
    FaLightbulb,
    FaRocket,
    FaHeart,
    FaChess,
    FaGamepad,
    FaBook,
    FaArrowRight,
    FaMapMarkerAlt,
    FaUniversity
} from "react-icons/fa";
import Stats from "../components/Stats";

function AboutMe() {
    const navigate = useNavigate();

    const interests = [
        { icon: <FaChess />, title: "Chess", description: "Strategic thinking and problem-solving" },
        { icon: <FaCode />, title: "Coding Challenges", description: "Algorithmic puzzles and competitions" },
        { icon: <FaGamepad />, title: "Game Development", description: "Creating interactive experiences" },
        { icon: <FaBook />, title: "Tech Reading", description: "Staying updated with industry trends" }
    ];

    const values = [
        { icon: <FaLightbulb />, title: "Continuous Learning", description: "Always exploring new technologies and improving my skills" },
        { icon: <FaRocket />, title: "Innovation", description: "Building creative solutions to complex problems" },
        { icon: <FaHeart />, title: "Quality Code", description: "Writing clean, maintainable, and efficient code" }
    ];

    const statsData = useMemo(() => [
        {
            icon: <FaGraduationCap />,
            value: "2nd Year",
            label: "Study Year",
            variant: "success"
        },
        {
            icon: <FaUniversity />,
            value: "Karel de Grote",
            label: "University",
            variant: "info"
        },
        {
            icon: <FaMapMarkerAlt />,
            value: "Antwerp, BE",
            label: "Location",
            variant: "primary"
        },
        {
            icon: <FaHeart />,
            value: values.length,
            label: "Core Values",
            variant: "warning"
        }
    ], [values.length]);

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaUser className="hero-icon" />
                                About Me
                            </h1>
                            <p className="hero-subtitle">
                                Passionate <strong>full-stack developer</strong> and <strong>computer science student</strong> building the future, one project at a time
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} />

            {/* Main Bio Section */}
            <section className="about-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Card className="about-bio-card">
                                <Card.Body className="p-4 p-md-5">
                                    <h2 className="about-section-title text-center mb-4">
                                        <FaGraduationCap className="me-3" style={{ color: 'var(--accent)' }} />
                                        My Story
                                    </h2>

                                    <div className="about-bio-content">
                                        <p className="lead">
                                            I'm currently studying <strong>Applied Computer Science</strong> at Karel de Grote University in Antwerp, Belgium. I'm a curious developer who enjoys solving complex technical problems and turning creative ideas into real applications.
                                        </p>

                                        <p>
                                            My journey into programming started with a fascination for how things work under the hood. From building simple console applications to developing full-stack web systems and IoT solutions, I've always been driven by the desire to create something meaningful and impactful.
                                        </p>

                                        <p>
                                            I love challenging myself with projects that blend <strong>creativity</strong>, <strong>strategy</strong>, and <strong>problem-solving</strong>. Whether it's designing a chess engine in C++, building an IoT water monitoring system, or creating responsive web applications, each project teaches me something new.
                                        </p>

                                        <p className="mb-0">
                                            I'm always open to learning new technologies, exploring team projects, and improving my development practices. My goal is to become a versatile full-stack developer who can work across multiple layers of modern systems — from database design to front-end development and IoT integration.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* What I Value Section */}
            <section className="about-section about-section-alt">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="about-section-title">
                            <FaHeart className="me-3" style={{ color: 'var(--accent)' }} />
                            What I Value
                        </h2>
                        <p className="about-section-subtitle">
                            The principles that guide my work
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        {values.map((value, index) => (
                            <Col key={index} md={6} lg={4}>
                                <Card className="about-value-card h-100">
                                    <Card.Body className="text-center p-4">
                                        <div className="about-value-icon mb-3">
                                            {value.icon}
                                        </div>
                                        <h3 className="about-value-title">{value.title}</h3>
                                        <p className="about-value-description">{value.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Interests Section */}
            <section className="about-section">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="about-section-title">
                            <FaGamepad className="me-3" style={{ color: 'var(--accent)' }} />
                            My Interests
                        </h2>
                        <p className="about-section-subtitle">
                            What I enjoy beyond coding
                        </p>
                    </div>

                    <Row className="g-4">
                        {interests.map((interest, index) => (
                            <Col key={index} sm={6} lg={3}>
                                <Card className="about-interest-card h-100">
                                    <Card.Body className="text-center p-4">
                                        <div className="about-interest-icon mb-3">
                                            {interest.icon}
                                        </div>
                                        <h3 className="about-interest-title">{interest.title}</h3>
                                        <p className="about-interest-description">{interest.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <h2 className="about-cta-title">Want to see my technical skills?</h2>
                            <p className="about-cta-subtitle mb-4">
                                Check out my tech stack, frameworks, and tools I work with
                            </p>
                            <button
                                onClick={() => navigate('/skills')}
                                className="btn-lg"
                                aria-label="View my skills and tech stack"
                            >
                                View My Skills <FaArrowRight className="ms-2" />
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AboutMe;
