import React, { Component } from "react";
import { MuiNavbar, NavItem } from 'mui-navbar';
class ProfilePage extends Component {
    render() {
        return (
            <MuiNavbar
                logoText="Mui Navbar"
                background="#07cdff"
                navItemPosition="left"
            >
                <NavItem to="/">Home</NavItem>
                <NavItem to="/signin">About</NavItem>
            </MuiNavbar>
        );
    }
}

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default ProfilePage;