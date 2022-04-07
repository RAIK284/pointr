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
import Carousel from './carousel.jsx';
import car from './images/car.jpg';
import ducky from './images/ducky.png'
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

import './styles/profilePage.css';


const drawerWidth = 240;
class ProfilePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <div id="header">
                <p id="welcome">
                    Welcome, Name.
                </p>
                <p id="sub">
                    Hi! I'm name, and I like to hobby! Message me your favorite quote.
                </p>
            </div>

            <HeaderDrawer index={0} />

            <div id="content">
                <br />
                <br />
                <h2>
                    Leaderboard Rank 1
                </h2>
                <br />
                <br />
                <Carousel 
                    height={300} 
                    width={300} 
                    numslides={2} 
                    images={[car, ducky]}
                    visibleSlides={1}
                />
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