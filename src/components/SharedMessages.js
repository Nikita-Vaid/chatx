import React from "react";
import { Box, Stack, Typography, IconButton, Tabs, Tab, Grid } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "../redux/store";
import { UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/* Header */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                }}>
                    <Stack sx={{ height: "100%", p: 2 }} direction={"row"} alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"));
                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">
                            Shared Messages
                        </Typography>
                    </Stack>
                </Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                {/* Body */}
                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "scroll"
                    }}
                    p ={3}
                    spacing={value === 1 ? 1 : 3}>
                    {(() => {
                        switch (value) {
                            case 0:
                                // Render images
                                return (
                                    <Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                                            <Grid item key={el} xs={4}>
                                                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                );
                            case 1:
                                // Render link
                                return SHARED_LINKS.map((el) => <LinkMsg el={el} />)

                            case 2:
                                // Render docs
                                return SHARED_DOCS.map((el) => <DocMsg el={el} />)
                            default:
                                break;
                        }
                    })()}
                </Stack>
            </Stack>
        </Box>
    );
}

export default SharedMessages;
