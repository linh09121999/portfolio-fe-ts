import React, { useEffect, useState } from 'react';
import { useGlobal } from "../context/GlobalContext";
import Spotlight from "../components/spotlight";

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

                    <div
                        className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-2"
                    >
                        {project.details.map((item, index) => (
                            <Spotlight key={index} className="group h-full ">
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={`${(index + 1) * 200}`}
                                    className={`h-full w-full flex flex-col justify-between gap-2 relative rounded-[20px] bg-white/10 p-[30px] backdrop-blur-[10px] transition-opacity border-[1px] border-white/10  relative h-full overflow-hidden before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-green-20/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-green-500/50 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100`}
                                ></div>
                            </Spotlight>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects