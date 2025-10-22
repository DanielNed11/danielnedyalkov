import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

function NavigationBar() {
    const [activeSection, setActiveSection] = useState("home");

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" }
    ];

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPos = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].offsetTop <= scrollPos) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="minimal-navbar">
            <div className="navbar-content">
                <div className="nav-links">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default NavigationBar;