import React from "react";
import SectionObserver from "../components/SectionObserver";
import Home from "./Home";
import Journey from "./Journey";
import Projects from "./Projects";
import Contact from "./Contact";

function Main({ onSectionChange }) {
    return (
        <>
            <SectionObserver id="home" onSectionChange={onSectionChange}>
                <Home />
            </SectionObserver>

            <SectionObserver id="journey" onSectionChange={onSectionChange}>
                <Journey />
            </SectionObserver>

            <SectionObserver id="projects" onSectionChange={onSectionChange}>
                <Projects />
            </SectionObserver>

            <SectionObserver id="contact" onSectionChange={onSectionChange}>
                <Contact />
            </SectionObserver>
        </>
    );
}

export default Main;
