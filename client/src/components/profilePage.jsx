import React, { Component } from "react";
import Carousel from './carousel.jsx';
import dice from './images/trophy-icons/dice.png'
import trophy from './images/trophy-icons/trophy.png'
import star from './images/trophy-icons/star.png'
import ball from './images/trophy-icons/ball.png'
import crystal from './images/trophy-icons/crystal.png'
import clover from './images/trophy-icons/clover.png'
import sword from './images/trophy-icons/sword.png'
import prize from './images/trophy-icons/prize.png'
import HeaderDrawer from "./headerDrawer.jsx";
import {useParams} from "react-router-dom";
import './styles/profilePage.css';

import root from '../root'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state =
            {name: '',
            username: '',
            bio: '',
            trophies: [],
            messagingPoints: 0,
            funds: 0,
            allTimefunds: 0,
            leaderboardRank: ""}
    }

    async componentDidMount() {
        await this.getUserInformation()
        await this.getLeaderboardInformation();
    }

    async getUserInformation() {

         fetch(`${root}/api/user/self`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({
                name: data.name,
                username: data.username,
                bio: data.bio,
                trophies: data.trophies,
                messagingPoints: data.messagingPoints,
                funds: data.funds,
                allTimeFunds: data.allTimeFunds,
                isPrivate: data.isPrivate
            }))

        // Give the state a second to be set before we try to set the login data
        setTimeout(() => {
            this.setLastLogin();
        }, 1000)
    }

    async setLastLogin() {
        const currentDate = new Date().toString();

        const lastLoginData = {
            lastLogin: currentDate
        }

        const loginJSON = JSON.stringify(lastLoginData);

        fetch("http://localhost:8080/api/user?username=" + this.state.username, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: loginJSON
        });
    }

    async getLeaderboardInformation () {
        fetch('http://localhost:8080/api/leaderboard')
            .then(response => response.json())
            .then(data => {this.getUserRank(data)})
    }

    async getUserRank(data) {
        let rankSet = false;
        let rank = 1;
        data.forEach((user) => {
            if (user.username === this.state.username) {
                this.setState({leaderboardRank: rank});
                rankSet = true;
            } else {
                rank++;
            }
        })
        if (!rankSet) {
            this.setState({leaderboardRank: "?"});
        }
    }

    render() {

        localStorage.setItem('username', this.state.username);
        const imageObjects = {
            "ball": ball,
            "star" : star,
            "dice": dice,
            "crystal": crystal,
            "trophy": trophy,
            "crystal": crystal,
            "clover": clover,
            "prize": prize,
            "sword": sword
        }

        let trophyImages = [];
        for (let i = 0; i < this.state.trophies.length; i++) {
            trophyImages.push(<img alt="trophy image" src={imageObjects[this.state.trophies[i].image]}/>);
        }

        if (this.state.leaderboardRank === "") {
            this.getLeaderboardInformation();
        }

        return (
            <React.Fragment>
            <div id="header">
                <p id="welcome">
                    Welcome, {this.state.name}.
                </p>
                <p id="subb">
                    {this.state.bio}
                </p>
            </div>

            <HeaderDrawer index={0} username={this.state.username}/>

            <div id="content">
                <br />
                <br />
                <p id="leaderboard">
                    Leaderboard Rank <div class="rank">{this.state.leaderboardRank}</div>
                </p>
                <br />
                <br />
                <label htmlFor="trophies" className="trophiesLabel">Trophies</label>
                <div id={"carousel-container"}>
                    <div id={"carousel-wrapper"} data-testid='trophyCarousel'>
                        {trophyImages}
                    </div>
                </div>
                <br />
                <br />
                <div id={"stats-container"}>
                    <span className="stats">messaging points <p className="rank">{this.state.messagingPoints} </p></span>
                    <span className="stats">FUNds <p className="rank">{this.state.funds} </p></span>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default ProfilePage;