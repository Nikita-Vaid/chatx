import React, { useState } from "react";
import {
    Box,
    Stack,
    Typography,
    Link,
    IconButton,
    Divider,
}
    from "@mui/material";

import {
    Search,
    SearchIconWrapper,
    StyledInputBase
}
    from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {

    const theme = useTheme();

    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    return (
        <>
            <Stack direction="row" sx={{ width: "100%" }}>
                {/* Left */}
                <Box sx={{
                    overflowY: "hidden", // Changed overflowY to "hidden"

                    height: "100vh",
                    width: 320,
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? "#F8FAFF"
                            : theme.palette.background,

                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}>
                    <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                        <Stack
                            alignItems={"center"}
                            justifyContent="space-between"
                            direction="row"
                        >
                            <Typography variant="h5">Call Logs</Typography>
                        </Stack>
                        {/* Search */}
                        <Stack sx={{ width: "100%" }}>
                            <Search>
                                <SearchIconWrapper>
                                    <MagnifyingGlass color="#709CE6" />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                        </Stack>
                        <Stack justifyContent={"space-between"}
                            alignItems={"center"}
                            direction={"row"}>
                            <Typography variant="subtitle2" sx={{}} component={Link}>
                                Start Coversation
                            </Typography>
                            <IconButton onClick={() => {
                                setOpenDialog(true);
                            }}>
                                <Plus style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        <Stack spacing={3} sx={{ flexGrow: 1, height: "100%" }}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack spacing={2.4}>
                                    {/*  */}

                                    {/* Call Logs*/}

                                    {CallLogs.map((el) => <CallLogElement {...el} />)}

                                </Stack>
                            </SimpleBarStyle>

                        </Stack>

                    </Stack>

                </Box>
                {/* Right */}

            </Stack>
            {openDialog &&
                <StartCall open={openDialog} handleClose={handleCloseDialog} />}
        </>

    );
};

export default Call;
