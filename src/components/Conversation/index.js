import React from 'react';
import { Stack, Box, useTheme } from "@mui/material";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
    const theme = useTheme(); // Add this line to access the theme

    return (
        <Stack
            height={"100%"}
            maxHeight={"100vh"}
            width={"auto"}>
            {/* chat header*/}
            <Header/>

            {/* msg */}
            <Box
                width={"100%"}
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: theme.palette.mode === "light" ? '#ccc' : '#555',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: theme.palette.mode === "light" ? '#bbb' : '#444',
                    },
                }}>
                <Message/>        
            </Box>
            
            {/* Chat Footer*/}
            <Footer/>
        </Stack>
    )
}

export default Conversation;
