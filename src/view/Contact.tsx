import React, { useEffect } from 'react';
import { useGlobal } from "../context/GlobalContext";
import Spotlight from "./spotlight";
import {Button } from '@mui/material';

import AOS from "aos";
import "aos/dist/aos.css";


const Contacts: React.FC = () => {
    const { contact, refs, gmailUrl } = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const sxButton = {
        color: 'var(--color-green-200)',
    }

    return (
        <section
            ref={refs[contact.id]}
            className="bg-black/60"
        >
            <div className='w-[1350px] mx-auto items-center grid grid-col-1 md:grid-cols-2 gap-16 py-[50px]'>
                <div
                    className='grid gap-12 self-start'
                    data-aos="fade-right"
                    data-aos-delay="300"
                >
                    <div>
                        <div className='inline-flex items-center gap-3 pb-3 before:h-[2px] before:w-10 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-[2px] after:w-10 after:bg-linear-to-l after:from-transparent after:to-green-200/50'>
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
                    {/* <button
                        className="flex group z-100 relative inline-flex mb-[70px] gap-2 place-self-end text-xl text-green-100 items-center before:content-[''] before:absolute before:left-[-20px] before:w-[100px] before:h-[100px] before:border-[5px] before:border-green-100 before:rounded-full  before:border-r-0 before:border-b-0 before:rotate-[-45deg]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        onClick={handleClickContact}
                    > */}
                    <Button className="flex group z-1000 relative inline-flex mb-[70px] gap-2 place-self-end text-xl text-green-100 items-center before:content-[''] before:absolute before:left-[-20px] before:w-[100px] before:h-[100px] before:border-[5px] before:border-green-100 before:rounded-full  before:border-r-0 before:border-b-0 before:rotate-[-45deg]"
                        // variant="outlined"
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={sxButton}
                    >
                        {contact.btnContact}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="w-4 h-4  stroke-green-200 stroke-2 fill-none transition-transform duration-300 group-hover:translate-x-1">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Button>
                    {/* </button> */}
                </div>
                <div
                    className='grid gap-12 self-start'
                    data-aos="fade-left"
                    data-aos-delay="300"
                >

                </div>
            </div>
        </section>
    )
}

export default Contacts