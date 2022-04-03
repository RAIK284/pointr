import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

class SettignsPage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={5}></HeaderDrawer>
                <div id="content">
                </div>
            </React.Fragment>
        );
    }
}

export default SettignsPage;