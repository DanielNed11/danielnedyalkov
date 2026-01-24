import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

function NotFound() {
    const handleGoHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh', paddingTop: '80px' }}
        >
            <Container className="text-center">
                <h1 className="display-1 fw-bold" style={{ fontSize: '8rem' }}>404</h1>
                <h2 className="mb-4">Page Not Found</h2>
                <p className="lead mb-4">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={handleGoHome}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <FaHome /> Go to Home
                </button>
            </Container>
        </section>
    );
}

export default NotFound;
