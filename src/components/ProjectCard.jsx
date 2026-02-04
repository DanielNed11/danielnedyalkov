import React, { useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { FaGithub, FaClock } from "react-icons/fa";
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
                         category
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

    const getStatusText = () => {
        if (isFinished) return "Completed";
        if (status === "development") return "In Progress";
        if (status === "planning") return "Planning";
        return "In Development";
    };

    return (
        <div className="project-card-wrapper">
            <Card className="project-card h-100 border-0">
                {/* Image Container with Overlay */}
                <div className="project-image-container position-relative overflow-hidden">
                    <img
                        src={image}
                        alt={`${title} project preview`}
                        className="project-image"
                        onError={handleImageError}
                        loading="lazy"
                    />
                    <div className="project-overlay" />

                    <Badge
                        bg={getStatusVariant(status)}
                        className="position-absolute top-0 end-0 m-3 px-3 py-2"
                        style={{ zIndex: 2 }}
                        aria-label={`Project status: ${getStatusText()}`}
                    >
                        {getStatusText()}
                    </Badge>
                </div>

                <Card.Body className="d-flex flex-column p-4">
                    <Card.Title className="h4 fw-bold mb-3 text-center">
                        {title}
                    </Card.Title>

                    {category && (
                        <div className="text-center mb-3">
                            <span className="category-badge">
                                {category}
                            </span>
                        </div>
                    )}

                    <Card.Text className="text-muted mb-3 text-center">
                        {isExpanded && longDescription ? longDescription : description}
                    </Card.Text>

                    {longDescription && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn btn-link btn-sm p-0 mb-3 text-decoration-none"
                            style={{ alignSelf: 'center' }}
                            aria-label={isExpanded ? `Collapse description for ${title}` : `Expand description for ${title}`}
                            aria-expanded={isExpanded}
                        >
                            {isExpanded ? '← Show Less' : 'Read More →'}
                        </button>
                    )}

                    <div className="mb-4">
                        <div
                            className="d-flex flex-wrap gap-2 justify-content-center"
                            role="list"
                            aria-label="Technologies used"
                        >
                            {technologies.map((tech, idx) => (
                                <Badge
                                    key={idx}
                                    bg="primary"
                                    className="tech-badge px-3 py-2"
                                    role="listitem"
                                    title={tech}
                                >
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
                                className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                                aria-label={`View ${title} source code on GitHub (opens in new tab)`}
                            >
                                <FaGithub size={18} />
                                View on GitHub
                            </a>
                        ) : (
                            <button
                                disabled
                                className="btn w-100 btn-disabled d-flex align-items-center justify-content-center gap-2"
                                aria-label={`${title} source code is not yet available`}
                                title="This project's source code will be available soon"
                            >
                                <FaClock size={16} />
                                Coming Soon
                            </button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;
