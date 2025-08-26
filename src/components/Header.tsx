import React, { useEffect } from 'react';
import Nav from "./Nav";
import SocialMedia from "./SocialMedia"

import AOS from "aos";
import "aos/dist/aos.css";

import { useGlobal } from '../context/GlobalContext';

const Header: React.FC = () => {
    const { name } = useGlobal()

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    return (
        <header
            className="fixed z-1000 w-full  bg-white/10 backdrop-blur-[10px] py-[10px] px-[40px] border-b-[1px] border-white/10 "
            data-aos="fade-down"
            data-aos-delay="200"
        >
            <div className='w-[1350px] mx-auto flex justify-between items-center'>
                <p className='text-[34px] font-bold text-green-200'>{name}</p>
                <Nav />
                <SocialMedia />
            </div>

        </header>
    )
}

export default Header
