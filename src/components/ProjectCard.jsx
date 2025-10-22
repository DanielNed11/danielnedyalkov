import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import placeholder from "../assets/placeholder.png";

function ProjectCard({
    title,
    description,
    technologies,
    image,
    isFinished,
    github,
    status = "development"
}) {
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
        <Card className="h-100 shadow-sm">
            <div className="position-relative">
                <Card.Img
                    variant="top"
                    src={image}
                    alt={title}
                    style={{ height: '200px', objectFit: 'contain', userSelect: "none", pointerEvents: 'none' }}
                    onError={handleImageError}
                />
                <Badge
                    bg={getStatusVariant(status)}
                    className="position-absolute top-0 end-0 m-2"
                >
                    {isFinished ? "Completed" : status === "development" ? "In Development" : "Planning"}
                </Badge>
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="h5">{title}</Card.Title>
                <Card.Text className="flex-grow-1">{description}</Card.Text>

                <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge key={index} bg="primary" className="px-2 py-1 mb-1">
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
                            className="w-100 btn"
                        >
                            View on GitHub
                        </a>
                    ) : (
                        <a
                            disabled
                            className="w-100 btn disabled"
                        >
                            Coming Soon
                        </a>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
