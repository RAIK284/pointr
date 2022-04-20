import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading.jsx";
import './styles/leaderboardPage.css';
import duck from "./images/ducky.png";


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
            tableData: [{ name: "@fake data", funds: 200, rank: 4 }, 
            { name: "@fakeData2", funds: 150, rank: 5 },
            { name: "@fakeData3", funds: 100, rank: 6}, { name: "@user3", funds: 90, rank: 7}, 
            { name: "@fakeData4", funds: 80, rank: 8}, { name: "@user5", funds: 70, rank: 9}, { name: "@user6", funds: 60, rank: 10},]
        }
    }

    fetchData = async () => {
        const response =  await fetch('http://localhost:8080/api/leaderboard?top=10')
        const data = await response.json();
        console.log("HEREE")
        console.log(data)
        console.log(data[0].username)
        console.log(data[0].allTimeFunds)
        this.setState({tableData: [{ name: data[0].username, funds: data[0].allTimeFunds, rank: 1}, 
        { name: data[1].username, funds: data[1].allTimeFunds, rank: 2}, 
        { name: data[2].username, funds: data[2].allTimeFunds, rank: 3}, 
        { name: data[3].username, funds: data[3].allTimeFunds, rank: 4}, 
        { name: data[4].username, funds: data[4].allTimeFunds, rank: 5}, 
        { name: data[5].username, funds: data[5].allTimeFunds, rank: 6}, 
        { name: data[6].username, funds: data[6].allTimeFunds, rank: 7}, 
        { name: data[7].username, funds: data[7].allTimeFunds, rank: 8}, 
        { name: data[8].username, funds: data[8].allTimeFunds, rank: 9}, 
        { name: data[9].username, funds: data[9].allTimeFunds, rank: 10}] 
        })

        console.log("Now we are here")
        console.log(this.state.tableData[0])
    };
    async componentDidMount() {
        // const tableData = [];
        await this.fetchData();// i added an await here... when we wait we get the right values
        // now the issue is when we render tableData[0] its not waiting to fetch data first
        console.log("Inside Component did mount")
        console.log(this.state.tableData[0])
    }

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
                            {/* <text className="topUsrnm" >@username</text> */}
                            <text className="topUsrnm" >{this.state.tableData[0].name}</text>
                            <var className="topFunds">{this.state.tableData[0].funds}</var>
                        </div>
                        <div className="topThreeSingle" style={{background: "#C0C0C5"}}>
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >{this.state.tableData[1].name}</text>
                            <var className="topFunds">{this.state.tableData[1].funds}</var>
                        </div>

                        <div className="topThreeSingle" style={{background: "#BF6B07"}}>
                            <img src={duck} className="topProfilePic"></img>
                            <text className="topUsrnm" >{this.state.tableData[2].name}</text>
                            <var className="topFunds">{this.state.tableData[2].funds}</var>

                        </div>

                    </div>


                    <div id="allDisplay">
                        <table id="rankingTable">
                            <tr>
                            {/* <th>Rank</th>    
                            <th>Username</th>
                            <th>FUNds</th> */}
                            </tr>
                            {this.state.tableData.map((val, key) => { /* instead of tableData put in the list of usernames */
                            return (
                                <tr key={key}>
                                <td id="rank">{val.rank}</td>
                                <td id="name">{val.name}</td> { /* change "name" , "funds" , "rank" to be the variables set up in our database*/}
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