import { motion, AnimatePresence } from "framer-motion";
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
        <motion.div
            className="theme-toggle"
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                    <motion.div
                        key="sun"
                        className="toggle-circle"
                        initial={{ x: 0, opacity: 0, rotate: -30 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{ x: 30, opacity: 0, rotate: 30 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <Sun size={16} color="#f5c542" strokeWidth={2.2} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        className="toggle-circle"
                        initial={{ x: -20, opacity: 0, rotate: 30 }}
                        animate={{ y: -2, x: 27, opacity: 1, rotate: 0 }}
                        exit={{ x: 0, opacity: 0, rotate: -30 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <Moon size={15} color="#d4d4d4" strokeWidth={2.2} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ThemeToggle;
