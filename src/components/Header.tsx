import React, { useEffect } from 'react';
import Nav from "./Nav";

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
            className="fixed z-1000 w-full bg-black/20 backdrop-blur-[10px] py-[10px] px-[40px] border-b-[1px] border-white/10 "
            data-aos="fade-down"
            data-aos-delay="200"
        >
            <div className='w-[1350px] mx-auto flex justify-between items-center'>
                <p className='text-[34px] font-bold text-green-400'>{name}</p>
                <Nav
                    classNameUl='flex list-none'
                    classNameA='size-[24px] relative cursor-pointer transiton-all duration-300 mo-underline after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-green-400 after:transistion-all after:duration-300 after:w-full after:visible after:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-green-400' 
                    classNameAActive='text-green-400 after:scale-x-100'
                    />
            </div>

        </header>
    )
}

export default Header
