import React from "react";
import About from "./About";
import Contacts from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Index: React.FC = () => {

    return (
        <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contacts />
        </>
    )
}

export default Index;