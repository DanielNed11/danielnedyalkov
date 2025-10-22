import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/main.css";

function App() {
    return (
        <Router>
            <motion.div
                className="d-flex flex-column min-vh-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <NavigationBar />

                <main className="flex-grow-1">
                    <section id="home">
                        <Home />
                    </section>

                    <section id="about">
                        <About />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>
                </main>

                <footer className="py-4">
                    <Container>
                        <p className="text-center mb-0">
                            © {new Date().getFullYear()} Daniel Nedyalkov. Built with React & modern web technologies.
                        </p>
                    </Container>
                </footer>
            </motion.div>
        </Router>
    );
}

export default App;
