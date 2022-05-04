import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import './styles/headerDrawer.css'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ducky from './images/ducky.png'
import profileIcon from "./images/header-icons/profile.svg";
import messageIcon from "./images/header-icons/message.svg";
import storeIcon from "./images/header-icons/store.svg";
import exploreIcon from "./images/header-icons/search.svg";
import leaderboardIcon from "./images/header-icons/leaderboard.svg";
import blake from "./images/profile-pictures/blake.png"
import wally from "./images/profile-pictures/wally.png"
import prema from "./images/profile-pictures/prema-cropped.png"
import shivani from "./images/profile-pictures/shivani.jpeg"
import keck from "./images/profile-pictures/keck.jpg"
import sam from "./images/profile-pictures/sam.png"
import root from '../root'


let imgsrc = [profileIcon, messageIcon, storeIcon, exploreIcon, leaderboardIcon]

const drawerWidth = 240;
class HeaderDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {image: "ducky"}
    }

    async componentDidMount() {
        await this.getUserInformation()
    }

    async getUserInformation() {
        fetch('http://localhost:8080/api/user/self', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({image: data.profileImg}))
    }
    render() {
        const profileImages = {
            "blake": blake,
            "shivani": shivani,
            "prema": prema,
            "wally": wally,
            "keck": keck,
            "ducky": ducky,
            "sam": sam
        }

        let username = ""

        if(this.state.username)
        {
            username = this.props.username
        }

        else {
            username = localStorage.getItem('username');
        }
            
        // handle clicking on side navbar throughout application
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
                    <img src={profileImages[this.state.image]} alt="ducky" id="profilePictureMask"/>
                    <List>
                        <ListItemText className="username">
                            <div className="username">
                                @{username}
                            </div>
                        </ListItemText>
                        {['Profile', 'Messages', 'Store', 'Explore', 'Leaderboard', 'Settings'].map((text, index) => (
                            <div className="pageButtons">
                            {
                            (index === this.props.index && text !== 'Settings') 
                                ?  
                                <ListItem button key={text}>
                                    <img className="headerIcons" align="Left" alt={text + "icon"} src={imgsrc[index]} />
                                    <ListItemText>
                                        <div className="active" onClick={()=>{changePage(index)}}>
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
                                        <img className="headerIcons" alt={text + "icon"} align="Left" src={imgsrc[index]} />
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
    username: PropTypes.string,
};

  export default HeaderDrawer;