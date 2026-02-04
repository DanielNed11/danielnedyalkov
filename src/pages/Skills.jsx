import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaPython, FaJsSquare, FaReact, FaGitAlt, FaCode, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiPostgresql, SiSpring, SiBootstrap, SiArduino } from "react-icons/si";
import Stats from "../components/Stats";

function Skills() {
    const [flippedCards, setFlippedCards] = useState(new Set());
    const [githubStatsError, setGithubStatsError] = useState(false);

    // Initialize theme based on system preference or data-theme attribute
    const getInitialTheme = () => {
        const dataTheme = document.documentElement.getAttribute('data-theme');
        if (dataTheme) return dataTheme;

        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [currentTheme, setCurrentTheme] = useState(getInitialTheme());

    // Listen for theme changes
    useEffect(() => {
        // Update theme immediately on mount in case it changed
        const theme = document.documentElement.getAttribute('data-theme') || getInitialTheme();
        setCurrentTheme(theme);

        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
            setCurrentTheme(newTheme);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    const toggleFlip = useCallback((id) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    }, []);

    const skills = useMemo(() => ({
        languages: [
            { id: 'java', name: 'Java', icon: <FaJava />, description: 'Robust OOP knowledge applied across academic and production-style projects', projects: 'F1 Management System, Blockade Game, Clean Tank' },
            { id: 'python', name: 'Python', icon: <FaPython />, description: 'Backend scripting, IoT data pipelines, automation tasks and API integration', projects: 'Clean Tank' },
            { id: 'javascript', name: 'JavaScript', icon: <FaJsSquare />, description: 'Core language of the web, powering interactive UIs and application logic', projects: 'This Portfolio, Clean Tank' },
            { id: 'cpp', name: 'C/C++', icon: <SiCplusplus />, description: 'Performance-focused systems programming and embedded hardware integration', projects: 'Clean Tank, Embedded Systems, Chess engine' },
            { id: 'sql', name: 'SQL', icon: <SiPostgresql />, description: 'Database querying, schema design, normalization and data analytics', projects: 'Blockade Game, Clean Tank, Bricks' },
        ],
        frameworks: [
            { id: 'spring', name: 'Spring Boot', icon: <SiSpring />, description: 'Enterprise REST APIs, layered architecture, dependency injection and services', projects: 'F1 Management System, Clean Tank' },
            { id: 'react', name: 'React', icon: <FaReact />, description: 'Dynamic UI composition using components, hooks, routing and state patterns', projects: 'Portfolio' },
            { id: 'javafx', name: 'JavaFX', icon: <FaJava />, description: 'Interactive desktop UIs, event-driven game logic and custom rendering', projects: 'Blockade 3D Game' },
            { id: 'bootstrap', name: 'Bootstrap', icon: <SiBootstrap />, description: 'Responsive UI layout, utility classes and theme-oriented styling', projects: 'Portfolio, F1 Management System, Clean Tank' },
        ],
        tools: [
            { id: 'git', name: 'Git', icon: <FaGitAlt />, description: 'Version control, branching workflows, collaboration and CI-friendly processes', projects: 'All Projects' },
            { id: 'postgresql', name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Relational DB management, query optimization and performance-driven analytics', projects: 'Blockade Game, Clean Tank, Bricks, F1 Management System' },
            { id: 'arduino', name: 'Arduino', icon: <SiArduino />, description: 'Sensor integration, microcontroller I/O, calibration logic and serial communication', projects: 'Clean Tank, Treasure Hunt' },
        ],
    }), []);

    const statsData = useMemo(() => [
        {
            icon: <FaCode />,
            value: skills.languages.length + skills.frameworks.length + skills.tools.length,
            label: "Technologies"
        },
        {
            icon: <FaJava />,
            value: skills.languages.length,
            label: "Languages",
            variant: "success"
        },
        {
            icon: <FaReact />,
            value: skills.frameworks.length,
            label: "Frameworks",
            variant: "warning"
        },
        {
            icon: <FaGitAlt />,
            value: skills.tools.length,
            label: "Tools",
            variant: "info"
        }
    ], [skills]);

    const SkillCard = React.memo(
        ({ skill, category, isFlipped, onToggle }) => {
            return (
                <div
                    className={`skill-flip-card ${isFlipped ? 'flipped' : ''}`}
                    onClick={onToggle}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onToggle();
                        }
                    }}
                    aria-label={`${skill.name} skill card. ${isFlipped ? 'Showing details' : 'Click to see details'}`}
                >
                    <div className="skill-flip-inner">
                        <div className={`skill-flip-front skill-${category}`}>
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-hint">Click to flip</div>
                        </div>
                        <div className={`skill-flip-back skill-${category}`}>
                            <div className="skill-back-title">{skill.name}</div>
                            <div className="skill-back-description d-none d-sm-block">{skill.description}</div>
                            <div className="skill-back-projects">Used in: {skill.projects}</div>
                        </div>
                    </div>
                </div>
            );
        },
        (prev, next) => prev.isFlipped === next.isFlipped
    );

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaCode className="hero-icon" />
                                My Tech Stack
                            </h1>
                            <p className="hero-subtitle">
                                Languages, frameworks, and tools I use to build <strong>robust</strong> and <strong>scalable</strong> applications
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} className="skills-stats-section" />

            {/* Skills & Expertise Section */}
            <section className="py-5 skills-expertise-section">
                <Container>
                    <Row className="justify-content-center mb-5 text-center">
                        <Col lg={10}>
                            <h2 className="display-4 fw-bold mb-3">My Skills & Expertise</h2>
                            <p className="lead text-muted">Click any skill to see where I've used it</p>
                        </Col>
                    </Row>

                    {/* Programming Languages */}
                    <div className="skill-section mb-5">
                        <div className="skill-section-header">
                            <span className="skill-section-icon">💻</span>
                            <h4 className="skill-section-title">Programming Languages</h4>
                            <div className="skill-section-line"></div>
                        </div>
                        <Row className="g-3 justify-content-center mb-5">
                            {skills.languages.map(skill => (
                                <Col xs={6} sm={6} md={4} lg={3} key={skill.id} className="d-flex">
                                    <SkillCard
                                        skill={skill}
                                        category="language"
                                        isFlipped={flippedCards.has(skill.id)}
                                        onToggle={() => toggleFlip(skill.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Frameworks */}
                    <div className="skill-section mb-5">
                        <div className="skill-section-header">
                            <span className="skill-section-icon">⚛️</span>
                            <h4 className="skill-section-title">Frameworks & Libraries</h4>
                            <div className="skill-section-line"></div>
                        </div>
                        <Row className="g-3 justify-content-center mb-5">
                            {skills.frameworks.map(skill => (
                                <Col xs={6} sm={6} md={4} lg={3} key={skill.id} className="d-flex ">
                                    <SkillCard
                                        skill={skill}
                                        category="framework"
                                        isFlipped={flippedCards.has(skill.id)}
                                        onToggle={() => toggleFlip(skill.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="skill-section">
                        <div className="skill-section-header">
                            <span className="skill-section-icon">🛠️</span>
                            <h4 className="skill-section-title">Tools & Technologies</h4>
                            <div className="skill-section-line"></div>
                        </div>
                        <Row className="g-3 justify-content-center mb-5">
                            {skills.tools.map(skill => (
                                <Col xs={6} sm={6} md={4} lg={3} key={skill.id} className="d-flex">
                                    <SkillCard
                                        skill={skill}
                                        category="tool"
                                        isFlipped={flippedCards.has(skill.id)}
                                        onToggle={() => toggleFlip(skill.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>

                    {/* Currently Learning Section */}
                    <Row className="justify-content-center mb-5 mt-5">
                        <Col lg={10}>
                            <div className="text-center mb-4">
                                <h3 className="display-6 fw-bold mb-3">Currently Learning</h3>
                                <p className="text-muted">Technologies and concepts I'm actively exploring</p>
                            </div>
                            <Row className="g-4">
                                <Col md={6}>
                                    <div className="learning-card p-4 h-100 border rounded shadow-sm">
                                        <h4 className="fw-bold mb-3">Backend Architecture (Spring Boot)</h4>
                                        <p className="text-muted">
                                            Layered design, DTOs, testing, and Agile Development
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="learning-card p-4 h-100 border rounded shadow-sm">
                                        <h4 className="fw-bold mb-3">Modern React</h4>
                                        <p className="text-muted">
                                            State patterns, performance tuning, and reusable UI systems.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="learning-card p-4 h-100 border rounded shadow-sm">
                                        <h4 className="fw-bold mb-3">Databases & Performance (PostgreSQL)</h4>
                                        <p className="text-muted">
                                            Indexing, query optimization, and data modeling.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="learning-card p-4 h-100 border rounded shadow-sm">
                                        <h4 className="fw-bold mb-3">Data Science (Python)</h4>
                                        <p className="text-muted">
                                            Exploring Pandas, NumPy, data visualization, and ML fundamentals for real-world datasets
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* GitHub Stats Section */}
                    <Row className="justify-content-center mt-5 mb-5">
                        <Col lg={10}>
                            <div className="text-center mb-4">
                                <h3 className="display-6 fw-bold mb-3">
                                    <FaGithub className="me-3" style={{ color: 'var(--accent)' }} />
                                    GitHub Stats
                                </h3>
                                <p className="text-muted">My coding activity and contribution overview</p>
                            </div>
                            {githubStatsError ? (
                                <div className="text-center p-5 border rounded" style={{ background: 'var(--card-bg)' }}>
                                    <FaGithub size={48} className="mb-3" style={{ color: 'var(--text-muted)' }} />
                                    <h4>GitHub Stats Unavailable</h4>
                                    <p className="text-muted mb-3">
                                        The GitHub stats API is temporarily unavailable or blocked in development mode.
                                    </p>
                                    <p className="text-muted">
                                        Visit my{' '}
                                        <a
                                            href="https://github.com/DanielNed11"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                                        >
                                            GitHub profile
                                        </a>
                                        {' '}to see my contributions and projects.
                                    </p>
                                </div>
                            ) : (
                                <Row className="g-4 justify-content-center">
                                    <Col md={6} className="text-center">
                                        <img
                                            src={
                                                currentTheme === 'dark'
                                                    ? "https://github-readme-stats.vercel.app/api?username=DanielNed11&show_icons=true&theme=react&hide_border=true&bg_color=1a171e&title_color=9378bc&icon_color=9378bc&text_color=e8e8e8"
                                                    : "https://github-readme-stats.vercel.app/api?username=DanielNed11&show_icons=true&theme=default&hide_border=true&bg_color=fdfffd&title_color=4a9d7a&icon_color=4a9d7a&text_color=2a2a2a"
                                            }
                                            alt="GitHub Stats"
                                            className="img-fluid rounded shadow-sm"
                                            loading="eager"
                                            onError={() => setGithubStatsError(true)}
                                            key={currentTheme}
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </Col>
                                    <Col md={6} className="text-center">
                                        <img
                                            src={
                                                currentTheme === 'dark'
                                                    ? "https://github-readme-stats.vercel.app/api/top-langs/?username=DanielNed11&layout=compact&theme=react&hide_border=true&bg_color=1a171e&title_color=9378bc&text_color=e8e8e8"
                                                    : "https://github-readme-stats.vercel.app/api/top-langs/?username=DanielNed11&layout=compact&theme=default&hide_border=true&bg_color=fdfffd&title_color=4a9d7a&text_color=2a2a2a"
                                            }
                                            alt="Top Languages"
                                            className="img-fluid rounded shadow-sm"
                                            loading="eager"
                                            onError={() => setGithubStatsError(true)}
                                            key={`${currentTheme}-langs`}
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </Col>
                                </Row>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Skills;
