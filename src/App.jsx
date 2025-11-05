import { Container } from "react-bootstrap";
import { useEffect } from "react";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/main.css";

function App() {
    useEffect(() => {
        // Add preload class to disable transitions on initial load
        document.body.classList.add('preload');

        // Remove preload class after a short delay to enable transitions
        const timer = setTimeout(() => {
            document.body.classList.remove('preload');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
            <>
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
                            Daniel Nedyalkov
                        </p>
                    </Container>
                </footer>
            </>
    );
}

export default App;
