import React from 'react';
import { useGlobal } from '../context/GlobalContext';

const Nav: React.FC = () => {
    const { pages, setSelectNav, selectNav, scrollTo } = useGlobal();
    return (
        <ul className='flex list-none'>
            {pages.map((page, index) => (
                <li key={index} className='mx-[20px]'>
                    <a
                        onClick={() => {
                            setSelectNav(index)
                            scrollTo(page.id)
                        }}
                        className={`size-[24px] relative cursor-pointer transiton-all duration-300 mo-underline after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-green-400 after:transistion-all after:duration-300 after:w-full after:visible after:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-green-400 ${selectNav === index ? "text-green-400 after:w-full after:scale-x-100 ": "text-white "}`}
                    >
                        {page.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav