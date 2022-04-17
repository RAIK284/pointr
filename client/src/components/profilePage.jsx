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
//reference: https://mui.com/components/drawers/

import './styles/profilePage.css';


const drawerWidth = 240;
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
            leaderboardRank: "?"}
    }

    async componentDidMount() {
        await this.getUserInformation()
        await this.getLeaderboardInformation();
        this.setTrophies()
    }

    async getUserInformation() {
        await fetch('http://localhost:8080/api/user?username=bsimpleman')
            .then(response => response.json())
            .then(data => this.setState({
                name: data.name,
                username: data.username,
                bio: data.bio,
                trophies: data.trophies,
                messagingPoints: data.messagingPoints,
                funds: data.funds,
                allTimeFunds: data.allTimeFunds
            }));
    }

    async getLeaderboardInformation () {
        await fetch('http://localhost:8080/api/leaderboard')
            .then(response => response.json())
            .then(data => {this.getUserRank(data)})
    }

    async getUserRank(data) {
        console.log(data)
        let rank = 1;
        data.forEach((user) => {
            if (user.username === this.state.username) {
                this.setState({leaderboardRank: rank})
            } else {
                rank++;
            }
        })
    }

    render() {

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
            trophyImages.push(<img src={imageObjects[this.state.trophies[i].image]}/>);
        }

        return (
            <React.Fragment>
            
            <div id="header">
                <p id="welcome">
                    Welcome, {this.state.name}.
                </p>
                <p id="sub">
                    {this.state.bio}
                </p>
            </div>

            <HeaderDrawer index={0} />

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
                    <div id={"carousel-wrapper"}>
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

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default ProfilePage;