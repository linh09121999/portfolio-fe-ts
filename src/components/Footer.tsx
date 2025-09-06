import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import SocialMedia from "./SocialMedia"
import Nav from './Nav';

const Footer: React.FC = () => {
    const { footerContent, fullname, socialMedia, home, icons } = useGlobal()
    return (
        <footer className='bg-black/60'>
            <div className='max-w-[1350px] mx-auto mt-[30px] pb-[20px] max-[1350px]:px-4'>
                <div className='relative after:absolute after:h-px after:bottom-[-12px] after:w-full after:bg-gradient-to-r after:from-white/0 after:via-green-200/50 after:to-white/0'>
                    <div className='grid items-center mb-[30px] grid-col-1 md:grid-cols-2 gap-10'>
                        <div className='max-w-[500px] grid gap-6 max-md:max-w-full'>
                            <p className='text-3xl font-bold text-white/70 max-md:text-center'>{fullname}</p>
                            <p className="text-white/50 text-xl max-md:text-center">{home.slogan}</p>
                            <ul className='flex gap-4 max-md:justify-center'>
                                {socialMedia.socialMediaContent.map((social, index) => (
                                    <SocialMedia
                                        className='text-xl size-2xl hover:text-green-400 css-icon transition-all duration-300 ease-in-out text-white/70 w-[40px] h-[40px] rounded-full bg-blue'
                                        indexProp={index} listLink={social.link} listIcon={social.icon}
                                        classNameIcon='css-icon backdrop-blur-[4px] text-white bg-green-400/15 size-[40px] rounded-full justify-items-center content-center transition-all duration-500 ease hover:bg-green-400 hover:text-black'
                                    />
                                ))}
                            </ul>
                        </div>
                        <Nav
                            iconNext={icons.iconNext}
                            classNameUl='grid gap-4 md:justify-end grid-col-1 max-md:grid-cols-2 max-md:ml-[20px]'
                            classNameTitle='flex gap-3 items-center transiton-all duration-300 transform hover:translate-x-2'
                            classNameA='size-[24px] cursor-pointer transiton-all duration-300 hover:text-green-400 '
                            classNameAActive="text-white"
                        />
                    </div>
                </div>
                <div className="text-center w-full text-xl text-white/70">
                    <p>&copy; {footerContent.yearFull}{' '} {footerContent.footerText}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;