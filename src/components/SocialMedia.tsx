import React, { type JSX } from 'react';

type socialMediaProps = {
    indexProp: number;
    listLink: string;
    listIcon?: JSX.Element;
    listTitle?: string;
    className?: string
}

const SocialMedia: React.FC<socialMediaProps> = ({
    indexProp = 0,
    listIcon = <></>,
    listLink = "",
    listTitle = "",
    className = ""
}) => {
    return (
        <li key={indexProp}>
            <a href={`${listLink}`}
                className={className}>
                {listIcon}{listTitle}
            </a>
        </li>
    )
}

export default SocialMedia