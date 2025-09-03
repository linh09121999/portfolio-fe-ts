import React, { useEffect } from 'react';
import { useGlobal } from "../context/GlobalContext";
import Spotlight from "../components/spotlight";

import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
    const { about, refs } = useGlobal()

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);
    
    return (
        <section
            ref={refs[about.id]}
            className="bg-black/60"
        >
            <div className='w-[1350px] mx-auto items-center grid grid-col-1 gap-16 py-[50px]'>
                <div className='items-center flex justify-between gap-20'>
                    <img src={`${about.img}`} alt={`${about.altImg}`}
                        className="md:w-[32%]"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    />

                    <div
                        className='grid gap-12 self-start'
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <div>
                            <div className='inline-flex items-center gap-3 pb-3 before:h-[2px] before:w-10 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-[2px] after:w-10 after:bg-linear-to-l after:from-transparent after:to-green-200/50'>
                                <span className=' inline-flex bg-linear-to-r from-green-200 to-white bg-clip-text text-transparent'>
                                    {about.title}
                                </span>
                            </div>
                            <div className='text-white/70 text-5xl'>
                                <p>{about.slogan}</p>
                            </div>
                        </div>

                        <div className='text-white/70 text-xl'>
                            <p>{about.desc}</p>
                        </div>
                        <div className='text-2xl grid gap-4'>
                            {about.intro.map((item, index) => (
                                <div key={index} className='flex'>
                                    <span className='text-green-200 w-[170px]'>{item.title}: </span>
                                    <span className='text-white'>{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Spotlight className='group grid grid-col-1 md:grid-cols-4 gap-6 ml-[50px] mr-[10px] '
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {about.strengths.map((strength, index) => (
                        <figure className="alt " key={index}
                            data-aos="fade-up"
                            data-aos-delay={`${(index + 1) * 300}`}
                        >
                            <figcaption className='bg-green-400 size-[60px] content-center text-center'>
                                <span className='text-3xl '>{strength.icon}</span>
                            </figcaption>
                            <div className='textStrength bg-white/10 backdrop-blur-[10px] text-white/65  border-[1px] border-white/10 relative h-full overflow-hidden before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-green-20/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-green-500/50 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100'>
                                <p className='text-2xl p-[20px] pl-[30px] pb-[90px]'>
                                    {strength.desc}
                                </p>
                            </div>
                        </figure>
                    ))}
                </Spotlight>
            </div>
        </section>
    )
}

export default About