import React from 'react';
import { Container } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container className="text-center" style={{ paddingTop: '100px' }}>
                    <h1>Oops! Something went wrong</h1>
                    <p className="mt-3">
                        We're sorry for the inconvenience. Please try refreshing the page.
                    </p>
                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => window.location.reload()}
                    >
                        Refresh Page
                    </button>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
