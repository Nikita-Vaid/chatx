import React from "react";
import { Box, IconButton, InputAdornment, Stack, Input } from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import { useTheme, styled } from "@mui/material/styles";

const StyledInput = styled(Input)(({ theme }) => ({
    borderRadius: '20px',
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f2f5',
    padding: '10px',
    '& .MuiInputBase-input': {
        fontSize: '14px',
        color: theme.palette.text.primary,
    },
}));

const ChatInput =() =>{
    return(
        <StyledInput
                    fullWidth
                    placeholder="write a message..."
                    variant="filled"
                    disableUnderline
                    startAdornment={<InputAdornment position="start">
                        <IconButton>
                            <LinkSimple />
                        </IconButton>
                    </InputAdornment>}
                    endAdornment={<InputAdornment position="end">
                        <IconButton>
                            <Smiley />
                        </IconButton>
                    </InputAdornment>}
                />
    )
}
const Footer = () => {
    const theme = useTheme();
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
                <Stack>
                     {/* ChatInput */}
                     <ChatInput/>
                
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

export default Footer;