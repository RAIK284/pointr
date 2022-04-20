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

const addTrophy = (name, image, funds, trophyCost, username) => {

    const trophyData = {
        name,
        image
    }

    const trophyDataJSON = JSON.stringify(trophyData);
    let newFunds;
    console.log(funds)
    console.log(trophyCost)
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



        alert('Trophy purchased! (Maybe we should have a popup for this?)');
    } else {

        alert("You can't afford this trophy!");
    }
    return newFunds;
}

function TrophySingle(props) {

    const [trophyTitle, setTrophyTitle] = useState(props.title);
    const [trophyImage, setTrophyImage] = useState(props.image);
    const [trophyDescription, setTrophyDescription] = useState(props.description);
    const [trophyCost, setTrophyCost] = useState(props.cost);
    const [index, setIndex] = useState(props.index);
    const [funds, setFunds] = useState(props.userFunds);
    const [username, setUsername] = useState(props.username);

    console.log("funds", funds)

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
                    <img src={imageObjects[trophyImage]} id="trophyImageLarge"/>


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
                        <Button variant="contained" id="addToProfile" onClick={()=>{setFunds(addTrophy(trophyTitle, trophyImage, funds, trophyCost, username))}}>Add to My Profile</Button>
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
/* 

class TrophySingle extends Component{
    
    render() {

    let trophysingle = (
    <React.Fragment>

            <div className="singleDisplay">
            <button id="closeButton" onClick={this.props.onClose}>x</button>

                     
                <img src={ducky} id="trophyImageLarge"/>
                

                 <div id="trophyTitle">
                     <text>Trophy Title</text>
                 </div>

                 <div id="trophyDescription">
                     <text>This is where the trophy's description will go.</text>
                  </div> 

                 <div id="trophyCostLarge">
                     <text>Cost: 100 FUNds</text> 
                 </div>

                <div id="buttonWrapper">
                    <Button variant="contained" id="addToProfile" onClick={()=>{window.location.href='/store'}}>Add to My Profile</Button>
                </div>

             </div>

                
 </React.Fragment>
    );

    if (! this.props.isOpen) {
        trophysingle = null;
    }
    return (
        <div>
            {trophysingle}
        </div>
    );
       
    }
    
        }

export default TrophySingle */