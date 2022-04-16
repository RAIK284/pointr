import React, { Component } from "react";
import { MuiNavbar, NavItem } from 'mui-navbar';
import './styles/homePage.css';
import Button from '@mui/material/Button';
import homePagePic from "./images/header-icons/homePagePic.jpeg";
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

                    </div>

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