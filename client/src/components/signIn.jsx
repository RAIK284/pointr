import React, { Component } from "react";
import './styles/signIn.css';
import Button from '@mui/material/Button';
<<<<<<< Updated upstream
import {validateUser} from './scripts/signInValidation.js';
import { response } from "express";
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

let response1 = null;
=======
import {validateUser, getUserDataObject} from './scripts/signInValidation.js';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

let userDataObj = '';
>>>>>>> Stashed changes

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {email: ''}
    }

    render() {
        const checkresponse = async (response) => {
            response1 = response
            console.log(response)
            if (response !== -1) {
                //Get the user data.
                userDataObj = getUserDataObject(this.email)
                //Switch to profile page.
                window.location.href='/profile'
                console.log("Successul!");
                console.log(response);
            } else {
                //Display error and do nothing.
                console.log("Wrong!");
                console.log(response);
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
                        <input type="text" placeholder="Username" id="email" value = {this.state.email} className="br1" onChange={(e)=>{this.setState({email: e.target.value})}}></input>
                        <br />
                        
                        <br />
                        <input type="text" placeholder="Password" id="password" className="br2"></input>
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

<<<<<<< Updated upstream

export default SignIn;
export { response1 };
=======
export default SignIn;
export { userDataObj };
>>>>>>> Stashed changes
