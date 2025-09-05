import React, { useEffect, useState } from 'react';
import { useGlobal } from "../../context/GlobalContext";
import Spotlight from "../../components/spotlight";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills: React.FC = () => {
    const { skill, refs } = useGlobal()

    const [category, setCategory] = useState<number>(1)

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    return (
        <section ref={refs[skill.id]} className="bg-black/60" >
            <div className="w-[1350px] mx-auto items-center justify-between pt-[50px] pb-[70px]">
                <div
                    className='grid gap-12 mx-auto max-w-3xl pb-12 text-center md:pb-20'
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div>
                        <div className='inline-flex items-center gap-3 pb-3 before:h-[2px] before:w-10 before:bg-linear-to-r before:from-transparent before:to-green-200/50 after:h-[2px] after:w-10 after:bg-linear-to-l after:from-transparent after:to-green-200/50'>
                            <span className=' inline-flex bg-linear-to-r from-green-200 to-white bg-clip-text text-transparent'>
                                {skill.title}
                            </span>
                        </div>
                        <div className='text-white/70 text-5xl'>
                            <p>{skill.slogan}</p>
                        </div>
                    </div>

                    <div className='text-white/70 text-xl'>
                        <p>{skill.desc}</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pb-12 max-md:hidden md:pb-16"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-green-400/10 p-1 backdrop-blur-[10px]">
                            {skill.tabs.map((tab, id1) => (
                                <button key={id1}
                                    className={`flex h-8 flex-1 text-white text-xl items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-green-200 ${category === tab.categories ? "relative bg-green-400/10 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-green-500/0),--theme(--color-green-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] " : "opacity-30 transition-opacity hover:opacity-90"}`}
                                    onClick={() => setCategory(tab.categories)}
                                >
                                    <svg
                                        className={`fill-current ${category === tab.categories ? "text-green-400" : "text-green-600/50"}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                    >
                                        {tab.icon}
                                    </svg>
                                    <span>{tab.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {skill.details.map((detail, id2) => (
                            <Spotlight key={id2} className="group h-full ">
                                <article

                                    className={`h-full flex flex-col justify-between gap-2 relative rounded-[20px] bg-white/10 p-[30px] backdrop-blur-[10px] transition-opacity border-[1px] border-white/10  ${!detail.categories.includes(category) ? "opacity-30" : "relative h-full overflow-hidden before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-green-20/20 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-green-500/50 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"}`}
                                >
                                    <div className="text-green-400 text-4xl mb-4">
                                        {detail.icon}
                                    </div>
                                    <h3 className="text-2xl font-nacelle text-white mb-2">{detail.title}</h3>
                                    <p className="text-white/50 mb-4 text-xl">{detail.desc}</p>
                                    <div className="w-full bg-green-400/10 rounded-full h-2.5">
                                        <div className="skill-bar bg-gradient-to-r from-green-400/40 to-green-400 h-2.5 rounded-full" style={{ width: `${detail.ratio}%` }}></div>
                                    </div>
                                </article>
                            </Spotlight>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills