import { NavBar, SideBar, Feed } from '../Components/index'
import { Box, Stack } from '@mui/material'

const Home = (props) => {

    return (
        <>
            <Box>
                <NavBar />
                <Stack direction='row' justifyContent='space-between' width='100%' >
                    <SideBar />
                    <Feed />
                </Stack>
            </Box>
        </>
    )
}

export default Home