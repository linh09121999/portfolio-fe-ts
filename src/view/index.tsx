import React from "react";
import About from "./About";
import Contacts from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Marquee from "react-fast-marquee";

import { useGlobal } from "../context/GlobalContext";

const Index: React.FC = () => {

    const { welcomeText } = useGlobal()

    return (
        <main className="flex-col">
            <Home />
            <Marquee speed={100} gradient={false} autoFill className="bg-white/10 backdrop-blur-[10px] py-[10px] px-[40px] border-[1px] border-white/10 border-r-0 border-l-0">
                <p className="flex text-white/70 text-[60px] mx-[70px]">{welcomeText}</p>
            </Marquee>
            <About />
            <Skills />
            <Projects />
            <Contacts />
        </main>
    )
}

export default Index;