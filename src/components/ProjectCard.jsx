import React, { useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import placeholder from "../assets/placeholder.png";

function ProjectCard({
                         title,
                         description,
                         technologies,
                         image,
                         isFinished,
                         github,
                         status = "development",
                         index = 0
                     }) {
    const [isHovered, setIsHovered] = useState(false);

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

    // Staggered entrance animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateX: -15,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
                perspective: "1000px",
                height: "100%"
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="project-card-wrapper"
                animate={{
                    rotateY: isHovered ? 5 : 0,
                    rotateX: isHovered ? -5 : 0,
                    scale: isHovered ? 1.05 : 1,
                    z: isHovered ? 50 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut"
                }}
                style={{
                    transformStyle: "preserve-3d",
                    height: "100%"
                }}
            >
                <Card className="project-card h-100 border-0">
                    {/* Image Container with Overlay */}
                    <div className="project-image-container position-relative overflow-hidden">
                        <motion.img
                            src={image}
                            alt={title}
                            className="project-image"
                            onError={handleImageError}
                            animate={{
                                scale: isHovered ? 1.1 : 1
                            }}
                            transition={{ duration: 0.4 }}
                        />
                        <div className="project-overlay" />

                        {/* Status Badge */}
                        <Badge
                            bg={getStatusVariant(status)}
                            className="position-absolute top-0 end-0 m-3 px-3 py-2"
                        >
                            {isFinished ? "✓ Completed" : status === "development" ? "🔨 In Progress" : "📋 Planning"}
                        </Badge>
                    </div>

                    <Card.Body className="d-flex flex-column p-4">
                        <Card.Title className="h4 fw-bold mb-3">{title}</Card.Title>
                        <Card.Text className="flex-grow-1 text-muted mb-4">
                            {description}
                        </Card.Text>

                        {/* Tech Stack */}
                        <div className="mb-4">
                            <div className="d-flex flex-wrap gap-2">
                                {technologies.map((tech, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * idx }}
                                    >
                                        <Badge bg="primary" className="tech-badge px-3 py-2">
                                            {tech}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-auto">
                            {isFinished && github ? (
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn w-100 project-btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View on GitHub →
                                </motion.a>
                            ) : (
                                <button
                                    disabled
                                    className="btn w-100 project-btn-disabled"
                                >
                                    Coming Soon
                                </button>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>
        </motion.div>
    );
}

export default ProjectCard;