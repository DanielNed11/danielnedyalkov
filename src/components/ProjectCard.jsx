import React, { useState } from "react";
import { Card, Badge } from "react-bootstrap";
import placeholder from "../assets/placeholder.png";

function ProjectCard({
                         title,
                         description,
                         technologies,
                         image,
                         isFinished,
                         github,
                         status = "development",
                         longDescription,
                     }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleImageError = (e) => {
        e.target.src = placeholder;
    };

    const getStatusVariant = (status) => {
        switch (status) {
            case "completed": return "success";
            case "development": return "warning";
            case "planning": return "info";
            default: return "warning";
        }
    };

    return (
        <div style={{ height: "100%" }}>
            <div className="project-card-wrapper" style={{ height: "100%" }}>
                <Card className="project-card h-100 border-0">
                    {/* Image Container with Overlay */}
                    <div className="project-image-container position-relative overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="project-image"
                            onError={handleImageError}
                            loading="lazy" // Added lazy loading
                        />
                        <div className="project-overlay" />

                        <Badge
                            bg={getStatusVariant(status)}
                            className="position-absolute top-0 end-0 m-3 px-3 py-2 z-1"
                        >
                            {isFinished ? "✓ Completed" : status === "development" ? "🔨 Almost Finished" : "📋 Developing"}
                        </Badge>
                    </div>

                    <Card.Body className="d-flex flex-column p-4">
                        <Card.Title className="h4 fw-bold mb-3 text-center">{title}</Card.Title>
                        <Card.Text className="text-muted mb-2 text-center">
                            {isExpanded && longDescription ? longDescription : description}
                        </Card.Text>

                        {longDescription && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="btn btn-link btn-sm p-0 mb-3 text-decoration-none"
                                style={{ alignSelf: 'center' }}
                                aria-label={isExpanded ? `Show less about ${title}` : `Read more about ${title}`}
                                aria-expanded={isExpanded}
                            >
                                {isExpanded ? '← Show Less' : 'Read More →'}
                            </button>
                        )}

                        <div className="mb-4">
                            <div className="d-flex flex-wrap gap-2 justify-content-center">
                                {technologies.map((tech, idx) => (
                                    <Badge key={idx} bg="primary" className="tech-badge px-3 py-2 align-items-center">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto">
                            {isFinished && github ? (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn w-100"
                                    aria-label={`View ${title} on GitHub`}
                                >
                                    View on GitHub
                                </a>
                            ) : (
                                <button
                                    disabled
                                    className="btn w-100 btn-disabled"
                                    aria-label={`${title} coming soon`}
                                >
                                    Coming Soon
                                </button>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ProjectCard;
