import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { journey } from "../data";
import { FiExternalLink, FiAward, FiBook } from "react-icons/fi";
import { MdSchool } from "react-icons/md";
import "../styles/components/journey.css";

const TimelineItem = React.memo(({ item, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const isEven = index % 2 === 0;

    // Icon based on type
    const getIcon = (type) => {
        switch(type) {
            case 'education':
                return <MdSchool size={20} />;
            case 'certification':
                return <FiAward size={20} />;
            default:
                return <FiBook size={20} />;
        }
    };

    return (
        <div
            ref={ref}
            className={`timeline-item ${isEven ? "left" : "right"} ${
                inView ? "visible" : ""
            }`}
            style={{
                transitionDelay: `${index * 0.1}s`
            }}
        >
            <div className="timeline-content">
                <div className="timeline-header">
                    <div className="timeline-icon-badge">
                        {getIcon(item.type)}
                    </div>
                    <div className="timeline-date">{item.date}</div>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-desc">{item.description}</p>

                {item.skills && (
                    <div className="timeline-skills">
                        <div className="skills-label">Skills:</div>
                        <div className="skills-tags">
                            {item.skills.map((skill, idx) => (
                                <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                )}

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
    const { ref: titleRef, inView: titleInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section className="journey-section">
            <Container>
                <div
                    ref={titleRef}
                    className={`text-center mb-5 journey-header ${titleInView ? 'visible' : ''}`}
                >
                    <h2 className="display-4 fw-bold mb-3">My Journey</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                        A timeline of my education, certifications, and professional growth
                    </p>

                </div>

                <div className="timeline-container">
                    <div className="timeline-progress-bar" />
                    {journey.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Journey;