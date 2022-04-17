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
import ducky from './images/ducky.png'
import HeaderDrawer from "./headerDrawer.jsx";
import { useParams } from "react-router-dom";
//reference: https://mui.com/components/drawers/
import PropTypes from 'prop-types';
import './styles/profilePage.css';
import './styles/otherUserPage.css'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class OtherUserPage extends Component {
    constructor(props) {
        super(props);
        this.state =
            {name: '',
                username: '',
                bio: '',
                image: '',
                trophies: [],
                messagingPoints: 0,
                funds: 0,
                allTimefunds: 0,
                leaderboardRank: "?"}
    }

    componentDidMount() {
        let { id } = this.props.params;
        this.fetchData(id).then(() => this.getLeaderboardInformation());
    }

    fetchData = async (id) => {
        const response =  await fetch('http://localhost:8080/api/user?username=' + id)
        const data = await response.json();
        console.log(data)
        this.setState(data)
        console.log(this.state)
    };

    async getLeaderboardInformation () {
        await fetch('http://localhost:8080/api/leaderboard')
            .then(response => response.json())
            .then(data => {this.getUserRank(data)})
    }

    async getUserRank(data) {
        let rank = 1;
        data.forEach((user) => {
            if (user.username === this.state.username) {
                console.log("happened")
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
            console.log(this.state.trophies[i].image)
            trophyImages.push(<img src={imageObjects[this.state.trophies[i].image]}/>);
        }

        return (
            <React.Fragment>
            
            <div id="header">
            <img align='Left' id="otherImage" alt="profile pic" src={ducky}/>
                <p id="welcome">
                    {/* need image here */}
                    {this.state.name}.
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
                        {/* insert images here{trophyImages} */}
                        {trophyImages}
                    </div>
                </div>
                <div id={"stats-container"}>
                    <span className="stats">FUNds <p className="rank">{this.state.funds} </p></span>
                    {/* send message button here */}
                </div>
            </div>
            </React.Fragment>
        );
    }
}

OtherUserPage.propTypes = {
    otherUser: PropTypes.object.isRequired,
};

export default withParams(OtherUserPage);