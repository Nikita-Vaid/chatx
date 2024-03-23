import React from "react";
import { Box, Stack } from "@mui/material"
import { Chat_History } from "../../data";

const Message = () => {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            //Timeline
                            break;
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    //img msg
                                    break;
                                case "doc":
                                    //Doc msg
                                    break;
                                case "link":
                                    //Link msg
                                    break;
                                case "reply":
                                    // reply msg
                                    break;

                                default:
                                    //text msg
                                    break;
                            }
                            break;

                        default:
                            return <></>;

                    }
                })}

            </Stack>

        </Box>
    )
}
export default Message;