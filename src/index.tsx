import React, { useState, createContext, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Photo } from './components/Photo';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Languages } from './components/Languages';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Courses } from './components/Courses';
import { Name } from './components/Name';
import { Overlay } from './components/Overlay';
import { rootStore } from './stores/Root.store';
import './styles/main.scss';
import { Burger } from './components/Burger';

export const StoreContext = createContext(rootStore);

function App() {
    const [isShown, setIsShown] = useState<boolean>(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <StoreContext.Provider value={rootStore}>
            <div className="container">
                <div className="desktop" ref={resumeRef}>
                    <div className="col-1">
                        <Name />
                        <Photo />
                        <Contact />
                        <Skills />
                        <Languages />
                    </div>
                    <div className="col-2">
                        <About />
                        <Experience />
                        <Education />
                        <Courses />
                    </div>
                </div>

                <div className="mobile">
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
            <Burger setIsShown={setIsShown} isShown={isShown} />
            <Overlay
                resumeRef={resumeRef}
                setIsShown={setIsShown}
                isShown={isShown}
            />
        </StoreContext.Provider>
    );
}

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<App />);
