import React, { Component } from "react";
import Carousel from './carousel.jsx';
//import car from './images/car.jpg';
import ducky from './images/ducky.png'
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
        await this.getUserInformation();
        await this.getLeaderboardInformation();
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
        return (
            <React.Fragment>
                
            <div id="header">
                <p id="welcome">
                    Welcome {this.state.name}
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
                <Carousel 
                    height={200} 
                    width={200} 
                    numslides={4} 
                    images={[ducky, ducky, ducky, ducky]}
                    visibleSlides={3}
                />
                <br />
                <br />
                <p class="stats">messaging points <div class="rank"> {this.state.messagingPoints}</div></p>
                <p class="stats">FUNds <div class="rank">{this.state.funds} </div></p>
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