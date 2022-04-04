import React, { Component } from "react";
import './styles/signIn.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';

class SignIn extends Component {
    render() {
        return (
            <React.Fragment >
                
                <body id="SI">
                    <div className="signIn">
                        <text className="label">
                            Log In to Pointr
                        </text>
                        <br />
                        <input type="text" placeholder="Username" className="br1"></input>
                        <br />
                        
                        <br />
                        <input type="text" placeholder="Password" className="br2"></input>
                        <br />
                        <br />
                        <Button variant="contained" size="large" id= "loginbutton" onClick={()=>{window.location.href='/profile'}}>Login</Button>
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