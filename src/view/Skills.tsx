import React, { useEffect, useState } from 'react';
import { useGlobal } from "../context/GlobalContext";
import Spotlight from "./spotlight";

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
            <div className="w-[1350px] mx-auto items-center justify-between py-[50px]">
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
                        <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
                            {skill.tabs.map((tab, id1) => (
                                <button key={id1}
                                    className={`flex h-8 flex-1 text-white/70 text-xl items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-green-200 ${category === tab.categories ? "relative bg-green-400/10 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-green-500/0),--theme(--color-green-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] " : "opacity-65 transition-opacity hover:opacity-90"}`}
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
                        className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {skill.details.map((detail, id2) => (
                            <div key={id2} className="group h-full "
                                data-aos="fade-up"
                                data-aos-delay={`${(id2 + 1) * 300}`}
                            >
                                <article
                                    className={`h-full flex flex-col justify-between  relative rounded-[20px] bg-white/10 p-5 backdrop-blur-[10px] transition-opacity border-[1px] border-white/10  ${!detail.categories.includes(category) ? "opacity-30" : ""}`}
                                >

                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills