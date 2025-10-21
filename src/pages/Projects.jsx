import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

function Projects() {
    return (
        <Container className="container-fluid">
            <h1 className="text-center mb-5">Projects</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {projects.map((proj) => (
                    <Col key={proj.id}>
                        <ProjectCard {...proj} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
