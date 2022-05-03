import React, { useState, Component } from "react";
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

// add trophy to user profile
const addTrophy = async (name, image, trophyCost, username) => {

    const trophyData = {
        name,
        image
    }

    const trophyDataJSON = JSON.stringify(trophyData);
    let newFunds;
    console.log(trophyCost)
    const response = await fetch('http://localhost:8080/api/user/self', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
    });
    const data = await response.json();
    const funds = await data.funds;
    if (funds >= trophyCost) {
        fetch("http://localhost:8080/api/trophy", {
            method: "POST",
            headers: {'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
            body: trophyDataJSON
        });

        newFunds = funds - trophyCost;
        const newUserFunds = {funds: newFunds};
        const newUserFundsJSON = JSON.stringify(newUserFunds);

        fetch("http://localhost:8080/api/user?username=" + username, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: newUserFundsJSON
        });

        const newUserTrophyData = {name: name, user: username}
        const newUserTrophyDataJSON = JSON.stringify(newUserTrophyData);

        console.log(newUserTrophyDataJSON)

        fetch("http://localhost:8080/api/storeItemAddUser?name=" + name, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: newUserTrophyDataJSON
        });

        alert('Trophy purchased!');
    } else {

        alert("You can't afford this trophy!");
    }
    return newFunds;
}

// popup for a single trophy
function TrophySingle(props) {

    const [trophyTitle, setTrophyTitle] = useState(props.title);
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
    }

    return(props.trigger) ? (

        <React.Fragment>
            <div className="trophySingleBG">
                <div className="singleDisplay"> {/* need to add close button */}
                    <img alt="single trophy" src={imageObjects[trophyImage]} id="trophyImageLarge"/>


                    <div id="trophyTitle">
                        <text>{trophyTitle}</text>
                    </div>

                    <div id="trophyDescription">
                        <text>{trophyDescription}</text>
                    </div>

                    <div id="trophyCostLarge">
                        <text>Cost: </text>
                        <var>{trophyCost}</var> {/* may not be the proper data type for the cost */}
                    </div>

                    <div id="buttonWrapper">
                        <Button variant="contained" id="addToProfile" onClick={()=>{addTrophy(trophyTitle, trophyImage, trophyCost, username)}}>Add to My Profile</Button>
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

export default TrophySingle
