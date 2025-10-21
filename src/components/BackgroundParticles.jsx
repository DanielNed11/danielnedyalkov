import { useEffect } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function BackgroundParticles() {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: "#0f2e23" },
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            width: 800,
                            height: 800,
                        },
                    },
                    color: {
                        value: ["#00e89f", "#00b3ff", "#ffffff"],
                    },
                    opacity: {
                        value: { min: 0.05, max: 0.25 },
                        animation: {
                            enable: true,
                            speed: 0.4,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 5, max: 15 },
                        animation: {
                            enable: true,
                            speed: 2,
                            startValue: "random",
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: "out",
                    },
                    shape: { type: "circle" },
                    shadow: {
                        enable: true,
                        blur: 4,
                        color: "#00ffcc",
                    },
                    wobble: {
                        enable: true,
                        distance: 3,
                        speed: 1,
                    },
                    links: { enable: false },
                },
                interactivity: {
                    events: { onHover: { enable: false } },
                },
            }}
        />
    );
}

export default BackgroundParticles;
