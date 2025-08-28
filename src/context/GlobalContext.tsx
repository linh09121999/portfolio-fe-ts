import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import type { JSX, ReactNode } from "react";
import { useMediaQuery } from "@mui/material"

import {
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaPlayCircle,
    FaHome,
    FaMailBulk,
    FaAngleDoubleUp,
    FaLaptopCode,
    FaUsers,
    FaLightbulb
} from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import {
    IoShieldCheckmark,
    IoClose,
    IoSparkles
} from "react-icons/io5";

import imgLinh1 from "../assets/img/linh1.png"
import imgLinh2 from "../assets/img/linh2.png"

export interface Pages {
    id: string;
    title: string;
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
    title: string;
    link: string;
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
    id: string;
    textHello: string;
    title: string;
    slogan: string;
    btnContact: string;
    altImg: string;
    img: string;
}

const defaultHome: Home = {
    id: "home",
    textHello: "Hello, I’m LinhCTT 👋",
    title: "FRONTEND DEVELOPER",
    slogan: "“Transforming vision into superior web solutions, elevating experiences and optimizing business results.”",
    btnContact: "Contact Me",
    altImg: "image linh 1",
    img: imgLinh1,
}

export interface Strengths {
    icon: JSX.Element,
    desc: string;
}

const defaultStrengths: Strengths[] = [
    {
        icon: <FaLaptopCode />,
        desc: "Developing scalable and responsive interfaces"
    },
    {
        icon: <IoSparkles />,
        desc: "Writing efficient, reusable, and maintainable code"
    },
    {
        icon: <FaUsers />,
        desc: "Strong collaboration in Agile/Scrum teams"
    },
    {
        icon: <FaLightbulb />,
        desc: "Problem-solving and quick adaptation to new tools & technologies"
    }
]

export interface Intro {
    title: string;
    desc: string;
}

const defaultIntro: Intro[] = [
    {
        title: "Name",
        desc: "Cao Thi Thuy Linh",
    },
    {
        title: "Date of birth",
        desc: "September 12, 1999",
    },
    {
        title: "Address",
        desc: "No Ban Village, Hong Van Commune, Hanoi",
    },
    {
        title: "Email",
        desc: "Linhct020328@gmail.com",
    },
    {
        title: "Phone",
        desc: "(+84) 962 059 262",
    }
]

export interface About {
    id: string;
    slogan: string;
    title: string;
    descs: string;
    strengths: Strengths[];
    altImg: string;
    img: string;
    intro: Intro[];
}

const defaultAbout: About = {
    id: "about",
    slogan: "Frontend is not just about code, it's about experience.",
    title: "ABOUT ME",
    descs: "Frontend Developer với kinh nghiệm chuyên sâu về ReactJS, tập trung vào việc phát triển các giao diện số tối ưu, thân thiện người dùng và được xây dựng từ mã code sạch. Tôi cam kết biến các thiết kế UX/UI phức tạp thành những trải nghiệm web mượt mà và hiệu quả.",
    strengths: defaultStrengths,
    altImg: "image linh 1",
    img: imgLinh2,
    intro: defaultIntro
}

export interface Icons {
    iconMenu: JSX.Element;
    iconClose: JSX.Element;
    iconBackToTop: JSX.Element
}

const defaultIcons: Icons = {
    iconMenu: <CgMenu />,
    iconClose: <IoClose />,
    iconBackToTop: <FaAngleDoubleUp />,
}


export interface GlobalState {
    name: string | null;
    setSelectNav: (index: number) => void;
    selectNav: number;
    refs: Record<string, React.RefObject<HTMLDivElement | null>>;
    scrollTo: (id: string) => void;
    offset: number;
    isMobile: boolean;
    icons: Icons;
    pages: Pages[];
    socialMedia: SocialMedia[];
    home: Home;
    welcomeText: string;
    about: About;
}


const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const name = "Linhcct"
    const welcomeText = "Welcome to my portfolio 👋"

    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {};
    defaultPages.forEach((page) => {
        refs[page.id] = useRef<HTMLDivElement | null>(null);
    });

    const offset = 70;

    const [selectNav, setSelectNav] = useState<number>(0);

    const scrollTo = (id: string) => {
        const element = refs[id]?.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            defaultPages.forEach((page, index) => {
                const el = refs[page.id]?.current;
                if (!el) return;

                const offsetTop = el.offsetTop;
                const offsetHeight = el.offsetHeight;

                if (
                    scrollY >= offsetTop - offset &&
                    scrollY < offsetTop + offsetHeight - offset
                ) {
                    setSelectNav(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [refs]);

    const isMobile = useMediaQuery("(max-width:768px)");
    const value = {
        name,
        pages: defaultPages,
        socialMedia: defaultSocialMedia,
        selectNav, setSelectNav,
        home: defaultHome,
        welcomeText,
        about: defaultAbout,
        icons: defaultIcons,
        isMobile,
        refs,
        scrollTo,
        offset,
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