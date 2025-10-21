import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BackgroundParticles from "./components/BackgroundParticles";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <BackgroundParticles />
      <NavigationBar />

      <main className="content-wrapper">
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

      <footer className="text-center py-3">
        © {new Date().getFullYear()} Daniel Nedyalkov
      </footer>
    </Router>
  );
}

export default App;
