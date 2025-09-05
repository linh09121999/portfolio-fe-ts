import React, { useEffect } from 'react';
import { useGlobal } from "../context/GlobalContext";
import SocialMedia from '../components/SocialMedia';

import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
    const { home, refs, scrollTo, socialMedia } = useGlobal()

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const handleClickContact = () => {
        scrollTo("contact");
    }

    return (
        <section
            ref={refs[home.id]}
            className="w-[1350px] mx-auto flex items-center justify-between mt-[200px] relative"
        >
            <div
                className="grid h-full gap-10 w-[45%] self-start mt-[30px]"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <p className="text-white text-2xl">{home.textHello}</p>
                <p className="bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent text-9xl font-bold">{home.title}</p>
                {/* <p className="text-white/50 text-xl">{home.slogan}</p> */}
            </div>
            <img
                alt={`${home.altImg}`}
                src={`${home.img}`}
                className="w-[500px]"
                data-aos="fade-left"
                data-aos-delay="200"
            />
            {/* <button
                className="flex group z-1000 relative inline-flex mb-[70px] gap-2 place-self-end text-xl text-green-100 items-center before:content-[''] before:absolute before:left-[-20px] before:w-[100px] before:h-[100px] before:border-[5px] before:border-green-100 before:rounded-full  before:border-r-0 before:border-b-0 before:rotate-[-45deg]"
                data-aos="fade-left"
                data-aos-delay="200"
                onClick={handleClickContact}
            >
                {home.btnContact}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="w-4 h-4  stroke-green-200 stroke-2 fill-none transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button> */}
            <div className='absolute text-white bottom-[50px] z-10 left-0 grid gap-6'
                data-aos="fade-right"
                data-aos-delay="600">
                <p className='text-xl'>{socialMedia.title}</p>
                <ul className='flex list-none gap-6'>
                    {socialMedia.socialMediaContent.map((social, index) => (
                        <SocialMedia className='hover:text-green-400 hover:translate-x-[5px] text-white/70 transition-transform duration-300 ease-in-out' indexProp={index} listLink={social.link} listTitle={social.title} />
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default Home