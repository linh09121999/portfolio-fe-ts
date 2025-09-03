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
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaAngleDoubleUp,
    FaLaptopCode,
    FaUsers,
    FaLightbulb,
    FaCode,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt
} from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import {
    IoShieldCheckmark,
    IoClose,
    IoSparkles,
    IoLayersSharp
} from "react-icons/io5";
import { MdLayers } from "react-icons/md";
import { VscVscodeInsiders, VscVscode } from "react-icons/vsc";
import { SiFramework, SiAdobeillustrator } from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";


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
    desc: string;
    strengths: Strengths[];
    altImg: string;
    img: string;
    intro: Intro[];
}

const defaultAbout: About = {
    id: "about",
    slogan: "Frontend is experience, not just code",
    title: "ABOUT ME",
    desc: "Frontend Developer specializing in ReactJS. Focused on building optimized, user-friendly digital interfaces from clean code to transform complex UX/UI designs into smooth and efficient web experiences.",
    strengths: defaultStrengths,
    altImg: "image linh 1",
    img: imgLinh2,
    intro: defaultIntro
}

export interface Icons {
    iconMenu: JSX.Element;
    iconClose: JSX.Element;
    iconBackToTop: JSX.Element;
    iconMap: JSX.Element;
}

const defaultIcons: Icons = {
    iconMenu: <CgMenu />,
    iconClose: <IoClose />,
    iconBackToTop: <FaAngleDoubleUp />,
    iconMap: <FaMapMarkerAlt size={30} />
}

export interface DetailSkills {
    icon: JSX.Element;
    title: string;
    desc: string;
    ratio: number;
    categories: number[],
}

const defaultDetailSkills: DetailSkills[] = [
    {
        icon: <BiLogoJavascript />,
        title: "JavaScript",
        desc: "The world's most popular programming language for creating dynamic and interactive web content.",
        ratio: 90,
        categories: [1, 2]
    },
    {
        icon: <BiLogoTypescript />,
        title: "TypeScript",
        desc: "JavaScript with superpowers: a strongly typed superset that enables more robust and scalable code.",
        ratio: 70,
        categories: [1, 2]
    },
    {
        icon: <RiReactjsLine />,
        title: "ReactJS",
        desc: "A powerful and popular JavaScript library for building flexible and reusable user interfaces (UIs).",
        ratio: 85,
        categories: [1, 3]
    },
    {
        icon: <FaHtml5 />,
        title: "HTML5",
        desc: "The latest core web technology, introducing semantic tags and powerful APIs for rich media and complex applications.",
        ratio: 95,
        categories: [1, 2]
    },
    {
        icon: <FaCss3Alt />,
        title: "CSS3",
        desc: "The modern standard for web styling, providing features like flexbox, grid, animations, and responsive design.",
        ratio: 95,
        categories: [1, 2]
    },
    {
        icon: <RiTailwindCssFill />,
        title: "Tailwind CSS",
        desc: "A utility-first CSS framework for rapidly building custom designs directly in your markup.",
        ratio: 90,
        categories: [1, 3]
    },
    {
        icon: <FaGitAlt />,
        title: "Git",
        desc: "The industry-standard distributed version control system for tracking code changes and enabling team collaboration.",
        ratio: 90,
        categories: [1, 4]
    },
    {
        icon: <VscVscode />,
        title: "VS Code",
        desc: "A lightweight, powerful, and highly customizable source code editor from Microsoft with support for virtually any language.",
        ratio: 90,
        categories: [1, 4]
    },
    {
        icon: <SiAdobeillustrator />,
        title: "Adobe Illustrator",
        desc: "The industry-leading vector graphics software for creating logos, icons, illustrations, and print layouts.",
        ratio: 80,
        categories: [1, 4]
    },
]

export interface TabsSkills {
    icon: JSX.Element;
    title: string;
    categories: number;
}

const defaultTabsSkills: TabsSkills[] = [
    {
        icon: <BsLayers size={18} />,
        title: "View all",
        categories: 1
    },
    {
        icon: <FaCode />,
        title: "Languages",
        categories: 2
    },
    {
        icon: <SiFramework size={18} />,
        title: "Frameworks",
        categories: 3
    },
    {
        icon: <VscVscodeInsiders />,
        title: "Tools & Design",
        categories: 4
    }
]

export interface Skill {
    id: string;
    slogan: string;
    title: string;
    desc: string;
    tabs: TabsSkills[];
    details: DetailSkills[];
}

const defaultSkills: Skill = {
    id: "skills",
    slogan: "The UX-Focused Developer",
    title: "MY SKILLS",
    desc: "A frontend developer dedicated to transforming UX/UI designs into fast, functional, and accessible code. Focused on performance, semantics, and creating seamless user interactions.",
    tabs: defaultTabsSkills,
    details: defaultDetailSkills
}

export interface DetailProjects {
    img: string;
    title: string;
    desc: string;
    skills: string[];
    link: string;
}

const defaultDetailProjects: DetailProjects[] = [
    {
        img: "",
        title: "Cơ sở dữ liệu thi hành kỷ luật Đảng",
        desc: "",
        skills: ["ReactJS", "Tailwind CSS", "Adobe Illustrator"],
        link: "",
    },
    {
        img: "",
        title: "Hệ thống quản lý hồ sơ Scan",
        desc: "",
        skills: ["ReactJS", "Tailwind CSS", "Adobe Illustrator"],
        link: "",
    },
    {
        img: "",
        title: "Báo cáo đối soát dịch vụ DTA",
        desc: "",
        skills: ["ReactJS", "Tailwind CSS", "Adobe Illustrator"],
        link: "",
    },
    {
        img: "",
        title: "",
        desc: "",
        skills: [ "ReactJS", "Tailwind CSS", "Adobe Illustrator"],
        link: "",
    }
]

export interface Project {
    id: string;
    slogan: string;
    title: string;
    desc: string;
    details: DetailProjects[],
    icon: JSX.Element
}

const defaultProject: Project = {
    id: "projects",
    slogan: "Intuitive, User-Friendly, Efficient",
    title: "MY PROJECTS",
    desc: "Contributed to developing the user interface for an internal management application, focusing on intuitive design and optimizing user workflows.",
    details: defaultDetailProjects,
    icon: <></>
}


export interface contactIntro extends Intro {
    icon: JSX.Element
}

const defaultContactIntro: contactIntro[] = [
    {
        icon: <FaMailBulk />,
        title: "Email",
        desc: "Linhct020328@gmail.com",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        desc: "(+84) 962 059 262",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        desc: "No Ban Village, Hong Van Commune, Hanoi",
    }
]

export interface FormSubmit {
    formName: string;
    formEmail: string;
    formMessage: string;
}

const defaultFormSubmit: FormSubmit = {
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
}

export interface Contact {
    id: string;
    slogan: string;
    title: string;
    desc: string;
    btnContact: string;
    localMap: string;
    contactIntro: contactIntro[],
    formSubmit: FormSubmit
}

const defaultContact: Contact = {
    id: "contact",
    slogan: "Let's Contact",
    title: "CONTACT ME",
    desc: "Always open to discussions, collaborations, and new opportunities. Feel free to get in touch and let’s create impactful products together.",
    btnContact: "Send Message",
    localMap: "No Ban Village, Hong Van Commune, Hanoi",
    contactIntro: defaultContactIntro,
    formSubmit: defaultFormSubmit
}

export type LatLng = {
    lat: number;
    lng: number;
};

export interface ContentSend {
    contentName: string;
    // setContentName: (value: string) => void;
    contentEmail: string;
    // setContentEmail: (value: string) => void;
    contentMessage: string;
    // setContentMessage: (value: string) => void;
}

const initialContent: ContentSend = {
    contentName: '',
    contentEmail: '',
    contentMessage: ''
};

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
    marqueeContact: string[];
    about: About;
    skill: Skill;
    project: Project;
    contact: Contact;
    gmailUrl: string;
    mapApiKey: string;
    mapCenter: LatLng;
    contentSend: ContentSend;
    setContentSend: React.Dispatch<React.SetStateAction<ContentSend>>;
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

    const textSubject = "Chào bạn, tôi là "
    const email = "linhct020328@gmail.com"

    const [contentSend, setContentSend] = useState<ContentSend>(initialContent);

    const subject = encodeURIComponent(textSubject + contentSend.contentName);
    const body = encodeURIComponent(contentSend.contentMessage);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    const mapApiKey = "AIzaSyDDXHYqJM3Tn_0bP1GcBEmA6IiKznvZQnI"
    const mapCenter = { lat: 20.869430, lng: 105.896737 }

    const marqueeContact = ["CONTACT ME 🤘🏻", "LINHCTT 🤘🏻"]

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
        skill: defaultSkills,
        project: defaultProject,
        contact: defaultContact,
        gmailUrl,
        mapApiKey,
        mapCenter,
        contentSend, setContentSend,
        marqueeContact
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