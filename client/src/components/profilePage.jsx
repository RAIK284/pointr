import React, { Component } from "react";
import { MuiNavbar, NavItem } from 'mui-navbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//reference: https://mui.com/components/drawers/

import './styles/profilePage.css';


const drawerWidth = 240;
class ProfilePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                    >
                        <Toolbar>
                            <Typography id="header" variant="h6" noWrap component="div">
                                Welcome, Name<br />
                                Hi, I'm name, and I like to hobby! Message me your favorite quote.
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <List>
                            {['Profile', 'Messages', 'Store', 'Explore', 'Leaderboard'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
                <div id="content">
                    <br />
                    <br />
                    <h2>
                        Leaderboard Rank 1
                    </h2>
                    <br />
                    <br />
                    <p>Slider here!!!(Need to develop!)</p>
                    <br />
                    <br />
                    <p>messaging points 100</p>
                    <p>FUNds 20,000</p>
                </div>
            </React.Fragment>
        );
    }
}

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default ProfilePage;