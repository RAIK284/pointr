import React, { Component } from "react";
import { MuiNavbar, NavItem } from 'mui-navbar';
import './styles/homePage.css';
import Button from '@mui/material/Button';
import msgIcon from "./images/header-icons/message.svg";
import trophyIcon from "./images/header-icons/leaderboard.svg";
import starIcon from "./images/face-grin-stars.svg";
class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                    <div id="header-content">
                        <div className="pointr">
                            Pointr
                        </div>
                        <div id="misc-header-content">
                            <Button className='content' id ="login-button" variant="contained" size="large" onClick={()=>{window.location.href='/signin'}}>Log In</Button>
                            <p className="content">Contact</p>
                            <p className="content">About</p>
                        </div>
                    </div>

                    <div className="css-selector">
                        <div id="homeTitleWrapper">
                            <text id="homeTitle">Welcome to Pointr.</text>
                        </div>
                        <div id="homeSubtitleWrapper">
                            <text id="homeSubtitle">The new way to be positive</text>
                        </div>

                        <div id="homeButtonWrapper">
                        <Button id ="homepagebutton" variant="contained" size="large" onClick={()=>{window.location.href='/signup'}}>Sign Up</Button>
                        </div>

                    </div>

                    <div id="rightBoxes">
                            <div className="infoBoxWrapper">
                                <div className="infoBox" style={{background: "#66D8C1"}}>
                                    <img alt="message icon" src={msgIcon} className="icon" id="icon1"></img>
                                </div>
                                <div className="captionLower">Send a motivational note.</div>
                            </div>

                            <div className="infoBoxWrapper">
                            <div className="captionUpper">Earn points for your positivity.</div>
                                <div className="infoBox" style={{background: "#03B795"}}> 
                                    <img alt="trophy icon" src={trophyIcon} className="icon" id="icon2"></img>
                                </div>
                                
                            </div>


                            <div className="infoBoxWrapper">
                                <div className="infoBox" style={{background: "#0064FF"}}>
                                    <img alt ="smiley-face icon" src={starIcon} className="icon" id="icon3"></img>
                                </div>
                                <div className="captionLower">Buy trophies to inspire others!</div>

                            </div>
                    </div>
                    
            </React.Fragment>
                
        );
    }
}

export default HomePage;