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
                        <div>
                            Name:
                            <br />
                            <input type="text" placeholder="Enter your name" className="entryRectangle" style={{position: "absolute", left: `calc(50% - 630px/2 + 345px)`,
top: `calc(50% - 46.34px/2 - 205.83px)`}}></input>
                            <br />
                            Email:
                            <br />
                            <input type="text" placeholder="Enter your email address" className="entryRectangle" style={{position: "absolute",left: `786px`, top: `400px`}}></input>
                            <br />
                            Username:
                            <br />
                            <input type="text" placeholder="Enter a username" className="entryRectangle" style={{position: "absolute",left: `786px`, top: `531px`}}></input>
                            <br />
                            Password:
                            <br />
                            <input type="text" placeholder="Enter a password" className="entryRectangle" style={{position: "absolute",left: `786px`, top: `660px`}}></input>
                            <br />
                            
                            <input type="text" placeholder="Confirm password" className="entryRectangle" style={{position: "absolute",left: `786px`, top: `735px`}}></input>
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