import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading"
import Button from '@mui/material/Button';
import './styles/settingsPage.css';
import {verifyPassword, verifyName} from "./scripts/signUpValidation.js"

//reference: https://mui.com/components/drawers/

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            bio: '',
            password: '',
            passwordConfirmation: '',
            isPrivate: false,
            notifications: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        fetch('http://localhost:8080/api/user/self', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({isPrivate: data.isPrivate,
            notifications: data.notifications, username: data.username})).then(()=> console.log(this.state))
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
        if (this.state.name !== '') {
            if (verifyName(this.state.name) !== true) {
                alert(verifyName(this.state.name));
                valid = -1;
            }
        } else if (this.state.password !== '') {
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

    handleSignOut() {
        console.log("here")
        fetch("http://localhost:8080/api/signout", {
            method: "POST",
            headers: {'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        });
        localStorage.clear();
        window.location.href='/';

    }

    async updateUser() {
        const newInfo = {}
        if (this.state.name !== '') {
            newInfo.name = this.state.name
        }
        if (this.state.password !== '') {
            newInfo.password = this.state.password
        }
        if (this.state.bio !== '') {
            newInfo.bio = this.state.bio
        }
        newInfo.isPrivate = this.state.isPrivate
        newInfo.notifications = this.state.notifications

        const jsonData = JSON.stringify(newInfo);

        console.log(localStorage.getItem("token")._id)

        fetch("http://localhost:8080/api/user?username=" + this.state.username, {
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
                <InternalHeading className={"settings-heading"} title="Settings"></InternalHeading>
                    <div id="content">
                        <HeaderDrawer index={5}></HeaderDrawer>
                        <div id="main-settings-container">
                            <label htmlFor="name" className="settingsLabel">Change name</label>
                            <input type="text" name="name" data-testid="name-input" value={this.state.name} onChange={this.handleChange} placeholder="Enter new name" className="settingsEntry" required></input>

                            <label htmlFor="password" className="settingsLabel">Change password</label>
                            <input type="text" name="password" data-testid="password-input" value={this.state.password} onChange={this.handleChange} placeholder="Enter new password" className="settingsEntry" required></input>
                            <input type="text" name="passwordConfirmation" data-testid="passwordConfirmation-input" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Confirm new password" className="settingsEntry" required></input>

                            <label htmlFor="bio" className="settingsLabel">Change bio</label>
                            <input id = "bio" type="text" name="bio" data-testid="bio-input" value={this.state.bio} onChange={this.handleChange} placeholder="Enter new bio (55 character limit)" className="settingsEntry" maxlength="55" minlength="1" required></input>
                        </div>
                        <div id={"bottom-options"}>
                            <input type="checkbox" id="privacy"  className="settings-checkbox" data-testid="privacy-checkbox" name="privacy" checked={!this.state.isPrivate} onChange={this.handleChange} onClick={ () => { this.setState({ isPrivate: !this.state.isPrivate })}} required></input>
                            <label htmlFor="privacy" for="privacy" className="checkboxLabel">Display my information publicly</label>
                            <p id={"privacy-info"}>
                                Enabling this will allow other users to see your tropies, FUNDs, and leaderboard rank.
                            </p>
                            <br/>
                            <input type="checkbox" id="notifications"  className="settings-checkbox" name="notification" data-testid="notifications-checkbox" checked={this.state.notifications} onChange={this.handleChange} onClick={ () => {this.setState({ notifications: !this.state.notifications })}} required></input>
                            <label htmlFor="notifications" for="notifications" className="checkboxLabel">Receive email notifications</label>
                            <p id={"notifications-info"}>
                                Notifications will be sent by email one week after your last message.
                            </p>

                        </div>
                        <div id={"settings-buttons"}>
                            <Button id="logout" data-testid='logout-button' variant="contained" size="large" onClick={() => this.handleSignOut()}>Log Out</Button>
                            <Button id="save" data-testid='save-button' variant="contained" size="large" onClick={async () => await this.handleSubmit()}>Save</Button>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}
export default SettingsPage;