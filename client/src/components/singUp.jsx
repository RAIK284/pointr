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
                    <text className="suTitle">
                        Welcome to Pointr!
                    </text>
                    
                    <text className="suSubtitle">
                        Sign up for a free account today.
                    </text>
                        <div className="signUp">
                            Name:
                            <br />
                            <input type="text" placeholder="Enter your name" className="entryRectangle"></input>
                            <br />
                            Email:
                            <br />
                            <input type="text" placeholder="Enter your email address" className="entryRectangle"></input>
                            <br />
                            Username:
                            <br />
                            <input type="text" placeholder="Enter a username" className="entryRectangle"></input>
                            <br />
                            Password:
                            <br />
                            <input type="text" placeholder="Enter a password" className="entryRectangle"></input>
                            <br />
                            
                            <input type="text" placeholder="Confirm password" className="entryRectangle"></input>
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