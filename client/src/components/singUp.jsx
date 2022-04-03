import React, { Component } from "react";
import './styles/signUp.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

class SignUp extends Component {
    render() {
        return (
            <React.Fragment >
                
                <body id="SU">
                <div id="main-container">
                  
                    <div id="right-container">
                    
                        <div className="suTitle">
                            <text>
                            Welcome to Pointr!
                            </text>
                        </div>
                    
                        <div className="suSubtitle">
                            <text>
                            Sign up for a free account today.
                            </text>
                        </div>
                

                        <div id="info-container">
                        <form>
                            
                                <label for="name" className="entryLabel">Name</label>
                                <br />
                                <input type="text" placeholder="Enter your name" className="entry" required></input>
                                <br />
                                <label for="email"  className="entryLabel">Email</label>
                                <br />
                                <input type="text" placeholder="Enter your email address" className="entry"  required></input>
                                <br />

                                <label for="username"  className="entryLabel">Username</label>
                                <br />
                                <input type="text" placeholder="Enter a username" className="entry" required></input>
                                <br />
                                <label for="password"  className="entryLabel">Password</label>
                                <br />
                                <input type="text" placeholder="Enter a password" className="entry" required></input>
                                <br />
                                <input type="text" placeholder="Confirm password" className="entry"  requried></input>
                                <br />
                                <br />
                                <Button id="signupbutton" variant="contained" size="large" onClick={()=>{window.location.href='/profile'}}>Sign Up</Button>
                                </form>
                            </div>
                            
                        
                        </div>

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