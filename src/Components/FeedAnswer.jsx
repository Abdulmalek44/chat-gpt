import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../Icons/logo.svg'
import Typed from 'react-typed';



const FeedAnswer = ({ message }) => {
    return (
        <Box
            display='flex' alignItems='center' justifyContent='flex-start' width='100%' bgcolor="#444654" color='#fff'  >
            <Box display='flex' sx={{ marginX: { md: '20%', xs: '50px' }, my: '20px' }}>
                <Avatar sx={{ width: 30, height: 30, bgcolor: 'transparent', mr: '20px' }} variant="square" src={logo}>

                </Avatar>
                <Typography variant='p' fontSize='14px' fontStyle='normal' fontWeight='300' lineHeight='30px' component='p'>
                    <Typed
                        strings={[message]}
                        typeSpeed={20}
                        showCursor={false}
                    />
                </Typography>
            </Box >
        </Box>
    )
}

export default FeedAnswer