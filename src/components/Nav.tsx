import React, { type JSX } from 'react';
import { useGlobal } from '../context/GlobalContext';

type navProps = {
    classNameUl?: string;
    iconNext?: JSX.Element;
    classNameA?: string;
    classNameAActive?: string;
    classNameTitle?: string
}

const Nav: React.FC<navProps> = ({
    classNameUl,
    iconNext,
    classNameA,
    classNameAActive,
    classNameTitle
}) => {
    const { pages, setSelectNav, selectNav, scrollTo } = useGlobal();
    return (
        <ul className={classNameUl}>
            {pages.map((page, index) => (
                <li key={index} className='mx-[20px]'>
                    <a
                        onClick={() => {
                            setSelectNav(index)
                            scrollTo(page.id)
                        }}
                        className={`${classNameA} ${selectNav === index ? `${classNameAActive}` : "text-white "}`}
                    >
                        <div className={classNameTitle}>{iconNext} {page.title}</div>
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default Nav