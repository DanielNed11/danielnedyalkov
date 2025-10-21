import { Card, Button, Badge } from "react-bootstrap";

function ProjectCard({ title, description, technologies, image, isFinished,github }) {
    return (
        <Card >
            <Card.Img variant="top"
                      src={image || "/assets/placeholder.png"}
                      alt={title}
                      className="card-img-top"
                      onError={(e) =>
                          (e.target.src = "/assets/placeholder.png")} />

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="mb-3">
                    {technologies.map((tech, idx) => (
                        <Badge key={idx} className="me-2 mb-2 bg-success">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <Button
                    className="btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={github}
                >
                    {isFinished ? "View on GitHub" : "Coming soon"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
