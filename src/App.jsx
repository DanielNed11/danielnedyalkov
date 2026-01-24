import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import SectionObserver from "./components/SectionObserver";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/main.css";

function App() {
    const [activeSection, setActiveSection] = useState("home");

    const handleSectionChange = useCallback((sectionId) => {
        setActiveSection(sectionId);
    }, []);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <NavigationBar activeSection={activeSection} />
            <main id="main-content" style={{ flex: 1, transition: 'background-color 0.4s ease, color 0.4s ease' }}>
                <SectionObserver id="home" onSectionChange={handleSectionChange}>
                    <Home />
                </SectionObserver>

                <SectionObserver id="about" onSectionChange={handleSectionChange}>
                    <About />
                </SectionObserver>

                <SectionObserver id="journey" onSectionChange={handleSectionChange}>
                    <Journey />
                </SectionObserver>

                <SectionObserver id="projects" onSectionChange={handleSectionChange}>
                    <Projects />
                </SectionObserver>

                <SectionObserver id="contact" onSectionChange={handleSectionChange}>
                    <Contact />
                </SectionObserver>
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
    );
}

export default App;
