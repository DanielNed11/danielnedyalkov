import React, { useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
    FaArrowRight,
    FaGraduationCap,
    FaCode,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaUser,
    FaJava,
    FaPython,
    FaJsSquare,
    FaReact,
    FaCheckCircle
} from "react-icons/fa";
import { MdEmail, MdSchool } from "react-icons/md";
import { SiCplusplus, SiSpring } from "react-icons/si";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { projects, journey } from "../data";
import Stats from "../components/Stats";

function Home() {
    const navigate = useNavigate();

    // Calculate stats
    const statsData = useMemo(() => [
        {
            icon: <FaCode />,
            value: projects.length,
            label: "Projects"
        },
        {
            icon: <FaCheckCircle />,
            value: projects.filter(p => p.isFinished).length,
            label: "Completed",
            variant: "success"
        },
        {
            icon: <FiAward />,
            value: journey.filter(j => j.certificate).length,
            label: "Certifications"
        },
        {
            icon: <FaCode />,
            value: "9+",
            label: "Technologies"
        }
    ], []);

    // Get latest/featured items
    const featuredProjects = useMemo(() => projects.filter(p => p.featured).slice(0, 3), []);
    const latestJourney = useMemo(() => journey[journey.length - 1], []);
    const certifications = useMemo(() => journey.filter(j => j.certificate).slice(0, 3), []);

    // Quick navigation cards data
    const quickLinks = [
        {
            icon: <FaUser size={32} />,
            title: "About Me",
            description: "Learn about my background, skills, and what I'm currently learning",
            path: "/about",
            color: "var(--accent)"
        },
        {
            icon: <FaCode size={32} />,
            title: "Projects",
            description: "Explore my portfolio of technical projects and applications",
            path: "/projects",
            color: "var(--accent)"
        },
        {
            icon: <FaGraduationCap size={32} />,
            title: "Journey",
            description: "Follow my educational path and professional certifications",
            path: "/journey",
            color: "var(--accent)"
        },
        {
            icon: <FaEnvelope size={32} />,
            title: "Contact",
            description: "Get in touch for opportunities or collaborations",
            path: "/contact",
            color: "var(--accent)"
        }
    ];

    const skillIcons = [
        { icon: <FaJava size={36} />, name: "Java" },
        { icon: <FaPython size={36} />, name: "Python" },
        { icon: <FaJsSquare size={36} />, name: "JavaScript" },
        { icon: <SiCplusplus size={36} />, name: "C++" },
        { icon: <SiSpring size={36} />, name: "Spring" },
        { icon: <FaReact size={36} />, name: "React" }
    ];

    return (
        <>
            {/* Hero Section - Compact */}
            <section className="hero-section hero-section--home">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaUser className="hero-icon" />
                                Hi, I'm <span className="highlight-name">Daniel Nedyalkov</span>
                            </h1>
                            <p className="hero-subtitle">
                                Second-year Applied Computer Science student specializing in
                                <strong> full-stack development</strong>, <strong>IoT systems</strong>,
                                and <strong>embedded programming</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} className="home-stats-section" />

            {/* Quick Navigation Grid */}
            <section className="home-quick-nav-section">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title">Explore My Portfolio</h2>
                        <p className="section-subtitle">Discover what I do and how I can help</p>
                    </div>
                    <Row className="g-4">
                        {quickLinks.map((link, index) => (
                            <Col key={index} md={6} lg={3}>
                                <Card
                                    className="quick-nav-card h-100"
                                    onClick={() => navigate(link.path)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            navigate(link.path);
                                        }
                                    }}
                                >
                                    <Card.Body className="text-center p-4">
                                        <div className="quick-nav-icon mb-3" style={{ color: link.color }}>
                                            {link.icon}
                                        </div>
                                        <h3 className="quick-nav-title">{link.title}</h3>
                                        <p className="quick-nav-description">{link.description}</p>
                                        <FaArrowRight className="quick-nav-arrow" />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* About Preview - Skills Showcase */}
            <section className="home-section home-section-alt">
                <Container>
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">
                                <FaUser className="section-icon" />
                                About Me
                            </h2>
                            <p className="section-subtitle">My skills and expertise</p>
                        </div>
                        <button
                            onClick={() => navigate('/about')}
                            className="btn-sm"
                            aria-label="View full about page"
                        >
                            Learn More <FaArrowRight className="ms-2" />
                        </button>
                    </div>

                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="about-preview-text">
                                <p className="lead">
                                    I'm a passionate developer studying <strong>Applied Computer Science</strong> at
                                    Karel de Grote University in Antwerp, Belgium.
                                </p>
                                <p>
                                    I love tackling complex problems and building applications that blend
                                    creativity with technical excellence. From IoT systems to full-stack web
                                    applications, I'm always exploring new technologies.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="skills-preview-grid">
                                {skillIcons.map((skill, index) => (
                                    <div key={index} className="skill-preview-item">
                                        <div className="skill-preview-icon">
                                            {skill.icon}
                                        </div>
                                        <div className="skill-preview-name">{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Projects Preview */}
            <section className="home-section">
                <Container>
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">
                                <FaCode className="section-icon" />
                                Featured Projects
                            </h2>
                            <p className="section-subtitle">Building real-world solutions</p>
                        </div>
                        <button
                            onClick={() => navigate('/projects')}
                            className="btn-sm"
                            aria-label="View all projects"
                        >
                            View All <FaArrowRight className="ms-2" />
                        </button>
                    </div>

                    <Row className="g-4">
                        {featuredProjects.map((project) => (
                            <Col key={project.id} md={6} lg={4}>
                                <Card
                                    className="project-preview-card h-100"
                                    onClick={() => navigate('/projects')}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            navigate('/projects');
                                        }
                                    }}
                                >
                                    <div className="project-preview-header">
                                        <FaCode size={40} className="project-preview-icon" />
                                        <span className={`project-status-badge ${project.isFinished ? 'completed' : 'wip'}`}>
                                            {project.isFinished ? 'Completed' : 'In Progress'}
                                        </span>
                                    </div>
                                    <Card.Body>
                                        <h3 className="project-preview-title">{project.title}</h3>
                                        <p className="project-preview-category">{project.category}</p>
                                        <p className="project-preview-description">{project.description}</p>
                                        <div className="project-preview-tech">
                                            {project.technologies.slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="tech-tag">{tech}</span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="tech-tag-more">+{project.technologies.length - 3}</span>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Journey Preview */}
            <section className="home-section home-section-alt">
                <Container>
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">
                                <FaGraduationCap className="section-icon" />
                                My Journey
                            </h2>
                            <p className="section-subtitle">Education and growth</p>
                        </div>
                        <button
                            onClick={() => navigate('/journey')}
                            className="btn-sm"
                            aria-label="View full journey"
                        >
                            View Timeline <FaArrowRight className="ms-2" />
                        </button>
                    </div>

                    <Row className="g-4">
                        {/* Current Education Highlight */}
                        <Col lg={6}>
                            <Card className="journey-preview-card current-education">
                                <Card.Body className="p-4">
                                    <div className="journey-preview-header">
                                        <div className="journey-icon">
                                            <MdSchool size={24} />
                                        </div>
                                        <span className="journey-badge current">Current</span>
                                    </div>
                                    <h3 className="journey-preview-title">{latestJourney.title}</h3>
                                    <h4 className="journey-preview-subtitle">{latestJourney.subtitle}</h4>
                                    <p className="journey-preview-description">{latestJourney.description}</p>
                                    {latestJourney.skills && (
                                        <div className="journey-skills">
                                            {latestJourney.skills.map((skill, idx) => (
                                                <span key={idx} className="skill-tag-mini">{skill}</span>
                                            ))}
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Certifications Preview */}
                        <Col lg={6}>
                            <div className="certifications-preview">
                                <h3 className="certifications-header">
                                    <FiAward size={20} className="me-2" />
                                    Recent Certifications
                                </h3>
                                {certifications.map((cert, index) => (
                                    <div key={cert.id} className="certification-item">
                                        <div className="certification-content">
                                            <div className="certification-title">{cert.title}</div>
                                            <div className="certification-date">{cert.date}</div>
                                        </div>
                                        {cert.certificate && (
                                            <a
                                                href={cert.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="certification-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FiExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact Preview */}
            <section className="home-section home-contact-section">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title">
                            <FaEnvelope className="section-icon" />
                            Let's Connect
                        </h2>
                        <p className="section-subtitle">
                            I'm always open to new opportunities and collaborations
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center mb-5">
                        <Col sm={6} md={4}>
                            <a
                                href="mailto:dani.nedqlkow@gmail.com"
                                className="contact-preview-card"
                            >
                                <MdEmail size={32} className="contact-icon" />
                                <div className="contact-label">Email</div>
                                <div className="contact-value">dani.nedqlkow@gmail.com</div>
                            </a>
                        </Col>
                        <Col sm={6} md={4}>
                            <a
                                href="https://github.com/DanielNed11"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-preview-card"
                            >
                                <FaGithub size={32} className="contact-icon" />
                                <div className="contact-label">GitHub</div>
                                <div className="contact-value">DanielNed11</div>
                            </a>
                        </Col>
                        <Col sm={6} md={4}>
                            <a
                                href="https://www.linkedin.com/in/daniel-nedyalkov17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-preview-card"
                            >
                                <FaLinkedin size={32} className="contact-icon" />
                                <div className="contact-label">LinkedIn</div>
                                <div className="contact-value">Daniel Nedyalkov</div>
                            </a>
                        </Col>
                    </Row>

                    <div className="text-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="btn-lg"
                            aria-label="Go to contact page"
                        >
                            Get In Touch <FaArrowRight className="ms-2" />
                        </button>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Home;
