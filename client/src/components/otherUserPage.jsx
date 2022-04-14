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
import PropTypes from 'prop-types';
import './styles/profilePage.css';
import './styles/otherUserPage.css'

class OtherUserPage extends Component {
    render() {

        return (
            <React.Fragment>
            
            <div id="header">
            <img align='Left' id="otherImage" alt="profile pic" src={this.props.otherUser.image}/>
                
                <p id="welcome">
                    {/* need image here */}
                    {this.props.otherUser.name}.
                </p>
                <p id="sub">
                    {this.props.otherUser.bio}
                </p>
            </div>

            <HeaderDrawer index={0} />

            <div id="content">
                <br />
                <br />
                <p id="leaderboard">
                    Leaderboard Rank <div class="rank">{this.props.otherUser.leaderboardRank}</div>
                </p>
                <br />
                <br />
                <label htmlFor="trophies" className="trophiesLabel">Trophies</label>
                <div id={"carousel-container"}>
                    <div id={"carousel-wrapper"}>
                        {/* insert images here{trophyImages} */}
                    </div>
                </div>
                <div id={"stats-container"}>
                    <span className="stats">FUNds <p className="rank">{this.props.otherUser.funds} </p></span>
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

export default OtherUserPage;