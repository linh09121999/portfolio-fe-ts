import React from 'react';
import { useGlobal } from '../context/GlobalContext';

const Nav: React.FC = () => {
    const { pages, selectNav, setSelectNav } = useGlobal();
    return (
        <ul className='flex list-none'>
            {pages.map((page, index) => (
                <li key={index} className='mx-[20px]'>
                    <a
                        onClick={() => {
                            setSelectNav(index)
                        }}
                        className={`text-amber-100 size-[24px] relative cursor-pointer transiton-all duration-300 mo-underline after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-amber-100 after:transistion-all after:duration-300 after:w-full after:visible after:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-amber-200 ${selectNav === index ? "after:w-full after:scale-x-100 text-amber-200": ""}`}
                    >
                        {page.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav