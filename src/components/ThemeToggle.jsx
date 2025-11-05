import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [theme, setTheme] = useState(prefersDark ? "dark" : "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <div className="toggle-circle">
                {theme === "light" ? (
                    <Sun size={16} color="#f5c542" strokeWidth={2.2} />
                ) : (
                    <Moon size={16} color="#d4d4d4" strokeWidth={2.2} />
                )}
            </div>
        </div>
    );
}

export default ThemeToggle;
