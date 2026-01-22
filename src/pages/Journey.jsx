import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { journey } from "../data";
import { FiExternalLink } from "react-icons/fi";
import "../styles/components/journey.css";

const TimelineItem = React.memo(({ item, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true, // Animation runs once
    });

    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`timeline-item ${isEven ? "left" : "right"} ${
                inView ? "visible" : ""
            }`}
        >
            <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-desc">{item.description}</p>

                {item.certificate && (
                    <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-certificate"
                    >
                        <FiExternalLink size={16} />
                        View Certificate
                    </a>
                )}
            </div>
        </div>
    );
});

TimelineItem.displayName = 'TimelineItem';

function Journey() {
    return (
        <section className="journey-section">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">My Journey</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        A timeline of my education, professional milestones, and certifications.
                    </p>
                </div>

                <div className="timeline-container">
                    {journey.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Journey;
