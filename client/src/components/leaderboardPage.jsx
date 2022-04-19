import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading.jsx";
import './styles/leaderboardPage.css';
import duck from "./images/ducky.png";


//reference: https://mui.com/components/drawers/

class LeaderBoardPage extends Component {
    render() {
        return (
            <React.Fragment>

            <InternalHeading title="Leaderboard"></InternalHeading>

                
            <HeaderDrawer index={4}></HeaderDrawer>
            <div id="lbBackground">
                <div id="fundsAmountWrapper">
                        <text id="fundsAmountText">Your all-time FUNds:</text>
                        <var id="fundsAmountNum">20,000</var>
                    </div>

                    <div id="topThreeDisplay">
                        <div className="topThreeSingle">
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >@username</text>
                        </div>
                        <div className="topThreeSingle">
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >@username</text>


                        </div>

                        <div className="topThreeSingle">
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >@username</text>

                        </div>

                    </div>


                    <div id="allDisplay">
                        
                    </div>
               
            </div>
            </React.Fragment>
        );
    }
}

export default LeaderBoardPage;