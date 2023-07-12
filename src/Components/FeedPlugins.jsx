import { Box, Icon, Stack, Typography, styled } from '@mui/material'
import { feedPlugins } from '../utils/constants'
import PluginsCard from './PluginsCard'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BoltOutlined from "@mui/icons-material/BoltOutlined"

const PluginsBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginBottom: '10px',


})



const FeedPlugins = () => {
    return (
        <>
            <Box>
                <Box >
                    <Typography variant='h3' fontWeight='900' component='h1' marginY='60px' textAlign='center'>
                        ChatGPT
                    </Typography>
                </Box>
                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <PluginsBox >
                        <Box display='flex' alignItems='center' justifyContent='center' sx={{ flexDirection: { xs: 'row', md: 'column' } }}>
                            <Icon sx={{ marginBottom: '10px', md: { marginRight: '10px' } }}>
                                <LightModeOutlinedIcon />
                            </Icon>
                            <Typography variant='p' component='p' fontWeight='500' lineHeight='20px' marginBottom='10px'>
                                Examples
                            </Typography>
                        </Box>
                        {feedPlugins.map((item) => (
                            item.title === 'Examples' && <PluginsCard key={item.id} title={item} />
                        ))}
                    </PluginsBox>
                    <PluginsBox>
                        <Box display='flex' alignItems='center' justifyContent='center' sx={{ flexDirection: { xs: 'row', md: 'column' } }}>
                            <Icon sx={{ marginBottom: '10px', md: { marginRight: '10px' } }}>
                                <BoltOutlined />
                            </Icon>
                            <Typography variant='p' component='p' fontWeight='500' lineHeight='20px' marginBottom='10px'>
                                Examples
                            </Typography>
                        </Box>
                        {feedPlugins.map((item) => (
                            item.title === 'Capabilities' && <PluginsCard key={item.id} title={item} />
                        ))}
                    </PluginsBox>
                    <PluginsBox>
                        <Box display='flex' alignItems='center' justifyContent='center' sx={{ flexDirection: { xs: 'row', md: 'column' } }}>
                            <Icon sx={{ marginBottom: '10px', md: { marginRight: '10px' } }}>
                                <ReportProblemOutlinedIcon />
                            </Icon>
                            <Typography variant='p' component='p' fontWeight='500' lineHeight='20px' marginBottom='10px'>
                                Examples
                            </Typography>
                        </Box>
                        {feedPlugins.map((item) => (
                            item.title === 'Limitations' && <PluginsCard key={item.id} title={item} />
                        ))}
                    </PluginsBox>
                </Stack >
            </Box>
        </>
    )
}

export default FeedPlugins
