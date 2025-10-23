import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

function AnimatedSection({ children, parallax = true, threshold = 0.15 }) {
    const containerRef = useRef(null);

    // Intersection observer for fade-in trigger
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: threshold,
        rootMargin: "-50px 0px", // Trigger slightly before entering viewport
    });

    // Track scroll direction efficiently
    const [scrollDir, setScrollDir] = useState("down");
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    if (Math.abs(currentY - lastScrollY.current) > 5) { // Debounce small movements
                        setScrollDir(currentY > lastScrollY.current ? "down" : "up");
                        lastScrollY.current = currentY;
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Parallax effect (optional)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const smoothY = useSpring(yParallax, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Enhanced variants with stagger support
    const variants = {
        hidden: (dir) => ({
            opacity: 0,
            y: dir === "down" ? 50 : -50,
            scale: 0.97,
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing curve
            },
        },
    };

    return (
        <motion.div
            ref={(node) => {
                ref(node);
                containerRef.current = node;
            }}
            custom={scrollDir}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            style={parallax ? { y: smoothY } : {}}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection;