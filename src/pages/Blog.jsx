import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
    FaBook,
    FaTags,
    FaClock,
    FaCalendar,
    FaBookOpen,
    FaArrowRight,
    FaFilter,
    FaStar
} from "react-icons/fa";
import { blogPosts } from "../data/blogPosts";
import Stats from "../components/Stats";

function Blog() {
    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState("All");

    // Calculate stats from blog data
    const statsData = useMemo(() => {
        const totalPosts = blogPosts.length;
        const uniqueTags = [...new Set(blogPosts.flatMap(post => post.tags))];
        const totalReadTime = blogPosts.reduce((sum, post) => {
            const minutes = parseInt(post.readTime.match(/\d+/)?.[0] || 0);
            return sum + minutes;
        }, 0);
        const latestPostDate = blogPosts.length > 0
            ? new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            : 'N/A';

        return [
            {
                icon: <FaBook />,
                value: totalPosts,
                label: "Total Posts"
            },
            {
                icon: <FaTags />,
                value: uniqueTags.length,
                label: "Topics",
                variant: "info"
            },
            {
                icon: <FaClock />,
                value: `${totalReadTime} min`,
                label: "Total Read Time",
                variant: "warning"
            },
            {
                icon: <FaCalendar />,
                value: latestPostDate,
                label: "Latest Post",
                variant: "success"
            }
        ];
    }, []);

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = ["All", ...new Set(blogPosts.flatMap(post => post.tags))];
        return tags;
    }, []);

    // Filter posts by selected tag
    const filteredPosts = useMemo(() => {
        if (selectedTag === "All") return blogPosts;
        return blogPosts.filter(post => post.tags.includes(selectedTag));
    }, [selectedTag]);

    // Get featured posts (if any have featured property)
    const featuredPosts = useMemo(() =>
        blogPosts.filter(post => post.featured),
    []);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    const handleKeyDown = (e, tag) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedTag(tag);
        }
    };

    const handleCardClick = (slug) => {
        navigate(`/blog/${slug}`);
    };

    const handleCardKeyDown = (e, slug) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate(`/blog/${slug}`);
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
                                <FaBook className="hero-icon" />
                                My Blog
                            </h1>
                            <p className="hero-subtitle">
                                Sharing insights, tutorials, and lessons learned from building
                                <strong> full-stack applications</strong>, <strong>IoT systems</strong>,
                                and exploring new technologies
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} className="blog-stats-section" />

            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="blog-section blog-featured-section">
                    <Container>
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                <FaStar className="section-icon" />
                                Featured Posts
                            </h2>
                            <p className="section-subtitle">
                                Highlighted articles showcasing key projects and learnings
                            </p>
                        </div>
                        <Row className="g-4 justify-content-center">
                            {featuredPosts.map((post) => (
                                <Col key={post.slug} xs={12} md={6} lg={4}>
                                    <Card
                                        className="blog-card blog-card-featured h-100"
                                        onClick={() => handleCardClick(post.slug)}
                                        onKeyDown={(e) => handleCardKeyDown(e, post.slug)}
                                        tabIndex={0}
                                        role="article"
                                        aria-label={`Read article: ${post.title}`}
                                    >
                                        <div className="blog-card-gradient" aria-hidden="true"></div>
                                        <Card.Body className="d-flex flex-column">
                                            <div className="blog-card-header">
                                                <FaBookOpen className="blog-card-icon" aria-hidden="true" />
                                                <span className="blog-card-badge featured-badge">Featured</span>
                                            </div>

                                            <Card.Title className="blog-card-title mb-3">
                                                {post.title}
                                            </Card.Title>

                                            <Card.Text className="blog-card-excerpt flex-grow-1">
                                                {post.excerpt}
                                            </Card.Text>

                                            <div className="blog-card-meta">
                                                <span className="blog-card-date">
                                                    <FaCalendar aria-hidden="true" />
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <span className="blog-card-read-time">
                                                    <FaClock aria-hidden="true" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            <div className="blog-card-tags mt-3">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="blog-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="blog-card-footer">
                                                <span className="blog-card-read-more">
                                                    Read Article
                                                    <FaArrowRight className="read-more-arrow" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            )}

            {/* Tag Filter Section */}
            <section className="blog-section blog-filter-section">
                <Container>
                    <div className="text-center mb-4">
                        <h2 className="section-title">
                            <FaFilter className="section-icon" />
                            {featuredPosts.length > 0 ? "All Articles" : "Browse Articles"}
                        </h2>
                        <p className="section-subtitle">
                            Filter by topic to explore specific areas of interest
                        </p>
                    </div>

                    {/* Tag Filter Pills */}
                    <div className="category-filter-container">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                className={`category-filter-pill ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => handleTagClick(tag)}
                                onKeyDown={(e) => handleKeyDown(e, tag)}
                                aria-pressed={selectedTag === tag}
                                aria-label={`Filter posts by ${tag}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <Row className="g-4 mt-4">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <Col key={post.slug} xs={12} md={6} lg={4}>
                                    <Card
                                        className="blog-card h-100"
                                        onClick={() => handleCardClick(post.slug)}
                                        onKeyDown={(e) => handleCardKeyDown(e, post.slug)}
                                        tabIndex={0}
                                        role="article"
                                        aria-label={`Read article: ${post.title}`}
                                    >
                                        <div className="blog-card-gradient" aria-hidden="true"></div>
                                        <Card.Body className="d-flex flex-column">
                                            <div className="blog-card-header">
                                                <FaBookOpen className="blog-card-icon" aria-hidden="true" />
                                            </div>

                                            <Card.Title className="blog-card-title mb-3">
                                                {post.title}
                                            </Card.Title>

                                            <Card.Text className="blog-card-excerpt flex-grow-1">
                                                {post.excerpt}
                                            </Card.Text>

                                            <div className="blog-card-meta">
                                                <span className="blog-card-date">
                                                    <FaCalendar aria-hidden="true" />
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <span className="blog-card-read-time">
                                                    <FaClock aria-hidden="true" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            <div className="blog-card-tags mt-3">
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="blog-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="blog-card-footer">
                                                <span className="blog-card-read-more">
                                                    Read Article
                                                    <FaArrowRight className="read-more-arrow" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col xs={12}>
                                <Card className="blog-empty-state">
                                    <Card.Body className="text-center py-5">
                                        <FaBook size={48} className="text-muted mb-3" aria-hidden="true" />
                                        <h3>No posts found</h3>
                                        <p className="text-muted">
                                            Try selecting a different topic
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>

            {/* Empty State (when no posts exist at all) */}
            {blogPosts.length === 0 && (
                <section className="blog-section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <Card className="blog-empty-state">
                                    <Card.Body className="text-center py-5">
                                        <FaBook size={64} className="text-muted mb-4" aria-hidden="true" />
                                        <h2 className="mb-3">No blog posts yet</h2>
                                        <p className="text-muted lead">
                                            Check back soon for articles on web development, IoT projects,
                                            and technical tutorials!
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
}

export default Blog;
