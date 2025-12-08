import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import SectionObserver from "./components/SectionObserver"; // Import SectionObserver
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/main.css";

function App() {
    const [activeSection, setActiveSection] = useState("home");

    const handleSectionChange = useCallback((sectionId) => {
        setActiveSection(sectionId);
    }, []);

    return (
            <>
                <NavigationBar activeSection={activeSection} />
                <main className="flex-grow-1">
                    <SectionObserver id="home" onSectionChange={handleSectionChange}>
                        <Home />
                    </SectionObserver>

                    <SectionObserver id="about" onSectionChange={handleSectionChange}>
                        <About />
                    </SectionObserver>

                    <SectionObserver id="projects" onSectionChange={handleSectionChange}>
                        <Projects />
                    </SectionObserver>

                    <SectionObserver id="contact" onSectionChange={handleSectionChange}>
                        <Contact />
                    </SectionObserver>
                </main>

                <footer className="py-4">
                    <Container>
                        <p className="text-center mb-0">
                            Daniel Nedyalkov
                        </p>
                    </Container>
                </footer>
            </>
    );
}

export default App;
