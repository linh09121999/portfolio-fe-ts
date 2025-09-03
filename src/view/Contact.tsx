import React, { useEffect } from 'react';
import { useGlobal } from "../context/GlobalContext";
import MapGoogle from '../components/MapGoogle';
import { Button, TextField, Box } from '@mui/material';
import type { SxProps, Theme } from "@mui/material/styles";
import type { ContentSend } from '../context/GlobalContext';
import Marquee from "react-fast-marquee";

import AOS from "aos";
import "aos/dist/aos.css";


const Contacts: React.FC = () => {
    const { contact, refs, gmailUrl, mapApiKey, icons, mapCenter, contentSend, setContentSend, marqueeContact } = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const sxButton: SxProps<Theme> = {
        background: "linear-gradient(135deg, var(--color-green-100) 0%, var(--color-green-300) 100%); ",
        // border: '1px solid rgb(255,255,255,0.1)',
        color: 'black',
        borderRadius: '20px',
        height: '50px',
        fontWeight: '600',
        fontSize: 'var(--text-xl)',
        position: "relative",
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "50%",
            height: "100%",
            width: 0,
            background: "linear-gradient(135deg, var(--color-green-300) 0%, var(--color-green-400) 100%); ",
            opacity: 0,
            transition: "all 0.5s ease",
            zIndex: -1,
        },
        "&:hover::before": {
            left: 0,
            width: "100%",
            opacity: 1,
        },
    }

    const sxText: SxProps<Theme> = {
        width: "100%",
        '& .MuiOutlinedInput-root': {
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.1)",
            border: '1px solid rgb(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '21px 10px',
            transition: 'all 0.3s',
            fontSize: 'var(--text-xl)',
            // border: 'none',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            // border: 'none'
            border: '1px solid rgb(255,255,255,0.2)',
        },

        '& .MuiOutlinedInput-input': {
            padding: 0
        },

        '& .MuiInputBase-input': {
            color: 'white',
            paddingLeft: '14px',
        }
    }

    const sxTextMultiline: SxProps<Theme> = {
        width: "100%",
        '& .MuiOutlinedInput-root': {
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s',
            padding: '21px 10px',
            // border: 'none',
            fontSize: 'var(--text-xl)',
            border: '1px solid rgb(255,255,255,0.1)',
        },
        '& .MuiOutlinedInput-input': {
            textAlign: "justify",
            padding: 0
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgb(255,255,255,0.2)',
        },
        '& .MuiInputBase-input': {
            color: 'white',
            paddingLeft: '14px',
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContentSend((prev: ContentSend) => ({
            ...prev,
            [name === "name"
                ? "contentName"
                : name === "email"
                    ? "contentEmail"
                    : "contentMessage"]: value,
        }));
    };

    return (
        <section
            ref={refs[contact.id]}
            className="bg-black/60 h-[calc(100%+30px)]"
        >
            <div className='w-[1350px] mx-auto items-center grid grid-col-1 gap-12 pt-[50px] mb-[80px]'>
                <div className='grid grid-col-1 gap-20 grid-cols-2'>
                    <div
                        className='grid grid-col-1 gap-12 place-self-start'
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <div>
                            <div className='inline-flex justify-center items-center gap-3 pb-3 before:h-[2px] before:w-10 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-[2px] after:w-10 after:bg-linear-to-l after:from-transparent after:to-green-200/50'>
                                <span className=' inline-flex bg-linear-to-r from-green-200 to-white bg-clip-text text-transparent'>
                                    {contact.title}
                                </span>
                            </div>
                            <div className='text-white/70 text-5xl'>
                                <p>{contact.slogan}</p>
                            </div>
                        </div>
                        <div className='text-white/70 text-xl'>
                            <p>{contact.desc}</p>
                        </div>
                        <div className='text-2xl grid gap-4'>
                            {contact.contactIntro.map((item, index) => (
                                <div key={index} className='flex gap-4 items-center'>
                                    <span className='text-white bg-green-400/20 size-[55px] rounded-full justify-items-center content-center'>{item.icon}</span>
                                    <span className='text-white'>{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className='contact-form mt-[50px]'
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <form className='grid gap-16' >
                            <TextField
                                label={contact.formSubmit.formName}
                                aria-label="input hoten"
                                name="name"
                                variant="standard"
                                sx={sxText}
                                onChange={handleChange}
                            />

                            <TextField
                                label={contact.formSubmit.formEmail}
                                aria-label="input email"
                                name="email"
                                variant="standard"
                                sx={sxText}
                                onChange={handleChange}
                            />

                            <TextField
                                label={contact.formSubmit.formMessage}
                                aria-label="input message"
                                name="message"
                                maxRows={Infinity}
                                multiline
                                variant="standard"
                                sx={sxTextMultiline}
                                onChange={handleChange}
                            />

                            <Button className=" w-full group place-self-end flex group z-1000 relative inline-flex gap-2"
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={sxButton}
                            >
                                {contact.btnContact}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="w-4 h-4 stroke-black stroke-2 fill-none transition-transform duration-300 group-hover:translate-x-1">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Button>
                        </form>
                    </div>
                </div>
                <div
                    className='rounded-[20px] w-full h-[50vh]'
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    <MapGoogle apiKey={mapApiKey} address={contact.localMap} iconMap={icons.iconMap} centerMap={mapCenter} />
                </div>
            </div>
            <Marquee speed={100} gradient={false} autoFill className="bg-white/10 backdrop-blur-[10px] py-[10px] px-[40px] border-[1px] border-white/10 border-r-0 border-l-0">
                {marqueeContact.map((text) => (
                    <p className="flex text-white/70 text-7xl mx-[70px]">{text}</p>
                ))}
            </Marquee>
        </section>
    )
}

export default Contacts