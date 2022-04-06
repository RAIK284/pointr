import React, { Component } from "react";
import { MuiNavbar, NavItem } from 'mui-navbar';
import './styles/homePage.css';
import Button from '@mui/material/Button';
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
                <div id='column-right'>
                    <h1>Welcome to <br /> Pointr.</h1>
                    <h2>The new way to be<br />rewarded for positivity</h2>
                    <input type="text" className="emailentry" placeholder="Enter your email address..."></input>
                    <Button id ="homepagebutton" variant="contained" size="large" onClick={()=>{window.location.href='/signup'}}>Sign Up</Button>
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