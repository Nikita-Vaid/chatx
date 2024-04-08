import React from "react";
import {
    Box,
    IconButton,
    InputAdornment,
    Stack,
    Input
} from "@mui/material";
import{
    Camera,
    File,
    Image,
    LinkSimple,
    PaperPlaneTilt,
    Smiley,
    Sticker,
    User,
} from "phosphor-react";


import { useTheme, styled } from "@mui/material/styles";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Fab } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
// import { Form } from "react-router-dom";

const StyledInput = styled(Input)(({ theme }) => ({
    borderRadius: '20px',
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f2f5',
    padding: '10px',
    '& .MuiInputBase-input': {
        fontSize: '14px',
        color: theme.palette.text.primary,
    },
}));

const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Sticker",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Doument",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact",
    },

];

const ChatInput = ({ setOpenPicker }) => {
    const [openActions, setOpenActions] = React.useState(false);
    return (
        <StyledInput
            fullWidth
            placeholder="write a message..."
            variant="filled"
            disableUnderline
            startAdornment={
                <Stack sx={{ width: 'max-content' }}>
                    <Stack sx={{ position: "relative,", display: openActions ? "inline-block" : "none" }}>
                        {Actions.map ((el) =>(
                            <Tooltip placement="right" title ={el.title}>
                                <Fab sx={{position: "absolute", top : -el.y, backgroundColor: el.color}}>
                               {el.icon}
                                </Fab>
                            </Tooltip>
                            
                        ))}

                    </Stack>
                    <InputAdornment position="start">
                        <IconButton onClick={() =>{
                            setOpenActions((prev) => !prev);
                        }}>
                            <LinkSimple />
                        </IconButton>
                    </InputAdornment>
                </Stack>
            }
            endAdornment={<InputAdornment position="end">
                <IconButton onClick={() => {
                    setOpenPicker((prev) => !prev);
                }}>
                    <Smiley />
                </IconButton>
            </InputAdornment>}
        />
    )
}
const Footer = () => {
    const theme = useTheme();
    // for toggle emoji selector 
    const [openPicker, setOpenPicker] = React.useState(false);
    return (
        <Box
            sx={{
                height: 100,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            }}>

            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={3}
            >
                <Stack sx={{ width: "100%" }}>
                    {/* ChatInput */}
                    <ChatInput setOpenPicker={setOpenPicker} />
                    <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
                        <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
                    </Box>


                </Stack>


                <Box sx={{
                    height: 48,
                    width: 48,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <IconButton>
                        <PaperPlaneTilt color="#fff" />
                    </IconButton>
                </Box>
            </Stack>

        </Box>

    )
}
// day 7
export default Footer;