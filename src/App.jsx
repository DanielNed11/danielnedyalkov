import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Main from "./pages/Main";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

function App() {
    const [activeSection, setActiveSection] = useState("home");

    const handleSectionChange = useCallback((sectionId) => {
        setActiveSection(sectionId);
    }, []);

    return (
        <Router basename={import.meta.env.BASE_URL}>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <NavigationBar activeSection={activeSection} />
                <main id="main-content" style={{ flex: 1, transition: 'background-color 0.4s ease, color 0.4s ease' }}>
                    <Routes>
                        <Route path="/" element={<Main onSectionChange={handleSectionChange} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <footer className="py-4" style={{ transition: 'background-color 0.4s ease, color 0.4s ease' }}>
                    <Container>
                        <p className="text-center mb-0">
                            Daniel Nedyalkov
                        </p>
                    </Container>
                </footer>
                <BackToTop />
            </div>
        </Router>
    );
}

export default App;
