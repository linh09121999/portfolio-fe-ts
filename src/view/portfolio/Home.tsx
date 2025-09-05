import React, { useEffect } from 'react';
import { useGlobal } from "../../context/GlobalContext";
import SocialMedia from '../../components/SocialMedia';

import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
    const { home, refs, socialMedia } = useGlobal()

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    // const handleClickContact = () => {
    //     scrollTo("contact");
    // }

    return (
        <section
            ref={refs[home.id]}
            className="max-w-[1350px] mx-auto flex items-center justify-between mt-[200px] relative"
        >
            <div
                className="grid h-full gap-10 w-[45%] self-start mt-[30px] z-100"
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
                className="w-[500px] z-0"
                data-aos="fade-left"
                data-aos-delay="200"
            />
            
            <div className='absolute text-white bottom-[50px] z-10 left-0 grid gap-6'
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