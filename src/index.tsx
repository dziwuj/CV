import React, { useState, useEffect, createContext, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Photo } from "./components/Photo";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Languages } from "./components/Languages";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Courses } from "./components/Courses";
import { Name } from "./components/Name";
import { Overlay } from "./components/Overlay";
import { rootStore } from "./stores/Root.store";

import "./styles/main.scss";

export const StoreContext = createContext(rootStore);

function App() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
    }, [window.screen.width]);

    function detectWindowSize() {
        window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
    }

    window.onresize = detectWindowSize;

    return (
        <StoreContext.Provider value={rootStore}>
            {isMobile ? (
                <div className="small">
                    <div className="mid">
                        <Name />
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
                <div className="big" ref={resumeRef}>
                    <div className="left">
                        <Name />
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
            )}
            <Overlay resumeRef={resumeRef} />
        </StoreContext.Provider>
    );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
