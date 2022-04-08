import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'


class Trophy extends Component {

    render() {
        return (
            <React.Fragment >
                    
                
                <div className="trophyDisplay">
                    <div>
                        <img src={ducky}/>
                    </div>

                    <div id="trophyTitle">
                        <text>Trophy Title</text>
                    </div>

                    <div id="trophyDescription">
                        <text>This is where the trophy's description will go.</text>
                    </div>

                    <div id="trophyCost">
                        <text>Cost: 100</text> 
                    </div>

                    <Button variant="contained" id="addToProfile" onClick={()=>{window.location.href='/store'}}>Add to My Profile</Button>

                </div>
                

            </React.Fragment>
        );

    }   
}
export default Trophy;