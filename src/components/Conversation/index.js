import React from 'react';
import { Stack, Box } from "@mui/material";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

const Conversation = () => {
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
                }}>
                <Message/>        
            </Box>
            
            {/* Chat Footer*/}
            <Footer/>
        </Stack>
    )
}

export default Conversation;
