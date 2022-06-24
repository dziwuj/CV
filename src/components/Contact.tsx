import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <address>
                <p>Lubień 237</p>
                <p>32-433 Lubień</p>
                <p>+48 600 019 322</p>
                <a href="mailto:sobeckizbyszko@gmail.com">
                    <p>sobeckizbyszko@gmail.com</p>
                </a>
                <a
                    href="https://github.com/dziwuj"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        className="brand"
                        color="#171515"
                        icon={faGithub}
                    />
                </a>
                <a
                    href="https://linkedin.com/in/zbyszkosobecki"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        className="brand"
                        color="#0072b1"
                        icon={faLinkedin}
                    />
                </a>
            </address>
        </div>
    );
}
