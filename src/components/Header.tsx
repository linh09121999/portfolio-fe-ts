import React from 'react';
import Nav from "./Nav";
import SocialMedia from "./SocialMedia"

import { useGlobal } from '../context/GlobalContext';

const Header: React.FC = () => {
    const { name } = useGlobal()
    return (
        <header className='flex justify-between items-center bg-white/10 blue-[4px] py-[10px] px-[40px] mt-[15px] rounded-[20px] border-[1px] border-white/10'>
            <p className='text-[34px] font-bold text-amber-100'>{name}</p>
            <Nav />
            <SocialMedia />
        </header>
    )
}

export default Header