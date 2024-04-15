import React, { useState } from 'react';
import { Stack, Avatar, Box, IconButton, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {CaretLeft, Bell , Image, Info, Key, Keyboard, Lock, Note, PencilCircle} from "phosphor-react";
import {faker} from "@faker-js/faker";
import Shortcuts from '../../sections/settings/Shortcut';

const Settings = () => {
    const theme = useTheme();
    const [openShortcuts, setOpenShortcuts] = useState(false);

    const hanleOpenShortcuts = () =>{
        setOpenShortcuts(true);
    }
    const hanleCloseShortcuts = () =>{
        setOpenShortcuts(false);
    }


    const List =[
        {
            key:0,
            icon: <Bell size={20}/>,
            title: "Notifications",
            onClick: () =>{},
        },
        {
            key:1,
            icon: <Lock size={20}/>,
            title: "Privacy",
            onClick: () =>{},
        },
        {
            key:2,
            icon: <Key  size={20}/>,
            title: "Security",
            onClick: () =>{},
        },
        {
            key:3,
            icon: <PencilCircle size={20}/>,
            title: "Theme",
            // onClick: hanleOpenTheme,
            onClick: () =>{},
        },
        {
            key:4,
            icon: <Image size={20}/>,
            title: "Chat Wallpaper",
            onClick: () =>{},
        },
        {
            key:5,
            icon: <Note size={20}/>,
            title: "Request Account Info",
            onClick: () =>{},
        },
        {
            key:6,
            icon: <Keyboard size={20}/>,
            title: "Keyboard Shortcuts",
            onClick: hanleOpenShortcuts,
            // onClick: () =>{},
        },
        {
            key:7,
            icon: <Info size={20}/>,
            title: "Help",
            onClick: () =>{},
        },

    ];

    return (
        <>
            <Stack direction={"row"}
                sx={{ width: "100%" }}>
                {/* LeftPanel */}
                {/* LeftPanel */}
                <Box sx={{
                    overflowY: "scroll",
                    height: "100vh",
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" 
                    : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0.25)" // Default background color
                }}>

                    <Stack p={4} spacing={5}>
                        {/* Header */}
                        <Stack direction={"row"}
                        alignItems={"center"}
                        spacing={3}>
                            <IconButton >
                               <CaretLeft size={24} color={"#4B4B4B"}/>
                            </IconButton>
                            <Typography variant ="h6">
                             Settings
                            </Typography>

                        </Stack>
                        {/* Profile */}
                        <Stack direction={"row"}
                        spacing={3}>
                            <Avatar 
                            sx={{height: 56, width: 56}} src={faker.image.avatar()} 
                            alt={faker.name.fullName()}/>
                            <Stack spacing={0.5}>
                                <Typography variant="article">
                                    {faker.name.fullName()}
                                </Typography>
                                <Typography variant="body2">
                                    {faker.random.words()}
                                </Typography>

                            </Stack>

                        </Stack>
                        {/* List of options */}
                        <Stack spacing={4}>
                            {List.map(({key, icon, title, onClick}) => <>
                            <Stack  spacing={2}
                            sx={{cursor: "pointer"}} onClick={onClick}>
                                <Stack direction={"row"}
                                spacing={2} 
                                alignItems={"center"}>
                                    {icon}
                                    <Typography variant="body2">{title}</Typography>

                                </Stack>
                                {key !== 7 && <Divider/> }
                            </Stack>

                            </>
                        )}

                        </Stack>

                    </Stack>
                </Box>
                {/* Right Panel */}
            </Stack>
            {openShortcuts && <Shortcuts  open={openShortcuts} handleClose={hanleCloseShortcuts}/> }
            
        </>
    )
}
export default Settings;


// day 6