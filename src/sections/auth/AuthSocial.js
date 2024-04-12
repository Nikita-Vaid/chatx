import { Divider, IconButton, Stack } from '@mui/material';
import { GoogleLogo, GithubLogo, TwitterLogo } from 'phosphor-react'; // Ensure correct import paths
import React from 'react';

const AuthSocial = () => {
    return (
        <div>
            <Divider
                sx={{
                    my: 2.5,
                    typography: 'overline',
                    color: 'text.disabled',
                    '&::before, ::after': {
                        borderTopStyle: 'dashed',
                    },
                }}
            ></Divider>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <IconButton>
                    <GoogleLogo color="#DF3E30" />
                </IconButton>

                <IconButton color="inherit" >
                    <GithubLogo />
                </IconButton>

                <IconButton>
                    <TwitterLogo color="#1C9CEA" />
                </IconButton>
            </Stack>

        </div>
    );
}

export default AuthSocial;
