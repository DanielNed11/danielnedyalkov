import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

function NavigationBar() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
            setActiveSection(id);
        }
    };

    let navItems;
    navItems = [
        {id: "home", label: "Home"},
        {id: "about", label: "About"},
        {id: "projects", label: "Projects"},
        {id: "contact", label: "Contact"}
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPos = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].offsetTop <= scrollPos) {

                    if (activeSection !== navItems[i].id) {
                        setActiveSection(navItems[i].id);
                    }
                    break;
                }
            }

            const nav = document.querySelector('.minimal-navbar');
            if (nav) {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection, navItems]);

    return (
        <nav className="minimal-navbar">
            <div className="navbar-content">
                <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}></button>
                <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
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