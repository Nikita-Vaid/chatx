import React from 'react';
import {
    Box,
    Stack,
    IconButton,
    Typography,
    Button,
    Divider
} from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import {  useTheme } from '@mui/material/styles';
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from "../../components/Search";
import ChatElement from '../../components/ChatElement';

const Chats = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            position: "relative",
            width: 320,
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}>
            <Stack p={3}
                spacing={2}
                sx={{ height: "100vh" }}>
                <Stack
                    alignItems={"center"}
                    justifyContent="space-between"
                    direction="row"
                >
                    <Typography variant="h5">
                        Chats
                    </Typography>
                    <IconButton sx={{ width: "max-content" }}>
                        <CircleDashed />
                    </IconButton>
                </Stack>

                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…" />
                    </Search>
                </Stack>

                <Stack spacing={1}>
                    <Stack direction={"row"}
                        alignItems={"center"}
                        spacing={1.5}>
                        <ArchiveBox size={24} />
                        <Button variant="text">Archive</Button>
                    </Stack>
                    <Divider />
                    <Stack sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
                        <SimpleBarStyle timeout={500} clickOnTrack={false}>
                            <Stack>
                                {/*  */}
                                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                                    Pinned
                                </Typography>
                                {/* Chat Lists */}
                            </Stack>
                            <Stack>
                                {/*  */}
                                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                                    All Groups
                                </Typography>
                                {/* Chat Lists */}
                            </Stack>

                        </SimpleBarStyle>

                    </Stack>
                </Stack>
                <Box
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
                    <SimpleBarStyle timeout={500} clickOnTrack={false}>
                        <Stack spacing={2}>
                            <Typography variant='subtitle2' sx={{ color: "#676767" }}>
                                Pinned
                            </Typography>
                            {ChatList.filter((el) => el.pinned).map((el) => {
                                return <ChatElement key={el.id} {...el} />;
                            })}
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant='subtitle2' sx={{ color: "#676767" }}>
                                All Chats
                            </Typography>
                            {ChatList.filter((el) => !el.pinned).map((el) => {
                                return <ChatElement key={el.id} {...el} />;
                            })}
                        </Stack>
                    </SimpleBarStyle>
                </Box>
            </Stack>
        </Box>
    );
};

export default Chats;
