import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import './styles/headerDrawer.css'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { alpha } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
// import car from './images/car.jpg'
import ducky from './images/ducky.png'
import { color } from '@mui/system';
import { Hidden } from '@mui/material';
import profileIcon from "./images/header-icons/profile.svg";
import messageIcon from "./images/header-icons/message.svg";
import storeIcon from "./images/header-icons/store.svg";
import exploreIcon from "./images/header-icons/search.svg";
import leaderboardIcon from "./images/header-icons/leaderboard.svg";






// reference: https://github.com/express-labs/pure-react-carousel

const drawerWidth = 240;
class HeaderDrawer extends React.Component {
    render() {
        const changePage  =  (index) =>
        {
            switch(index)
            {
                case 0:
                    window.location.href="/profile"
                    break;
                case 1:
                    window.location.href="/messages"
                    break;
                case 2:
                    window.location.href="/store"
                    break;
                case 3:
                    window.location.href="/explore"
                    break;
                case 4:
                    window.location.href="/leaderboard"
                    break;
                case 5:
                    window.location.href="/settings"
                    break;
                default:
                    break;
            }
        }
        
        return (
            <React.Fragment>
                <Drawer
                sx={{
                    ".MuiPaper-root": {
                        bgcolor: '#0064FF',
                        borderRadius: "0px 25px 25px 0px"
                        
                    },
                    ".inactive": {
                        color: '#FFFFFF',
                        opacity: 0.5

                    },
                    ".active": {
                        color: '#FFFFFF',
                    },
                    ".settings": {
                        color: '#FFFFFF',
                        opacity: 0.5
                    },

                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', },
                }}
                variant="permanent"
                anchor="left"
                >
                    <img src={ducky} alt="ducky" id="profilePictureMask"/>
                    <List>
                        <ListItemText className="username">
                            <div className="username">
                                @username
                            </div>
                        </ListItemText>
                        {['Profile', 'Messages', 'Store', 'Explore', 'Leaderboard', 'Settings'].map((text, index) => (
                            <div className="pageButtons">
                            {(index === this.props.index && text !== 'Settings') 
                                ?  
                                <ListItem button key={text}>
                                    <ListItemText>
                                        <div className="active">
                                            {text}
                                        </div>
                                    </ListItemText>
                                </ListItem>
                                : 
                                <div>
                                    {(text === 'Settings')
                                    ?
                                    <ListItem button key={text}>
                                        <ListItemText className="settings" onClick={()=>{changePage(index)}}>
                                            <div className="settings">
                                                {text}
                                            </div>
                                        </ListItemText>
                                    </ListItem>
                                    :
                                    <ListItem button key={text}>
                                        <ListItemText className="inactive" onClick={()=>{changePage(index)}}>
                                            <div className="inactive">
                                                {text}
                                            </div>
                                        </ListItemText>
                                    </ListItem>
                                }
                                </div>
                            }
                            </div>
                            ))}
                        </List>
                </Drawer>
            </React.Fragment>
        );
    }
  }

  HeaderDrawer.propTypes = {
    index: PropTypes.number.isRequired,
};

  export default HeaderDrawer;