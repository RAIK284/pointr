import React, { Component } from "react";
import { MuiNavbar, NavItem } from 'mui-navbar';
import './styles/homePage.css';
import Button from '@mui/material/Button';
import homePagePic from "./images/header-icons/homePagePic.jpeg";
import { color } from "@mui/system";
import msgIcon from "./images/header-icons/message.svg";
import trophyIcon from "./images/header-icons/leaderboard.svg";
import starIcon from "./images/face-grin-stars.svg";
class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
               

                    <MuiNavbar
                        logoText="Pointr"
                        background="#0064FF"
                        navItemPosition="right"
                    >
                        <NavItem to="/">Contact</NavItem>
                        <NavItem to="/">About</NavItem>
                        <NavItem to="/signin">Log In</NavItem>
                    </MuiNavbar> 

                    <div id="titleHeader">
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
                                    <img src={msgIcon} className="icon" id="icon1"></img>
                                </div>
                                <div className="captionLower">Send a motivational note.</div>
                            </div>

                            <div className="infoBoxWrapper">
                            <div className="captionUpper">Earn points for your positivity.</div>
                                <div className="infoBox" style={{background: "#03B795"}}> 
                                    <img src={trophyIcon} className="icon" id="icon2"></img>
                                </div>
                                
                            </div>


                            <div className="infoBoxWrapper">
                                <div className="infoBox" style={{background: "#0064FF"}}>
                                    <img src={starIcon} className="icon" id="icon3"></img>
                                </div>
                                <div className="captionLower">Buy trophies to inspire others!</div>

                            </div>
                    </div>
                    
{/*                 <div class="flex-container">
                    <div id="rightBoxes">

                        <div className="infoBoxWrapperLeft">
                            <text className="infoBox">
                                Send a motivational note.
                            </text>
                        </div>

                        <div className="infoBoxWrapperRight"> 
                            <text className="infoBox">
                                Earn points for your positivity.
                            </text>
                        </div>

                        <div className="infoBoxWrapperLeft">
                            <text className="infoBox">
                                Buy trophies to inspire others!
                            </text>
                        </div>

                    </div>
                
                <div id="leftContent">
                    <div >
                        <text id="easyText">It's easy:</text>
                    </div>

                    <div>
                        <text id="startedText">Get started today.</text>
                    </div>

                    <div>
                        <Button id ="homepagebutton" variant="contained" size="large" onClick={()=>{window.location.href='/signup'}}>Sign Up</Button>
                    </div>

                </div>
            </div>  */}  


                
            </React.Fragment>
                
        );
    }
}

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default HomePage;


{/* <React.Fragment>
<MuiNavbar
                    logoText="Pointr"
                    background="#0064FF"
                    navItemPosition="right"
                >
                    <NavItem to="/">Contact</NavItem>
                    <NavItem to="/">About</NavItem>
                    <NavItem to="/signin">Log In</NavItem>
                </MuiNavbar> 
                
                <div id="body">
                    <div id="pictureWrapper">
                    <img src={homePagePic} id="homePagePic"/>
                    </div>
                    <div id='column-right'>
                        <h1>Welcome to <br /> Pointr.</h1>
                        <h2>The new way to be<br />rewarded for positivity</h2>
                        <input type="text" className="emailentry" placeholder="Enter your email address..."></input>
                        <Button id ="homepagebutton" variant="contained" size="large" onClick={()=>{window.location.href='/signup'}}>Sign Up</Button>
                    </div>
                </div>
                
                
            </React.Fragment> */}