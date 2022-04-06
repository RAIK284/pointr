import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import InternalHeading from "./internalHeading.jsx";
//reference: https://mui.com/components/drawers/

class LeaderBoardPage extends Component {
    render() {
        return (
            <React.Fragment>

            <InternalHeading title="Leaderboard"></InternalHeading>

                
            <HeaderDrawer index={4}></HeaderDrawer>
                <div id="content">
                </div>
            </React.Fragment>
        );
    }
}

export default LeaderBoardPage;