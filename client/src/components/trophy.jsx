import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';

class Trophy extends Component {
    render() {
        return (
            <React.Fragment >
                <div id="trophyDisplay">
                    <div>
                        <img></img>
                    </div>

                    <div className="trophyTitle">
                        <text>Trophy Title</text>
                    </div>

                    <div className="trophyDescription">
                        <text>This is where the trophy's description will go.</text>
                    </div>

                    <div className="trophyCost">
                        <text>Cost: 100</text> 
                    </div>

                    <Button variant="contained" id="addToProfile" onClick={()=>{window.location.href='/store'}}>Add to My Profile</Button>

                </div>
                

            </React.Fragment>
        );

    }   
}
export default Trophy;