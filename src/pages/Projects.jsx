import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaFilter, FaCheckCircle, FaClock, FaLightbulb } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import Stats from "../components/Stats";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const statsData = useMemo(() => [
        {
            icon: <FaCode />,
            value: projects.length,
            label: "Total Projects"
        },
        {
            icon: <FaCheckCircle />,
            value: projects.filter(p => p.isFinished).length,
            label: "Completed",
            variant: "success"
        },
        {
            icon: <FaClock />,
            value: projects.filter(p => !p.isFinished && p.status === "development").length,
            label: "In Progress",
            variant: "warning"
        },
        {
            icon: <FaLightbulb />,
            value: projects.filter(p => p.status === "planning").length,
            label: "Planning",
            variant: "info"
        }
    ], []);

    const categories = useMemo(() => {
        const cats = ["All", ...new Set(projects.map(p => p.category))];
        return cats;
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") return projects;
        return projects.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    // const featuredProjects = useMemo(() =>
    //     projects.filter(p => p.featured && p.isFinished),
    // []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleKeyDown = (e, category) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedCategory(category);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaCode className="hero-icon" />
                                My Projects
                            </h1>
                            <p className="hero-subtitle">
                                A showcase of my technical work spanning <strong>full-stack development</strong>,
                                <strong> IoT systems</strong>, and <strong>desktop applications</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} className="projects-stats-section" />

            {/*/!* Featured Projects Section *!/*/}
            {/*{featuredProjects.length > 0 && (*/}
            {/*    <section className="projects-section projects-featured-section">*/}
            {/*        <Container>*/}
            {/*            <div className="text-center mb-5">*/}
            {/*                <h2 className="section-title">*/}
            {/*                    <FaCheckCircle className="section-icon" />*/}
            {/*                    Featured Projects*/}
            {/*                </h2>*/}
            {/*                <p className="section-subtitle">*/}
            {/*                    Highlighted work that showcases my technical capabilities*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <Row className="g-4 justify-content-center">*/}
            {/*                {featuredProjects.map((project) => (*/}
            {/*                    <Col key={project.id} xs={12} md={6} lg={4}>*/}
            {/*                        <ProjectCard {...project} />*/}
            {/*                    </Col>*/}
            {/*                ))}*/}
            {/*            </Row>*/}
            {/*        </Container>*/}
            {/*    </section>*/}
            {/*)}*/}

            {/* Category Filter Section */}
            <section className="projects-section projects-filter-section">
                <Container>
                    <div className="text-center mb-4">
                        <h2 className="section-title">
                            <FaFilter className="section-icon" />
                            Browse by Category
                        </h2>
                        <p className="section-subtitle">
                            Filter projects by type to explore specific areas of expertise
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="category-filter-container">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-filter-pill ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                                onKeyDown={(e) => handleKeyDown(e, category)}
                                aria-pressed={selectedCategory === category}
                                aria-label={`Filter projects by ${category}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <Row className="g-4 mt-4">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <Col key={project.id} xs={12} md={6} lg={4}>
                                    <ProjectCard {...project} />
                                </Col>
                            ))
                        ) : (
                            <Col xs={12}>
                                <Card className="projects-empty-state">
                                    <Card.Body className="text-center py-5">
                                        <FaCode size={48} className="text-muted mb-3" />
                                        <h3>No projects found</h3>
                                        <p className="text-muted">
                                            Try selecting a different category
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Projects;