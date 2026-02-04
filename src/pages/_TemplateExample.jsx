/**
 * ==========================================
 * PORTFOLIO PAGE TEMPLATE
 * ==========================================
 *
 * This template demonstrates the standardized structure
 * used across all portfolio pages. Copy this file and modify
 * according to your needs.
 *
 * Based on: Projects.jsx (Gold Standard)
 * Pattern: Hero Section (65vh) → Stats Section (35vh) → Content Sections
 *
 * @author Daniel Nedyalkov
 * @version 1.0.0
 * ==========================================
 */

import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Optional: Only if navigation needed
import {
    FaIcon,      // Replace with your main icon
    FaIcon2,     // Replace with stats icons
    FaIcon3,
    FaIcon4,
    FaArrowRight // Common for CTAs and navigation
} from "react-icons/fa";
import Stats from "../components/Stats";
import { yourData } from "../data"; // Optional: Import your data

/**
 * TemplateExample Component
 *
 * Replace "TemplateExample" with your actual page name (e.g., "Services", "Testimonials")
 * Replace "template-example" with your page slug in kebab-case
 */
function TemplateExample() {
    // ==========================================
    // STATE MANAGEMENT
    // ==========================================

    // Example: Filter state
    const [selectedFilter, setSelectedFilter] = useState("All");

    // Optional: useNavigate for navigation
    const navigate = useNavigate();

    // ==========================================
    // COMPUTED DATA WITH USEMEMO
    // ==========================================

    /**
     * Stats Data - Always use useMemo for consistency
     * REQUIRED: All pages must have exactly 4 stats
     *
     * Available variants:
     * - "success" (green) - for completed/positive metrics
     * - "warning" (yellow/orange) - for in-progress/attention items
     * - "info" (blue) - for informational metrics
     * - "primary" (default purple) - for general metrics
     */
    const statsData = useMemo(() => [
        {
            icon: <FaIcon2 />,
            value: 10, // Can be number or string
            label: "Total Items",
            // variant is optional, defaults to "primary"
        },
        {
            icon: <FaIcon3 />,
            value: 5,
            label: "Completed",
            variant: "success"
        },
        {
            icon: <FaIcon4 />,
            value: 3,
            label: "In Progress",
            variant: "warning"
        },
        {
            icon: <FaIcon />,
            value: "Active",
            label: "Status",
            variant: "info"
        }
    ], []); // Add dependencies if stats are computed from data

    /**
     * Example: Computed/filtered data
     */
    const filteredData = useMemo(() => {
        // Your filtering logic here
        return yourData; // Replace with actual logic
    }, [selectedFilter]);

    // ==========================================
    // EVENT HANDLERS
    // ==========================================

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const handleKeyDown = (e, filter) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedFilter(filter);
        }
    };

    const handleCardClick = (item) => {
        // Navigation or other logic
        navigate(`/template-example/${item.id}`);
    };

    const handleCardKeyDown = (e, item) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick(item);
        }
    };

    // ==========================================
    // RENDER
    // ==========================================

    return (
        <>
            {/* ==========================================
                HERO SECTION (65vh)
                ========================================== */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaIcon className="hero-icon" />
                                Page Title
                            </h1>
                            <p className="hero-subtitle">
                                A compelling description about this page with <strong>highlighted</strong> key terms
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ==========================================
                STATS SECTION (35vh)

                Uses unified Stats component
                className format: "{page-name}-stats-section"
                ========================================== */}
            <Stats stats={statsData} className="template-example-stats-section" />

            {/* ==========================================
                CONTENT SECTIONS
                ========================================== */}

            {/* Main Content Section */}
            <section className="template-example-section">
                <Container>
                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <h2 className="section-title">
                            <FaIcon className="section-icon" />
                            Section Title
                        </h2>
                        <p className="section-subtitle">
                            Section description or subtitle
                        </p>
                    </div>

                    {/* Example: Filter Pills (Optional) */}
                    <div className="category-filter-container">
                        {["All", "Option 1", "Option 2"].map((filter) => (
                            <button
                                key={filter}
                                className={`category-filter-pill ${selectedFilter === filter ? 'active' : ''}`}
                                onClick={() => handleFilterClick(filter)}
                                onKeyDown={(e) => handleKeyDown(e, filter)}
                                aria-pressed={selectedFilter === filter}
                                aria-label={`Filter by ${filter}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Content Grid */}
                    <Row className="g-4 mt-4">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <Col key={item.id} xs={12} md={6} lg={4}>
                                    <Card
                                        className="template-card h-100"
                                        onClick={() => handleCardClick(item)}
                                        onKeyDown={(e) => handleCardKeyDown(e, item)}
                                        role="article"
                                        tabIndex={0}
                                        aria-label={`View details about ${item.title}`}
                                    >
                                        <Card.Body>
                                            <h3 className="card-title">{item.title}</h3>
                                            <p className="card-text">{item.description}</p>

                                            {/* Example: Tags/Categories */}
                                            <div className="card-tags">
                                                {item.tags?.map((tag, idx) => (
                                                    <span key={idx} className="tag-badge">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Example: Card Footer with CTA */}
                                            <div className="card-footer">
                                                <span className="read-more">
                                                    Learn More <FaArrowRight className="ms-2" />
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            /* Empty State */
                            <Col xs={12}>
                                <Card className="empty-state-card">
                                    <Card.Body className="text-center py-5">
                                        <FaIcon size={48} className="text-muted mb-3" />
                                        <h3>No items found</h3>
                                        <p className="text-muted">
                                            Try selecting a different filter or check back later.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>

            {/* ==========================================
                ADDITIONAL SECTIONS (Optional)
                ========================================== */}

            {/* Example: Featured Section with Different Background */}
            <section className="template-example-section template-example-section-alt">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title">
                            <FaIcon2 className="section-icon" />
                            Featured Section
                        </h2>
                        <p className="section-subtitle">
                            Highlighted content with alternating background
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        {/* Your featured content here */}
                    </Row>
                </Container>
            </section>

            {/* Example: CTA Section */}
            <section className="template-example-cta-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <h2 className="cta-title">Ready to Get Started?</h2>
                            <p className="cta-subtitle mb-4">
                                Explore more or get in touch to learn how we can help
                            </p>
                            <button
                                onClick={() => navigate('/contact')}
                                className="btn-lg"
                                aria-label="Navigate to contact page"
                            >
                                Get In Touch <FaArrowRight className="ms-2" />
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default TemplateExample;


/**
 * ==========================================
 * CSS FILE TEMPLATE
 * ==========================================
 *
 * Create: /src/styles/components/template-example.css
 *
 * Structure:
 *
 * 1. Hero Section (OPTIONAL - uses unified hero.css)
 *    - Only add if you need page-specific hero modifications
 *
 * 2. Stats Section (OPTIONAL - uses unified stats.css)
 *    - Only add if you need page-specific stats modifications
 *
 * 3. Content Sections
 *    - Page-specific section styling
 *    - Card styling
 *    - Interactive elements
 *
 * 4. Responsive Design
 *    - Breakpoints: 992px, 768px, 576px
 *
 * 5. Dark Mode Support
 *    - [data-theme="dark"] variants
 *
 * 6. Accessibility
 *    - @media (prefers-reduced-motion: reduce)
 *    - @media (prefers-contrast: high)
 *    - @media (pointer: coarse)
 *
 * Example:
 *
 * .template-example-section {
 *     padding: 4rem 0;
 *     background: var(--bg);
 * }
 *
 * .template-example-section-alt {
 *     background: linear-gradient(180deg,
 *         rgba(74, 157, 122, 0.03) 0%,
 *         rgba(74, 157, 122, 0.08) 50%,
 *         rgba(74, 157, 122, 0.03) 100%);
 * }
 *
 * [data-theme="dark"] .template-example-section-alt {
 *     background: linear-gradient(180deg,
 *         rgba(147, 120, 188, 0.03) 0%,
 *         rgba(147, 120, 188, 0.08) 50%,
 *         rgba(147, 120, 188, 0.03) 100%);
 * }
 *
 * .template-card {
 *     background: var(--card-bg);
 *     border: 1px solid rgba(74, 157, 122, 0.1);
 *     border-radius: 16px;
 *     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
 *     cursor: pointer;
 * }
 *
 * .template-card:hover {
 *     transform: translateY(-8px);
 *     box-shadow: 0 12px 32px rgba(74, 157, 122, 0.2);
 * }
 *
 * @media (prefers-reduced-motion: reduce) {
 *     .template-card {
 *         transition: none;
 *     }
 *     .template-card:hover {
 *         transform: none;
 *     }
 * }
 *
 * ==========================================
 * END CSS TEMPLATE
 * ==========================================
 */
