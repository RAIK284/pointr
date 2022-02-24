import React, { Component } from "react";
import './styles/signIn.css';
//import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

class SignIn extends Component {
    render() {
        return (
            <React.Fragment >
                <body className="signIn">
                    Username:
                    <br />
                    <input type="text" placeholder="Input Username Here"></input>
                    <br />
                    Password:
                    <br />
                    <input type="text" placeholder="Input Password Here"></input>
                </body>
            </React.Fragment>
        );
    }
}

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default SignIn;