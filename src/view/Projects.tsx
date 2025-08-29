import React, { useEffect, useState } from 'react';
import { useGlobal } from "../context/GlobalContext";
import Spotlight from "./spotlight";

import AOS from "aos";
import "aos/dist/aos.css";

const Projects: React.FC = () => {
    const { project, refs } = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    return (
        <section ref={refs[project.id]} className="bg-black/60" >
            <div className="w-[1350px] mx-auto items-center justify-between py-[50px]">
                <div
                    className='grid gap-12 mx-auto max-w-3xl pb-12 text-center md:pb-20'
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div>
                        <div className='inline-flex items-center gap-3 pb-3 before:h-[2px] before:w-10 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-[2px] after:w-10 after:bg-linear-to-l after:from-transparent after:to-green-200/50'>
                            <span className=' inline-flex bg-linear-to-r from-green-200 to-white bg-clip-text text-transparent'>
                                {project.title}
                            </span>
                        </div>
                        <div className='text-white/70 text-5xl'>
                            <p>{project.slogan}</p>
                        </div>
                    </div>

                    <div className='text-white/70 text-xl'>
                        <p>{project.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects