import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../styles/components/stats.css";

const Stats = React.memo(({ stats, className = "", variant = "gradient" }) => {
    return (
        <section
            className={`stats-section ${variant === "gradient" ? "stats-gradient" : ""} ${className}`}
            aria-label="Statistics"
        >
            <Container>
                <Row className="g-4">
                    {stats.map((stat, index) => (
                        <Col key={index} xs={6} md={3}>
                            <div
                                className="stat-card"
                                role="article"
                                aria-label={`${stat.value} ${stat.label}`}
                            >
                                {stat.icon && (
                                    <div
                                        className={`stat-icon ${stat.variant ? stat.variant : ""}`}
                                        aria-hidden="true"
                                    >
                                        {stat.icon}
                                    </div>
                                )}
                                <div className={`stat-value ${typeof stat.value === 'string' && stat.value.length > 5 ? 'small' : ''}`}>
                                    {stat.value}
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
});

Stats.displayName = 'Stats';

Stats.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
            variant: PropTypes.oneOf(['success', 'warning', 'info', 'primary'])
        })
    ).isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['gradient', 'default'])
};

export default Stats;
