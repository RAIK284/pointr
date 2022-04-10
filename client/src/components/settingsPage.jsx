import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading"
import Button from '@mui/material/Button';
import './styles/settingsPage.css';
import {verifyPassword} from "./scripts/signUpValidation.js"
import {verifyEmail} from "./scripts/signUpValidation.js"
import {verifyName} from "./scripts/signUpValidation.js"
import {verifyUsername} from "./scripts/signUpValidation.js"
import {createUser} from "./scripts/signUpValidation.js"
//reference: https://mui.com/components/drawers/



class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        fetch('http://localhost:8080/api/user?username=bsimpleman')
            .then(response => response.json())
            .then(data => this.setState({isPrivate: data.isPrivate,
            notifications: data.notifications})).then(()=> console.log(this.state))
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    async handleSubmit(event) {
        this.handleData()
    }

    handleData() {
        let valid = 1;
        if (this.state.name !== undefined) {
            if (verifyName(this.state.name) !== true) {
                alert(verifyName(this.state.name));
                valid = -1;
            }
        } else if (this.state.password !== undefined) {
            if (this.state.password !== this.state.passwordConfirmation) {
                alert("Passwords do not match!");
                valid = -1;
            } else if (verifyPassword(this.state.password) !== true) {
                alert(verifyPassword(this.state.password));
                valid = -1;
            }
        }

        if (valid === 1) {
            this.updateUser();
            alert("Profile information saved!")
        }
    }

    async updateUser() {
        const newInfo = {}
        if (this.state.name !== undefined) {
            newInfo.name = this.state.name
        }
        if (this.state.password !== undefined) {
            newInfo.password = this.state.password
        }
        if (this.state.isPrivate !== undefined) {
            newInfo.isPrivate = this.state.isPrivate
        }
        if (this.state.notifications !== undefined) {
            newInfo.notifications = this.state.notifications
        }
        if (this.state.bio !== undefined) {
            newInfo.bio = this.state.bio
        }

        const jsonData = JSON.stringify(newInfo);

        fetch("http://localhost:8080/api/user?username=bsimpleman", {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
    }

    render() {
        return (
            <React.Fragment>
                    <div id="content">
                        <InternalHeading className={"settings-heading"} title="Settings"></InternalHeading>
                        <HeaderDrawer index={5}></HeaderDrawer>
                        <div id="main-settings-container">
                            <label htmlFor="name" className="settingsLabel">Change name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter new name" className="settingsEntry" required></input>

                            <label htmlFor="password" className="settingsLabel">Change password</label>
                            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter new password" className="settingsEntry" required></input>
                            <input type="text" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Confirm new password" className="settingsEntry" required></input>

                            <label htmlFor="bio" className="settingsLabel">Change bio</label>
                            <input id = "bio" type="text" name="bio" value={this.state.bio} onChange={this.handleChange} placeholder="Enter new bio" className="settingsEntry" required></input>
                            {/* This will be a logout button. <Button variant="contained" size="large" onClick={}>Logout</Button>*/}
                        </div>
                        <div id={"bottom-options"}>
                            <input type="checkbox"  className="settings-checkbox" name="privacy" checked={!this.state.isPrivate} onChange={this.handleChange} onClick={ () => { this.setState({ isPrivate: !this.state.isPrivate })}} required></input>
                            <label htmlFor="privacy" className="checkboxLabel">Display my information publicly</label>
                            <p id={"privacy-info"}>
                                Enabling this will allow other users to see your tropies, FUNDs, and leaderboard rank.
                            </p>
                            <br/>
                            <input type="checkbox"  className="settings-checkbox" name="notification" checked={this.state.notifications} onChange={this.handleChange} onClick={ () => {this.setState({ notifications: !this.state.notifications })}} required></input>
                            <label htmlFor="notifications" className="checkboxLabel">Receive email notifications</label>
                            <p id={"notifications-info"}>
                                Notifications will be sent by email one week after your last message.
                            </p>

                        </div>
                        <div id={"settings-buttons"}>
                            <Button id="logout" variant="contained" size="large" onClick={() => window.location.href='/'}>Log Out</Button>
                            <Button id="save" variant="contained" size="large" onClick={async () => await this.handleSubmit()}>Save</Button>
                        </div>
                    </div>



            </React.Fragment>
        );
    }
}

export default SettingsPage;