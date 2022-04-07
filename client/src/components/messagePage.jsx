import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

class MessagePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={1}></HeaderDrawer>
                <div id="content">
                </div>
            </React.Fragment>
        );
    }
}

export default MessagePage;