import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'
import dice from './images/trophy-icons/dice.png'
import trophy from './images/trophy-icons/trophy.png'
import star from './images/trophy-icons/star.png'
import ball from './images/trophy-icons/ball.png'
import crystal from './images/trophy-icons/crystal.png'
import clover from './images/trophy-icons/clover.png'
import sword from './images/trophy-icons/sword.png'
import prize from './images/trophy-icons/prize.png'
import StorePage from "./storePage";
import TrophySingle from "./trophySingle";



class Trophy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: props.cost,
            image: props.image,
            index: props.index,
            isOpen: false
        }
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

        return (
            <React.Fragment >
                <div className="storeDisplay" onClick={this.props.onClick}>
                    <img alt="trophy image" src={imageObjects[this.state.image]} id="trophyImageSmall"/>
                    <div id="trophyCostSmall">
                        <var>{this.state.cost} </var>
                        <text>&nbsp;fds</text>
                    </div>
                </div>
            </React.Fragment>
        );

    }

}
export default Trophy;