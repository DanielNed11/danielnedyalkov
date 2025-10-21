import React from "react";
import "../styles/main.css";

function Contact() {
    return (
        <div className="container text-center mt-5 mb-5 p-4">
            <h2 className="mb-4">Let’s Connect</h2>
            <p>
                I’m always open to new opportunities, collaborations, or simply a chat about technology and innovation.
                Feel free to reach out — I’ll be happy to connect!
            </p>

            <div className="contact-links mt-4">
                <p>📧 <strong>Email:</strong> <a href="mailto:dani.nedqlkow@gmail.com">dani.nedqlkow@gmail.com</a></p>
                <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/daniel-nedyalkov17" target="_blank">Daniel Nedyalkov</a></p>
                <p>🐙 <strong>GitHub:</strong> <a href="https://github.com/DanielNed11" target="_blank">DanielNed11</a></p>
            </div>

            <a href="mailto:dani.nedqlkow@gmail.com" className="btn btn-outline-success mt-3">
                Send me an Email
            </a>
        </div>
    );
}

export default Contact;
