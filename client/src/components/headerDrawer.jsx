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
import car from './images/car.jpg'
import { color } from '@mui/system';

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
                    window.location.href="/message"
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
                    },
                    ".inactive": {
                        color: '#FFFFFF',
                        opacity: 0.5

                    },
                    ".active": {
                        color: '#FFFFFF',
                    },

                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', },
                }}
                variant="permanent"
                anchor="left"
                >
                    <img src={car} alt="car"/>
                    <List>
                        {['Profile', 'Messages', 'Store', 'Explore', 'Leaderboard'].map((text, index) => (
                            <div>
                            {(index === this.props.index) 
                                ?  
                                <ListItem button key={text}>
                                    <ListItemText>
                                        <div className="active">
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