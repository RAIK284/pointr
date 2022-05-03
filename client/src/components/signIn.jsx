import React, { Component } from "react";
import './styles/signIn.css';
import Button from '@mui/material/Button';
import {validateUser} from './scripts/signInValidation.js';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

class SignIn extends Component {
    render() {
        const checkresponse = async (response) => {
            console.log(response)
            if (response !== -1) {
                //Switch to profile page.
                localStorage.setItem('token', response.token);
                window.location.href='/profile'
                console.log("Successul!");
                console.log(response);
            } else {
                //Display error and do nothing.
                console.log("Wrong!");
                console.log(response);
                alert("Incorrect Username or Password entered!")
            }
        }

        const changePage = async () =>
        {
            validateUser().then(res => checkresponse(res));
        }

        return (
            <React.Fragment >
                
                <body className="css-selectorSI">
                    <div className="signIn">
                        <text className="label">
                            Log In to Pointr
                        </text>
                        <br />
                        <div>
                            <input type="text" data-testid="email" placeholder="Email" id="email" className="br1"></input>
                        </div>
                        <div id="forgot1Wrapper">
                            <Button variant="text" id="forgot">Forgot username?</Button>
                        </div>
                       
                        <br />
                        
                        <br />
                            <input type="password" data-testid="password" placeholder="Password" id="password" className="br2"></input>
                        <div id="forgot2Wrapper">
                            <Button variant="text" id="forgot">Forgot password?</Button>
                        </div>
                        <br />
                        <br />
                        <Button variant="contained" size="large" data-testid="loginbutton" id= "loginbutton" onClick={()=>{changePage()}}>Login</Button>
                    </div>
                </body>
            </React.Fragment>
        );
    }
}

export default SignIn;