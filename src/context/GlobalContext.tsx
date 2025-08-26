import React, { createContext, useContext, useState } from "react";
import type { JSX, ReactNode } from "react";

import {
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin
} from "react-icons/fa";

import imgLinh1 from "../assets/img/linh1.png"
import Home from "../view/Home";

export interface Pages {
    id: String;
    title: String;
    icon: JSX.Element;
}

const defaultPages: Pages[] = [
    {
        id: "home",
        title: "HOME",
        icon: <></>
    },
    {
        id: "about",
        title: "ABOUT",
        icon: <></>
    },
    {
        id: "skills",
        title: "SKILLS",
        icon: <></>
    },
    {
        id: "projects",
        title: "PROJECTS",
        icon: <></>
    },
    {
        id: "contact",
        title: "CONTACT",
        icon: <></>
    }

]

export interface SocialMedia {
    title: String;
    link: String;
    icon: JSX.Element;
}

const defaultSocialMedia: SocialMedia[] = [
    {
        title: "FaceBook",
        link: "https://www.facebook.com/ThuyLinh.09121999",
        icon: <FaFacebookSquare className="size-[28px]" />
    },
    {
        title: "GitHub",
        link: "https://github.com/linh09121999",
        icon: <FaGithubSquare className="size-[28px]" />
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/thuylinh09121999/",
        icon: <FaLinkedin className="size-[28px]" />
    }
]

export interface Home {
    id: String;
    textHello: String;
    title: String;
    slogan: String;
    btnContact: String;
    altImg: String;
    img: String;
}

const defaultHome: Home = {
    id: "home",
    textHello: "Hello, I’m LinhCTT",
    title: "FRONTEND DEVELOPER",
    slogan: "“Transforming vision into superior web solutions, elevating experiences and optimizing business results.”",
    btnContact: "Contact Me",
    altImg: "image linh 1",
    img: imgLinh1,
}

export interface GlobalState {
    name: string | null;
    setSelectNav: (index: number) => void;
    selectNav: number;
    pages: Pages[];
    socialMedia: SocialMedia[];
    home: Home;
    welcomeText: String;
}


const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const name = "Linhcct"
    const [selectNav, setSelectNav] = useState<number>(0);
    const welcomeText = "Welcome to my portfolio 👋"

    const value = {
        name,
        pages: defaultPages,
        socialMedia: defaultSocialMedia,
        selectNav, setSelectNav,
        home: defaultHome,
        welcomeText,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for convenience
export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
};