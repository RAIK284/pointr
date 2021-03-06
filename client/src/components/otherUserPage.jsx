import React, { Component } from "react";
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
import PropTypes from 'prop-types';
import './styles/profilePage.css';
import './styles/otherUserPage.css'
import Button from '@mui/material/Button';
import blake from "./images/profile-pictures/blake.png"
import wally from "./images/profile-pictures/wally.png"
import prema from "./images/profile-pictures/prema-cropped.png"
import shivani from "./images/profile-pictures/shivani.jpeg"
import keck from "./images/profile-pictures/keck.jpg"
import sam from "./images/profile-pictures/sam.png"
import root from "../root"
import localURL from "../root"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

// similart to profile page, but to display other users in our system
class OtherUserPage extends Component {
    constructor(props) {
        super(props);
        this.state =
            {name: '',
                username: '',
                bio: '',
                profileImg: 'ducky',
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
        if (data.isPrivate === false) {
            this.setState(data)
        } else {
            this.setState({
                name: data.name,
                username: data.username,
                bio: data.bio,
                image: data.image,
                trophies: [],
                funds: "Private",
                leaderboardRank: "Private"
            })
        }
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

        const profileImages = {
            "blake": blake,
            "shivani": shivani,
            "prema": prema,
            "wally": wally,
            "keck": keck,
            "ducky": ducky,
            "sam": sam
        }


        let trophyImages = [];
        for (let i = 0; i < this.state.trophies.length; i++) {
            console.log(this.state.trophies[i].image)
            trophyImages.push(<img src={imageObjects[this.state.trophies[i].image]}/>);
        }
        return (
            <React.Fragment>
                {console.log("image", this.state.image)}
            
            <div id="header">
            <img align='Left' id="otherImage" alt="profile pic" src={profileImages[this.state.profileImg]}/>
                <p id="welcome">
                    {this.state.name}
                </p>
                <p id="sub">
                    {this.state.bio}
                </p>
            </div>

            <HeaderDrawer index={3} />

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
                <div id={"stats-container"}>
                    <span className="stats">FUNds <p className="rank">{this.state.funds} </p></span>
                    <Button className="btnPos" id="msgBtn" onClick={()=>{window.location.href='/messages'}}>Send a Message</Button>
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