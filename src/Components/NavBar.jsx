import { AppBar, Stack, Toolbar, IconButton, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Add } from '@mui/icons-material';

const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const NavBar = () => {

    return (
        <Stack direction='row' sx={{ display: { xs: 'block', md: 'none' }, position: 'sticky', zIndex: '1', top: '0' }} >
            <AppBar position='sticky'>
                <StyleToolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <IconButton>
                        <Add />
                    </IconButton>
                </StyleToolbar>
            </AppBar>
        </Stack >
    );
}


export default NavBar