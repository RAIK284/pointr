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
                
                <body id="SI">
                    <div className="signIn">
                        <text className="label">
                            Log In to Pointr
                        </text>
                        <br />
                        <input type="text" placeholder="Email" id="email" className="br1"></input>
                        <br />
                        
                        <br />
                        <input type="password" placeholder="Password" id="password" className="br2"></input>
                        <br />
                        <br />
                        <Button variant="contained" size="large" id= "loginbutton" onClick={()=>{changePage()}}>Login</Button>
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


export default SignIn;