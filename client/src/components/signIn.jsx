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
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
                        </style>
                    <div className="signIn">
                        
                        <br />
                        <input type="text" placeholder="Input Username Here" className="br1"></input>
                        <br />
                        
                        <br />
                        <input type="text" placeholder="Input Password Here" className="br2"></input>
                        <br />
                        <br />
                        <Button className="button" variant="contained" size="large" onClick={()=>{window.location.href='/profile'}}>Login</Button>
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