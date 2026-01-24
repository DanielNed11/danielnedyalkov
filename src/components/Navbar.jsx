import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

function NavigationBar({ activeSection }) { // Accept activeSection as prop
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
            // activeSection is now managed by parent, no need to setActiveSection here
        }
    };

    let navItems;
    navItems = [
        {id: "home", label: "Home"},
        {id: "about", label: "About"},
        {id: "journey", label: "Journey"},
        {id: "projects", label: "Projects"},
        {id: "contact", label: "Contact"}
    ];

    // Removed useEffect for scroll handling, as activeSection is now a prop

    // Keep the scroll effect for the navbar background
    React.useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.minimal-navbar');
            if (nav) {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array as it doesn't depend on component state for section tracking

    return (
        <nav className="minimal-navbar" role="navigation" aria-label="Main navigation">
            <div className="navbar-content">
                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                ></button>
                <div
                    id="nav-menu"
                    className={`nav-links ${menuOpen ? 'show' : ''}`}
                    role="menu"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollTo(item.id);
                            }}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            role="menuitem"
                            aria-label={`Navigate to ${item.label}`}
                            aria-current={activeSection === item.id ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default NavigationBar;