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
                        <form>
                            <div>
                                <label for="name" style={{position: "absolute",left: 'calc(50% - 284.39px/2 + 190.54px)', top: 'calc(50% - 27.8px/2 - 257.1px)'}} className="entryLabel">Name</label>
                                <br />
                                <input type="text" placeholder="Enter your name" className="entryRectangle" style={{position: "absolute", left: `calc(50% - 630px/2 + 345px)`,top: `calc(50% - 46.34px/2 - 205.83px)`}} required></input>
                                <br />
                                
                                <label for="email" style={{position:"absolute", left: 'calc(50% - 284.39px/2 + 190.54px)',top: 'calc(50% - 27.8px/2 - 114.1px)'}} className="entryLabel">Email</label>
                                <br />
                                <input type="text" placeholder="Enter your email address" className="entryRectangle" style={{position:"absolute",left: 'calc(50% - 630px/2 + 345px)',top: 'calc(50% - 46.34px/2 - 67.83px)'}} required></input>
                                <br />

                                <label for="username" style={{position:"absolute", left: 'calc(50% - 284.39px/2 + 190.54px)',top: 'calc(50% - 27.8px/2 + 13.9px)'}} className="entryLabel">Username</label>
                                <br />
                                <input type="text" placeholder="Enter a username" className="entryRectangle" style={{position:"absolute",left: 'calc(50% - 630px/2 + 345px)',top: 'calc(50% - 46.34px/2 + 63.17px)'}} required></input>
                                <br />

                                <label for="password" style={{position:"absolute", left: 'calc(50% - 285.75px/2 + 183.69px)',top: 'calc(50% - 27.8px/2 + 144.9px)'}} className="entryLabel">Password</label>

                                
                                <br />
                                <input type="text" placeholder="Enter a password" className="entryRectangle" style={{position: "absolute", left: 'calc(50% - 633px/2 + 343.5px)',top: 'calc(50% - 46.34px/2 + 192.17px)'}} required></input>
                                <br />
                                <input type="text" placeholder="Confirm password" className="entryRectangle" style={{position: "absolute", left: 'calc(50% - 633px/2 + 343.5px)', top: 'calc(50% - 46.34px/2 + 267.17px)'}} requried></input>
                                <br />
                                <br />
                                <Button id="signupbutton" variant="contained" size="large" onClick={()=>{window.location.href='/profile'}}>Sign Up</Button>
                            </div>
                        </form>
                    
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