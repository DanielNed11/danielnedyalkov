import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [theme, setTheme] = useState(prefersDark ? "dark" : "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        // Add transition class
        document.documentElement.classList.add('theme-transitioning');
        
        // Change theme
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        
        // Remove transition class after animation completes
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 400); // Match your --transition-speed
    };

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <div className="toggle-circle">
                {theme === "light" ? (
                    <FiSun size={16} color="#f5c542" strokeWidth={2.2} />
                ) : (
                    <FiMoon size={16} color="#d4d4d4" strokeWidth={2.2} />
                )}
            </div>
        </div>
    );
}

export default ThemeToggle;
