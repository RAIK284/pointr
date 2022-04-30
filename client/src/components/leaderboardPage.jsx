import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading.jsx";
import './styles/leaderboardPage.css';
import duck from "./images/ducky.png";
import ducky from "./images/ducky.png";

import blake from "./images/profile-pictures/blake.png"
import wally from "./images/profile-pictures/wally.png"
import prema from "./images/profile-pictures/prema-cropped.png"
import shivani from "./images/profile-pictures/shivani.jpeg"
import keck from "./images/profile-pictures/keck.jpg"
import sam from "./images/profile-pictures/sam.png"

//reference: https://mui.com/components/drawers/
/* fake data for rankings table, delete this const once connected to our database */
// var tableData = [{ name: "@fake data", funds: 200, rank: 4 }, 
// { name: "@fakeData2", funds: 150, rank: 5 },
// { name: "@fakeData3", funds: 100, rank: 6}, { name: "@user3", funds: 90, rank: 7}, 
// { name: "@fakeData4", funds: 80, rank: 8}, { name: "@user5", funds: 70, rank: 9}, { name: "@user6", funds: 60, rank: 10},]

class LeaderBoardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [{ name: "", funds: 0, rank: 0 }, { name: "", funds: 0, rank: 0 },{ name: "", funds: 0, rank: 0}],// null/filler data
            allTimeFunds: 0
        }
    }

    fetchData = async () => {
        const response =  await fetch('http://localhost:8080/api/leaderboard?top=10')
        const data = await response.json();

        this.setState({tableData: await this.getTableData(data)})

        const userDataResponse = await fetch('http://localhost:8080/api/user/self', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        });
        const userData = await userDataResponse.json();

        this.setState({allTimeFunds: userData.allTimeFunds})
    };
    async componentDidMount() {
        await this.fetchData();

        console.log("Top 10 Users Fetched Results")
        console.log(this.state.tableData)
    }

    async getTableData(data){
        const tableData = []
        var rank = 1
        for (let elem of data){
            if(elem != null){
                tableData.push({ name: elem.username, funds: elem.allTimeFunds, rank: rank, profileImg: elem.profileImg})
                rank++
            }
        }
        return tableData;
    }

    render() {

        const profileImages = {
            "blake": blake,
            "shivani": shivani,
            "prema": prema,
            "wally": wally,
            "keck": keck,
            "ducky": ducky,
            "sam": sam
        }
        
        return (
            <React.Fragment>

            <InternalHeading title="Leaderboard"></InternalHeading>

                
            <HeaderDrawer index={4}></HeaderDrawer>
            <div id="lbBackground">
                <div id="fundsAmountWrapper">
                        <text id="fundsAmountText">Your all-time FUNds:</text>
                        <var id="fundsAmountNum">{this.state.allTimeFunds}</var>
                    </div>

                    <div id="topThreeDisplay">
                        <div className="topThreeSingle" style={{background: "#E9C46A"}}>
                            <img alt="other profile image" src={profileImages[this.state.tableData[0].profileImg]} className="topProfilePic"></img>  {/* need to add on-click to route to other profile */}
                            {/* <text className="topUsrnm" >@username</text> */}
                            <div className="nameFundsWrapper">
                            <text className="topUsrnm" >{this.state.tableData[0].name}</text>
                            <br/>
                            <var className="topFunds">{this.state.tableData[0].funds}</var>
                            </div>
                            
                        </div>
                        <div className="topThreeSingle" style={{background: "#C0C0C5"}}>
                            <img alt="other profile image" src={profileImages[this.state.tableData[1].profileImg]} className="topProfilePic"></img>
                            <div className="nameFundsWrapper">
                            <text className="topUsrnm" >{this.state.tableData[1].name}</text>
                            <br/>

                            <var className="topFunds">{this.state.tableData[1].funds}</var>
                            </div>
                            
                        </div>

                        <div className="topThreeSingle" style={{background: "#BF6B07"}}>
                            <img alt="other profile image" src={profileImages[this.state.tableData[2].profileImg]} className="topProfilePic"></img>
                            <div className="nameFundsWrapper">
                            <text className="topUsrnm" >{this.state.tableData[2].name}</text>
                            <br/>

                            <var className="topFunds">{this.state.tableData[2].funds}</var>
                            </div>
                            

                        </div>

                    </div>


                    <div id="allDisplay">
                        <table id="rankingTable">
                            <tr>
                            {/* <th>Rank</th>    
                            <th>Username</th>
                            <th>FUNds</th> */}
                            </tr>
                            {this.state.tableData.slice(3,).map((val, key) => {
                            return (
                                <tr key={key}>
                                <td id="rank">{val.rank}</td>
                                <td id="name">{val.name}</td> 
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