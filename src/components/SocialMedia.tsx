import React from 'react';
import { useGlobal } from '../context/GlobalContext';

const SocialMedia: React.FC = () => {
    const { socialMedia } = useGlobal();
    return (
        <ul className='flex list-none gap-2'>
            {socialMedia.map((social, index) => (
                <li key={index}>
                    <a href={`${social.link}`}
                    className='hover:text-white text-green-200'>
                        {social.icon}
                    </a>
                </li>
            ))}

        </ul>
    )
}

export default SocialMedia