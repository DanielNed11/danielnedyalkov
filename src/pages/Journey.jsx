import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { journey } from "../data";
import {
    FiExternalLink,
    FiAward,
    FiBook,
    FiDownload,
    FiCalendar,
    FiTrendingUp
} from "react-icons/fi";
import { MdSchool } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import Stats from "../components/Stats";
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
            <div
                className="timeline-content"
                role="article"
                aria-label={`${item.title} - ${item.date}`}
            >
                <div className="timeline-header">
                    <div
                        className="timeline-icon-badge"
                        aria-hidden="true"
                    >
                        {getIcon(item.type)}
                    </div>
                    <div className="timeline-date" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <FiCalendar size={14} aria-hidden="true" />
                        {item.date}
                    </div>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-desc">{item.description}</p>

                {item.skills && (
                    <div className="timeline-skills">
                        <div className="skills-label">
                            <FiTrendingUp size={12} aria-hidden="true" />
                            Skills Gained
                        </div>
                        <div className="skills-tags" role="list">
                            {item.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="skill-tag"
                                    role="listitem"
                                >
                                    {skill}
                                </span>
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
                        aria-label={`View certificate for ${item.title}`}
                    >
                        <FiExternalLink size={16} aria-hidden="true" />
                        View Certificate
                    </a>
                )}
            </div>
        </div>
    );
});

TimelineItem.displayName = 'TimelineItem';

function Journey() {
    // Calculate journey statistics
    const statsData = useMemo(() => {
        const certifications = journey.filter(j => j.certificate).length;
        const totalMilestones = journey.length;

        // Calculate years of study (from first to latest)
        const firstYear = 2023; // Based on data starting May 2023
        const currentYear = new Date().getFullYear();
        const yearsOfStudy = currentYear - firstYear + 1;

        // Get current focus (latest journey item)
        const currentFocus = journey[journey.length - 1]?.subtitle || "N/A";

        return [
            {
                icon: <FiBook />,
                value: totalMilestones,
                label: "Total Milestones"
            },
            {
                icon: <FiAward />,
                value: certifications,
                label: "Certificates",
                variant: "success"
            },
            {
                icon: <FiCalendar />,
                value: `${yearsOfStudy}+`,
                label: "Years of Study",
                variant: "info"
            },
            {
                icon: <MdSchool />,
                value: currentFocus,
                label: "Current Focus",
                variant: "primary"
            }
        ];
    }, []);

    // Get all certificates for download
    const certificates = useMemo(() =>
        journey.filter(j => j.certificate).map(j => ({
            title: j.title,
            url: j.certificate
        })),
    []);

    const handleDownloadAll = () => {
        certificates.forEach((cert, index) => {
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = cert.url;
                link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, index * 500); // Stagger downloads to avoid browser blocking
        });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10} xl={8}>
                            <h1 className="hero-title">
                                <FaGraduationCap className="hero-icon" />
                                My Learning Journey
                            </h1>
                            <p className="hero-subtitle">
                                From foundational programming to advanced computer science—tracking my
                                <strong> education</strong>, <strong>certifications</strong>,
                                and <strong>continuous growth</strong> as a developer
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <Stats stats={statsData} />

            {/* Timeline Section */}
            <section className="journey-timeline-section">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title">
                            <FiTrendingUp className="section-icon" aria-hidden="true" />
                            Educational Timeline
                        </h2>
                        <p className="section-subtitle">
                            A chronological view of my learning path and achievements
                        </p>
                    </div>

                    {/* Download All Certificates Button */}
                    {certificates.length > 0 && (
                        <div className="text-center mb-5">
                            <button
                                onClick={handleDownloadAll}
                                className="btn-download-all"
                                aria-label={`Download all ${certificates.length} certificates`}
                            >
                                <FiDownload size={18} aria-hidden="true" />
                                Download All Certificates ({certificates.length})
                            </button>
                        </div>
                    )}

                    <div
                        className="timeline-container"
                        role="list"
                        aria-label="Educational timeline"
                    >
                        <div
                            className="timeline-progress-bar"
                            aria-hidden="true"
                        />
                        {journey.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="journey-cta text-center mt-5">
                        <div className="journey-cta-content">
                            <FiTrendingUp size={32} className="journey-cta-icon" aria-hidden="true" />
                            <h3 className="journey-cta-title">Always Learning, Always Growing</h3>
                            <p className="journey-cta-text">
                                I believe in continuous improvement and staying current with
                                technology trends. Each milestone represents not just knowledge
                                gained, but a commitment to excellence in software development.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Journey;
