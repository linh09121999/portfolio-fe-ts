import React, { useEffect } from 'react';
import { useGlobal } from "../../context/GlobalContext";
import SocialMedia from '../../components/SocialMedia';

import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
    const { home, refs, socialMedia, scrollTo } = useGlobal()

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const handleClickContact = () => {
        scrollTo("about");
    }
    const Letter = home.textLearnMore.toLocaleUpperCase().split("");

    return (
        <section
            ref={refs[home.id]}
            className="max-w-[1350px] mx-auto flex items-center justify-between mt-[200px] relative max-[1350px]:px-4 max-md:mt-[150px]"
        >
            <div
                className="grid h-full gap-10 w-[45%] self-start mt-[30px] z-100 max-md:mb-[250px] max-md:mt-0"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <p className="text-white text-2xl">{home.textHello}</p>
                <p className="bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent text-9xl font-bold max-[1350px]:text-8xl max-md:text-7xl">{home.title}</p>
                {/* <p className="text-white/50 text-xl">{home.slogan}</p> */}
                <button className='md:hidden mt-[30px] mb-[80px] justify-self-end max-sm:justify-self-center group css-icon' onClick={handleClickContact}>
                    <div className='absolute section-letter size-[180px] max-sm:size-[140px] rounded-full bg-green-400/10 text-white backdrop-blur-[10px] border border-green-400/30 flex items-center justify-center overflow-hidden group-hover:text-black group-hover:font-bold'>
                        {Letter.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    className="absolute text-xl inline-block top-[10px] left-[90px] [transform-origin:0px_80px] max-sm:text-sm max-sm:left-[70px] max-sm:[transform-origin:0px_60px]" //top-[-55px] left-[25px]
                                    style={{
                                        transform: `rotate(${index * 14}deg)`
                                    }}
                                >
                                    {item}
                                </span>
                            );
                        })}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="absolute size-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-white stroke-2 fill-none transition-transform duration-300 group-hover:stroke-black">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="absolute inset-0 rounded-full z-[-1] bg-green-400 scale-0 group-hover:scale-100 text-black transition-transform duration-600 ease-out"></span>
                    </div>
                </button>
            </div>
            <div
                data-aos="fade-left"
                data-aos-delay="200">
                <img
                    alt={`${home.altImg}`}
                    src={`${home.img}`}
                    className="w-[500px] z-0 max-md:hidden"
                />
            </div>

            <div className='absolute text-white bottom-[50px] z-10 left-0 grid gap-6 max-[1350px]:left-4'
                data-aos="fade-right"
                data-aos-delay="600">
                <p className='text-xl'>{socialMedia.title}</p>
                <ul className='flex list-none gap-6'>
                    {socialMedia.socialMediaContent.map((social, index) => (
                        <SocialMedia
                            className='hover:text-green-400 hover:translate-x-[5px] text-white/70 transition-transform duration-300 ease-in-out'
                            indexProp={index}
                            listLink={social.link}
                            listTitle={social.title}
                            classNameTitle='css-icon'
                        />
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default Home