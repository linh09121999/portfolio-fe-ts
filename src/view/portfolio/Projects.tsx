import React, { useEffect, useState } from 'react';
import { useGlobal } from '../../context/GlobalContext';

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
        <section ref={refs[project.id]} className="bg-black/60 relative after:absolute after:h-px after:w-full after:bg-gradient-to-r after:from-white/0 after:via-green-200/50 after:to-white/0" >
            <div className="max-w-[1350px] mx-auto items-center justify-between pt-[50px] pb-[70px] max-[1350px]:px-4">
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
                <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
                    {project.details.map((item, index) => (
                        <a key={index}
                            data-aos="fade-up"
                            data-aos-delay={`${(index + 1) * 200}`}
                            className="group/card w-full relative h-full overflow-hidden rounded-[20px] bg-black p-px transition-opacity duration-300 ease-in-out border-[1px] border-white/10"
                            href={`${item.link}`}
                            title={`${item.link}`}
                        >
                            <div className="relative z-20 h-full overflow-hidden rounded-[20px] after:absolute after:inset-0 ">
                                <div
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase items-center justify-center rounded-[20px] text-center text-xl text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover/card:opacity-100"
                                    aria-hidden="true"
                                >
                                    {item.title}
                                </div>

                                <img
                                    className="inline-flex aspect-video transition duration-300 ease-in-out transform opacity-100 group-hover/card:opacity-35 group-hover/card:scale-105"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects