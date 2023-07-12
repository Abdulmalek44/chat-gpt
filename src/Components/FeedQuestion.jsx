import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';




const FeedQuestions = ({ message }) => {
    return (
        <Box
            display='flex' alignItems='center' justifyContent='flex-start' width='100%' bgcolor="#343541" color='#fff'  >
            <Box display='flex' sx={{ marginX: { md: '20%', xs: '50px' }, my: '20px' }}>
                <Avatar sx={{ width: 30, height: 30, bgcolor: '#202123', color: '#fff', mr: '20px' }} variant="rounded">
                    <PersonIcon />
                </Avatar>
                <Typography variant='p' fontSize='14px' fontStyle='normal' fontWeight='300' lineHeight='30px' component='p'>
                    {message}
                </Typography>
            </Box>
        </Box >
    )
}

export default FeedQuestions