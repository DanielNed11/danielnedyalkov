import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { blogPosts } from "../data/blogPosts";

function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [PostContent, setPostContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const postMetadata = blogPosts.find(post => post.slug === slug);

    useEffect(() => {
        const loadPost = async () => {
            try {
                setLoading(true);
                const module = await import(`../content/blog/${slug}.mdx`);
                setPostContent(() => module.default);
                setError(null);
            } catch (err) {
                console.error("Error loading blog post:", err);
                setError("Blog post not found");
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    if (loading) {
        return (
            <section className="py-5 min-vh-100 d-flex align-items-center justify-content-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3 text-muted">Loading blog post...</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

    if (error || !postMetadata) {
        return (
            <section className="py-5 min-vh-100 d-flex align-items-center justify-content-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <h1 className="display-4 mb-3">Post Not Found</h1>
                            <p className="text-muted mb-4">
                                The blog post you're looking for doesn't exist.
                            </p>
                            <button
                                onClick={() => navigate('/blog')}
                                className="btn-sm px-4"
                            >
                                Back to Blog
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

    return (
        <article className="py-5 min-vh-100">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <button
                            onClick={() => navigate('/blog')}
                            className="btn btn-link px-0 mb-4"
                            style={{ textDecoration: 'none' }}
                        >
                            ← Back to Blog
                        </button>

                        <header className="mb-5">
                            <h1 className="display-5 fw-bold mb-3">{postMetadata.title}</h1>
                            <div className="d-flex align-items-center text-muted mb-3">
                                <span>{postMetadata.date}</span>
                                <span className="mx-2">•</span>
                                <span>{postMetadata.readTime}</span>
                            </div>
                            <div>
                                {postMetadata.tags.map((tag) => (
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
                        </header>

                        <div className="blog-post-content">
                            {PostContent && <PostContent />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
    );
}

export default BlogPost;
