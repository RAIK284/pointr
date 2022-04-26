import React, { useState, Component } from "react";
import './styles/mostPopular.css';
import './styles/trophy.css';
import ducky from './images/ducky.png'
/* import Button from '@mui/material/Button';

import dice from './images/trophy-icons/dice.png'
import trophy from './images/trophy-icons/trophy.png'
import star from './images/trophy-icons/star.png'
import ball from './images/trophy-icons/ball.png'
import crystal from './images/trophy-icons/crystal.png'
import clover from './images/trophy-icons/clover.png' 
import sword from './images/trophy-icons/sword.png' 
import prize from './images/trophy-icons/prize.png' */


function MostPopular(props) {

   /*  const [trophyTitle, setTrophyTitle] = useState(props.title);
    const [trophyImage, setTrophyImage] = useState(props.image);
    const [trophyDescription, setTrophyDescription] = useState(props.description);
    const [trophyCost, setTrophyCost] = useState(props.cost);
    const [index, setIndex] = useState(props.index);
    const [username, setUsername] = useState(props.username);

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
    } */

    return(props.trigger) ? (

        <React.Fragment>
            <div className="trophySingleBG">
                <div className="singleDisplay"> {/* need to add close button */}
                    <img alt="single trophy" src= {ducky} id="trophyImageLarge"/> {/* src={imageObjects[trophyImage]} */}


                    <div id="trophyTitle">
                        <text>
                            Trophy Title
                            {/* {trophyTitle} */}
                        </text>
                    </div>

                    <div id="trophyDescription">
                        <text>
                            @username
                            <br>
                            </br>
                            @username
                            <br>
                            </br>
                            @username
                            {/* {trophyDescription} */}
                         </text>
                    </div>

                    {/* <div id="trophyCostLarge">
                        <text>Cost: </text>
                        <var>{trophyCost}</var> {/* may not be the proper data type for the cost 
                    </div>

                    <div id="buttonWrapper">
                        <Button variant="contained" id="addToProfile" onClick={()=>{addTrophy(trophyTitle, trophyImage, trophyCost, username)}}>Add to My Profile</Button>
                    </div>

                    <div onClick={props.onClick}>
                        <Button variant="text" id="closeButton"> X </Button>
                    </div> */}
                    {props.children}
                </div>
            </div>



        </React.Fragment>
    ) : "";


}

export default MostPopular