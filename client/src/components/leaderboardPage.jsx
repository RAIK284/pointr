import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading.jsx";
import './styles/leaderboardPage.css';
import duck from "./images/ducky.png";


//reference: https://mui.com/components/drawers/
const tableData = [{ name: "@user1", funds: 200, rank: 4 }, /* fake data for rankings table, delete this const once connected to our database */
{ name: "@user2", funds: 150, rank: 5 },
{ name: "@user3", funds: 100, rank: 6}, { name: "@user3", funds: 90, rank: 7}, 
{ name: "@user4", funds: 80, rank: 8}, { name: "@user5", funds: 70, rank: 9}, { name: "@user6", funds: 60, rank: 10},]


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
                        <table id="rankingTable">
                            <tr>
                            <th>Rank</th>    
                            <th>Username</th>
                            <th>FUNds</th>
                            </tr>
                            {tableData.map((val, key) => { /* instead of tableData put in the list of usernames */
                            return (
                                <tr key={key}>
                                <td>{val.rank}</td>
                                <td>{val.name}</td> { /* change "name" , "funds" , "rank" to be the variables set up in our database*/}
                                <td>{val.funds}</td>
                                
                                </tr>
                            )
                            })}
                            </table>
                            </div>         
            </div>

            </React.Fragment>
        );
    }
}

export default LeaderBoardPage;