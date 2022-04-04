import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

class ExplorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={3}></HeaderDrawer>
                <div id="content">
                </div>
            </React.Fragment>
        );
    }
}

export default ExplorePage;