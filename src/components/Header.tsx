import React, { useEffect, useState } from 'react';
import Nav from "./Nav";

import type { SxProps, Theme } from "@mui/material/styles";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider
} from '@mui/material';

import AOS from "aos";
import "aos/dist/aos.css";

import { useGlobal } from '../context/GlobalContext';

const Header: React.FC = () => {
    const sxPaperPropsDrawer: SxProps<Theme> = {
        sx: {
            background: 'color-mix(in oklab, var(--color-black) 20%, transparent)',
            color: 'var(--color-gray-200)',
            backdropFilter: 'blur(10px)'
        }
    }

    const sxBox1Drawer: SxProps<Theme> = {
        width: 200,
    }

    const sxBox2Drawer: SxProps<Theme> = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        cursor: 'pointer'
    }

    const sxIconButton: SxProps<Theme> = {
        color: 'white',
        fontSize: '2rem'
    }

    const sxDivider: SxProps<Theme> = {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    }

    const sxListItemDrawer: SxProps<Theme> = {
        padding: '12px 24px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: "var(--color-green-400)"
        },
        '& .MuiListItemIcon-root': {
            color: 'inherit',
            minWidth: '40px'
        }
    }

    const sxListItemIcon: SxProps<Theme> = {
        fontSize: '1.2rem'
    }

    const sxPrimaryTypographyProps = {
        fontSize: '1rem',
        fontWeight: 'medium',
        transition: 'all 0.3s ease',
    }

    const { name, isMobile, icons, pages, setSelectNav, scrollTo } = useGlobal()

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    return (
        <header
            className="fixed z-1000 w-full bg-black/40 backdrop-blur-[10px] py-[15px] px-[40px] border-b-[1px] border-white/10 "
            data-aos="fade-down"
            data-aos-delay="200"
        >
            <div className='max-w-[1350px] mx-auto flex justify-between items-center'>
                <p className='text-[34px] font-bold text-green-400'>{name}</p>
                {isMobile ?
                    (
                        <>
                            <button className="text-3xl text-green-400"
                                onClick={toggleDrawer(true)}
                            >
                                {icons.iconMenu}
                            </button>
                            <Drawer
                                anchor="right"
                                open={open}
                                onClose={toggleDrawer(false)}
                                PaperProps={sxPaperPropsDrawer}
                            >
                                <Box sx={sxBox1Drawer}>
                                    <Box sx={sxBox2Drawer}>
                                        <IconButton onClick={toggleDrawer(false)} sx={sxIconButton}>
                                            {icons.iconClose}
                                        </IconButton>
                                    </Box>

                                    <Divider sx={sxDivider} />

                                    <List>
                                        {pages.map((page, index) => (
                                            <ListItem
                                                component="button"
                                                key={index}
                                                onClick={() => {
                                                    setSelectNav(index)
                                                    scrollTo(page.id)
                                                    setOpen(false)
                                                }}
                                                sx={sxListItemDrawer}
                                            >
                                                <ListItemIcon sx={sxListItemIcon}>{page.icon}</ListItemIcon>
                                                <ListItemText
                                                    primary={page.title}
                                                    primaryTypographyProps={sxPrimaryTypographyProps}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                    )
                    :
                    (
                        <Nav
                            classNameUl='flex list-none'
                            classNameA='size-[24px] relative cursor-pointer transiton-all duration-300 mo-underline after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-green-400 after:transistion-all after:duration-300 after:w-full after:visible after:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-green-400'
                            classNameAActive='text-green-400 after:scale-x-100'
                        />
                    )}
            </div>

        </header>
    )
}

export default Header
