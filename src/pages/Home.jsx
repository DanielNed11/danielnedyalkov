import React from "react";
import "../styles/main.css";

function Home() {
    return (
        <div className="container home-container mt-5 mb-5 p-4">
            <div className="row align-items-center">
                {/* Left side: your photo */}
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src="/assets/profile.png"
                        alt="Daniel Nedyalkov"
                        className="hero-photo"
                    />
                </div>

                {/* Right side: intro text */}
                <div className="col-md-7 text-center text-md-start">
                    <h1 className="fw-bold display-5 mb-3">
                        Hi, I’m <span className="text-accent">Daniel Nedyalkov</span> 👋
                    </h1>
                    <p className="lead">
                        I’m a second-year <strong>Applied Computer Science</strong> student passionate about
                        <strong> full-stack development</strong>, <strong>IoT systems</strong>, and <strong>embedded programming</strong>.
                    </p>
                    <a href="/projects" className="btn btn-success mt-3">
                        Explore My Projects
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
