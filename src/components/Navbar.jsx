import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

function NavigationBar({ activeSection }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const firstFocusableRef = useRef(null);
    const hamburgerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    const handleNavClick = (item) => {
        if (item.route) {
            // Navigate to route-based pages
            navigate(item.route);
            setMenuOpen(false);
        } else if (item.id) {
            // Handle scroll-based navigation
            if (location.pathname !== '/') {
                // If not on main page, navigate to main first then scroll
                navigate('/');
                setTimeout(() => scrollTo(item.id), 100);
            } else {
                scrollTo(item.id);
            }
        }
    };

    const navItems = [
        {id: "home", label: "Home"},
        {route: "/about", label: "About"},
        {id: "journey", label: "Journey"},
        {id: "projects", label: "Projects"},
        {route: "/blog", label: "Blog"},
        {id: "contact", label: "Contact"}
    ];

    // Scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.minimal-navbar');
            if (nav) {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Escape key and focus management
    useEffect(() => {
        if (!menuOpen) return;

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                hamburgerRef.current?.focus();
            }
        };

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) &&
                !hamburgerRef.current?.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        // Focus first menu item when menu opens
        setTimeout(() => {
            firstFocusableRef.current?.focus();
        }, 100);

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);

        // Prevent scroll on mobile when menu is open
        if (window.innerWidth <= 768) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Handle keyboard navigation within menu
    const handleKeyDown = (e, index) => {
        const items = menuRef.current?.querySelectorAll('.nav-link');
        if (!items) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = items[(index + 1) % items.length];
            next?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = items[(index - 1 + items.length) % items.length];
            prev?.focus();
        } else if (e.key === 'Home') {
            e.preventDefault();
            items[0]?.focus();
        } else if (e.key === 'End') {
            e.preventDefault();
            items[items.length - 1]?.focus();
        }
    };

    return (
        <>
            {/* Mobile backdrop */}
            {menuOpen && (
                <div
                    className="mobile-backdrop"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav className="minimal-navbar" role="navigation" aria-label="Main navigation">
                <div className="navbar-content">
                    <button
                        ref={hamburgerRef}
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="nav-menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>

                    <div
                        ref={menuRef}
                        id="nav-menu"
                        className={`nav-links ${menuOpen ? 'show' : ''}`}
                        role="menu"
                    >
                        {navItems.map((item, index) => (
                            <a
                                key={item.id || item.route}
                                ref={index === 0 ? firstFocusableRef : null}
                                href={item.route || `#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item);
                                }}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className={`nav-link ${
                                    (item.route && location.pathname === item.route) ||
                                    (item.id && activeSection === item.id && location.pathname === '/')
                                        ? 'active'
                                        : ''
                                }`}
                                role="menuitem"
                                tabIndex={menuOpen || window.innerWidth > 768 ? 0 : -1}
                                aria-label={`Navigate to ${item.label}`}
                                aria-current={
                                    (item.route && location.pathname === item.route) ||
                                    (item.id && activeSection === item.id)
                                        ? 'page'
                                        : undefined
                                }
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;