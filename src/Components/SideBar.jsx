import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material"
import { sidebarConversation, sidebarResources } from '../utils/constants'
import { Add } from "@mui/icons-material"

const drawerWidth = 240;

const SideBar = () => {
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: drawerWidth, },
                    display: { xs: 'none', md: 'block' },
                    background: '#fff',
                }}
                variant="permanent"
                anchor="left"
            >
                <Paper sx={{ background: '#202123', height: "100vh", display: 'flex', flexDirection: 'column' }}>

                    <Button variant="outlined" sx={{ margin: '10px' }} color="inherit">
                        <Add sx={{ marginRight: '10px' }} />
                        New chat
                    </Button>
                    <Divider />
                    <List sx={{ flexGrow: 1 }}>
                        {sidebarConversation.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {sidebarResources.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Drawer >
        </>
    )
}

export default SideBar