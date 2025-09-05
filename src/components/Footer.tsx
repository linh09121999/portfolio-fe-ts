import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import SocialMedia from "./SocialMedia"

const Footer: React.FC = () => {
    const { footerContent, fullname, socialMedia } = useGlobal()
    return (
        <footer className='w-[1350px] mx-auto mt-[50px] pb-[20px]'>
            <div className='relative after:absolute after:h-px after:bottom-[-12px] after:w-full after:bg-gradient-to-r after:from-white/0 after:via-green-200/50 after:to-white/0'>
                <div className='flex items-center mb-[30px] justify-between'>
                    <p className='text-[34px] font-bold text-white/70'>{fullname}</p>
                    <ul className='flex list-none gap-2'>
                        {socialMedia.socialMediaContent.map((social, index) => (
                            <SocialMedia className='hover:text-green-400 css-icon transition-all duration-300 ease-in-out text-white/70' indexProp={index} listLink={social.link} listIcon={social.icon} />
                        ))}
                    </ul>
                </div>

            </div>
            <div className="text-center w-full text-xl text-white/70">
                <p>&copy; {footerContent.yearFull}{' '} {footerContent.footerText}</p>
            </div>
        </footer>
    )
}

export default Footer;