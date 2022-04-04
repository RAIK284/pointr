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
                <div id="link">
                      <text>
                          Already have an account? Log In.
                      </text>
                  </div>
                <div id="main-container">
                 
                    <div id="right-container">
                    
                        <div className="suTitle">
                            <text>
                            Welcome to Pointr!
                            </text>
                        </div>
                    
                        <div className="suSubtitle">
                            <text >
                            Sign up for a free account today.
                            </text>
                        </div>
                

                        <div id="info-container">
                                <label for="name" className="entryLabel">Name</label>
                                
                                <input type="text" placeholder="Enter your name" className="entry" required></input>
                                
                                <label for="email"  className="entryLabel">Email</label>
                                
                                <input type="text" placeholder="Enter your email address" className="entry"  required></input>
                               

                                <label for="username"  className="entryLabel">Username</label>
                               
                                <input type="text" placeholder="Enter a username" className="entry" required></input>
                                
                                <label for="password"  className="entryLabel">Password</label>
                                <input type="text" placeholder="Enter a password" className="entry" required></input>
                                <input type="text" placeholder="Confirm password" className="entry"  requried></input>
                              
                                
                        </div>
                        
                        <Button id="signupbutton" variant="contained" size="large" onClick={()=>{window.location.href='/profile'}}>Sign Up</Button>
                        
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