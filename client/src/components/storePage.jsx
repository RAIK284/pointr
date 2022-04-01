import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={2}></HeaderDrawer>
                <div id="content">
                </div>
            </React.Fragment>
        );
    }
}

export default StorePage;