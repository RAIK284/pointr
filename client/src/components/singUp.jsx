import React, { Component } from "react";
import './styles/signUp.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

class SignUp extends Component {
    render() {
        return (
            <React.Fragment >
                
                <body id="SU">
                    <div className="rightRectangle"></div>
                        <div className="signUp">
                            Name:
                            <br />
                            <input type="text" placeholder="Enter your name"></input>
                            <br />
                            Email:
                            <br />
                            <input type="text" placeholder="Enter your email address"></input>
                            <br />
                            Username:
                            <br />
                            <input type="text" placeholder="Enter a username"></input>
                            <br />
                            Password:
                            <br />
                            <input type="text" placeholder="Enter a password"></input>
                            <br />
                            
                            <input type="text" placeholder="Confirm password"></input>
                            <br />
                            <br />
                            <Button id="signupbutton" variant="contained" size="large" onClick={()=>{window.location.href='/profile'}}>Sign Up</Button>
                        </div>
                    
                </body>
            </React.Fragment>
        );
    }
}

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default SignUp;