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
                        <div className="topThreeSingle" style={{background: "#E9C46A"}}>
                            <img src={duck} className="topProfilePic"></img>  {/* need to add on-click to route to other profile */}
                            <text className="topUsrnm" >@username</text>
                            <var className="topFunds">1,000</var>
                        </div>
                        <div className="topThreeSingle" style={{background: "#C0C0C5"}}>
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >@username</text>
                            <var className="topFunds">500</var>


                        </div>

                        <div className="topThreeSingle" style={{background: "#BF6B07"}}>
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >@username</text>
                            <var className="topFunds">250</var>

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