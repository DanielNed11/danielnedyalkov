import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function Blog() {
    const navigate = useNavigate();

    return (
        <section className="py-5 min-vh-100">
            <Container>
                <Row className="justify-content-center mb-5 text-center">
                    <Col lg={10}>
                        <h1 className="display-4 fw-bold mb-3">Blog</h1>
                        <p className="lead text-muted">
                            Thoughts on development, projects, and what I'm learning
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 justify-content-center">
                    {blogPosts.map((post) => (
                        <Col key={post.slug} md={6} lg={4}>
                            <Card
                                className="h-100 blog-card shadow-sm"
                                onClick={() => navigate(`/blog/${post.slug}`)}
                                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        <small className="text-muted">{post.date}</small>
                                        <span className="mx-2">•</span>
                                        <small className="text-muted">{post.readTime}</small>
                                    </div>
                                    <Card.Title className="fw-bold mb-3">{post.title}</Card.Title>
                                    <Card.Text className="flex-grow-1">{post.excerpt}</Card.Text>
                                    <div className="mt-3">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="badge me-2 mb-2"
                                                style={{
                                                    backgroundColor: 'var(--primary-color)',
                                                    color: 'white'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {blogPosts.length === 0 && (
                    <Row className="justify-content-center mt-5">
                        <Col lg={6} className="text-center">
                            <p className="text-muted">No blog posts yet. Check back soon!</p>
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
}

export default Blog;
