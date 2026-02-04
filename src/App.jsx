import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <NavigationBar />
                <main id="main-content" style={{ flex: 1, transition: 'background-color 0.4s ease, color 0.4s ease' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/journey" element={<Journey />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
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