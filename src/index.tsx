import React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import "./assets/styles/main.scss";
import Photo from "./components/Photo";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Courses from "./components/Courses";

// const Application: React.FC = () => <h1>Application</h1>;

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
    }, [window.screen.width]);

    function detectWindowSize() {
        window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
    }

    window.onresize = detectWindowSize;

    console.log(isMobile);

    return isMobile ? (
        <div className="small">
            <div className="mid">
                <Photo />
                <About />
                <Contact />
                <Skills />
                <Languages />
                <Experience />
                <Education />
                <Courses />
            </div>
        </div>
    ) : (
        <div className="big">
            <div className="left">
                <Photo />
                <Contact />
                <Skills />
                <Languages />
            </div>
            <div className="right">
                <About />
                <Experience />
                <Education />
                <Courses />
            </div>
        </div>
    );
}

render(<App />, document.getElementById("root"));
