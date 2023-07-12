import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


const PluginsCard = ({ title }) => {
    return (

        <Card sx={{ margin: '5px', width: { xs: '80%', md: '200px' }, bgcolor: '#3e3f4b' }}  >
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant='p' component='p' fontSize='12px' fontWeight='500' lineHeight='16px' >
                    {title.text}
                </Typography>
            </CardContent>
        </Card >

    )
}

export default PluginsCard