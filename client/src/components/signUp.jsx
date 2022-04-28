import React, { Component } from "react";
import './styles/signUp.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
//import Stack from '@mui/material/Stack';
//import PropTypes from 'prop-types';
import {verifyPassword} from "./scripts/signUpValidation.js"
import {verifyEmail} from "./scripts/signUpValidation.js"
import {verifyName} from "./scripts/signUpValidation.js"
import {verifyUsername} from "./scripts/signUpValidation.js"
import {isExistingUsername} from "./scripts/signUpValidation.js"
import {isExistingEmail} from "./scripts/signUpValidation.js"
import {createUser} from "./scripts/signUpValidation.js"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state =
            {name: '',
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            loading: false}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: event.target.value
        });
    }


    async handleSubmit(event) {
        this.state.loading = true;
        await this.checkUsername()
        await this.checkEmail()
            .then(() => {this.handleData()})
            .then(() => {console.log(this.state)});

    }

    async checkUsername() {
        await isExistingUsername(this.state.username)
            .then(response => {this.setState({isExistingUsername: response})})
            .then(() => {this.setState({loading: false})})
    }

    async checkEmail() {
        await isExistingEmail(this.state.email)
            .then(response => {this.setState({isExistingEmail: response})})
            .then(() => {this.setState({loading: false})})
    }

    handleData() {
        if (verifyUsername(this.state.username) !== true) {
            alert(verifyUsername(this.state.username))
        } else if (this.state.isExistingUsername === 401) {
            alert("Username already in use!");
        } else if (verifyName(this.state.name) !== true) {
            alert(verifyName(this.state.name))
        } else if (verifyEmail(this.state.email) !== true) {
            alert(verifyEmail(this.state.email))
        } else if (this.state.isExistingEmail === 401 ) {
            alert("Email already in use!");
        } else if (verifyPassword(this.state.password) !== true) {
            alert(verifyPassword(this.state.password))
        } else if (this.state.password !== this.state.passwordConfirmation) {
            alert("Passwords do not match!")
        } else {
            createUser(this.state.name, this.state.username, this.state.email, this.state.password).then(() => {
                window.location.href='/profile'
            })
        }
    }

    render() {
        return (
            <React.Fragment >
                <div id="main-container">
                    <div id="toLoginWrapper">
                        <text id="loginCaption">Already have an account?</text>
                  <Button variant="text" id="toLogin" onClick={()=>{window.location.href='/signin'}}>Log In Here.</Button>
                    </div>
                    <div id="right-container">
                    
                        <div className="suTitle">
                            <p>
                            Welcome to Pointr!
                            </p>
                        </div>
                    
                        <div className="suSubtitle">
                            <p >
                            Sign up for a free account today.
                            </p>
                        </div>
                

                        <div id="info-container">
                                <label  className="entryLabel">Name</label>
                                
                                <input type="text" data-testid="name-input" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" className="entry" required></input>
                                
                                <label className="entryLabel">Email</label>
                                
                                <input type="text" name="email" data-testid="email-input" alue={this.state.email} onChange={this.handleChange} placeholder="Enter your email address" className="entry"  required></input>

                                <label className="entryLabel">Username</label>
                               
                                <input type="text" name="username" data-testid="username-input" value={this.state.username} onChange={this.handleChange} placeholder="Enter a username" className="entry" required></input>
                                
                                <label className="entryLabel">Password</label>
                                <input type="password" name="password"  data-testid="password-input" value={this.state.password} onChange={this.handleChange} placeholder="Enter a password" className="entry" required></input>
                                <input type="password" name="passwordConfirmation" data-testid="passwordConfirmation-input" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Confirm password" className="entry"  required></input>
                        </div>

                        <Button id="signupbutton" variant="contained" size="large" onClick={async () => await this.handleSubmit()}>Sign Up</Button>
                        
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;