import React from "react";
import About from "./About";
import Contacts from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Marquee from "react-fast-marquee";

import Spotlight from "./spotlight";

import { useGlobal } from "../context/GlobalContext";

const Index: React.FC = () => {

    const { welcomeText} = useGlobal()

    return (
        <Spotlight className="group flex-col bg-black/20">
            <main className="relative h-full overflow-hidden z-0 after:pointer-events-none after:absolute after:-left-5 after:-top-5 after:h-10 after:w-10 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-green-500/80 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                <Home />
                <Marquee speed={100} gradient={false} autoFill className="bg-white/10 backdrop-blur-[10px] py-[10px] px-[40px] border-[1px] border-white/10 border-r-0 border-l-0">
                    <p className="flex text-white/70 text-7xl mx-[70px]">{welcomeText}</p>
                </Marquee>
                <About />
                <Skills />
                <div className="h-[100vh] bg-fixed bg-center bg-cover bg-[url(./assets/img/img-cv.png)]">
                </div>
                <Projects />
                <Contacts />
                
            </main>
        </Spotlight>

    )
}

export default Index;