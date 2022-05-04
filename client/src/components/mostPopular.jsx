import React, { useState, Component } from "react";
import './styles/mostPopular.css';
import './styles/trophy.css';
import ducky from './images/ducky.png'
import Button from '@mui/material/Button';

import dice from './images/trophy-icons/dice.png'
import trophy from './images/trophy-icons/trophy.png'
import star from './images/trophy-icons/star.png'
import ball from './images/trophy-icons/ball.png'
import crystal from './images/trophy-icons/crystal.png'
import clover from './images/trophy-icons/clover.png'
import sword from './images/trophy-icons/sword.png'
import prize from './images/trophy-icons/prize.png'

// popup for the most popular trophy on FUNds store page
function MostPopular(props) {

    const [trophyTitle, setTrophyTitle] = useState(props.title);
    const [trophyImage, setTrophyImage] = useState(props.image);
    const [userList, setUserList] = useState([...new Set(props.users)])

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

    return(props.trigger) ? (

        <React.Fragment>
            <div className="trophySingleBG">
                <div className="singleDisplay">
                    <img alt="single trophy" src= {imageObjects[trophyImage]} id="trophyImageLarge"/> {/* src={imageObjects[trophyImage]} */}

                    <div id="trophyTitle">
                        <text>
                            {trophyTitle}
                        </text>
                    </div>

                    <div id="trophyDescription">
                        <text>
                            {console.log(userList)}
                            {userList.map(user => <p>@{user}</p>)}
                         </text>
                    </div>

                    <div onClick={props.onClick}>
                        <Button variant="text" id="closeButton"> X </Button>
                    </div>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    ) : "";
}

export default MostPopular