import {
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Stack
} from "@mui/material";
import React from "react";
import { CallElement } from "../../components/CallElement";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { MembersList } from "../../data";

// Transition component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose, list }) => { // Receive 'list' as a prop
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
        >
            <DialogTitle>Start Call</DialogTitle>
            <DialogContent>
                <Stack spacing={3}>
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
                    {/*  Call */}
                    {MembersList.map((el) => {
                        return <CallElement {...el} />;
                    })}
                    <CallElement />
                </Stack>


            </DialogContent>
        </Dialog>
    )
}

export default StartCall;
