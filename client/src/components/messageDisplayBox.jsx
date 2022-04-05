import React, { Component } from "react";
import './styles/messageDisplayBox.css';
import Button from '@mui/material/Button';

class MessageDisplayBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            username: this.props.username,
            messageBody: this.props.messageBody
        }
    }
    render() {
        return (
            <React.Fragment >

                <div className="messageDisplay">

                    <div>
                        <text id="name" >
                            {this.props.name}
                        </text>
                    </div>
                    <div>
                        <text id="username">
                            {this.props.username}
                        </text>
                    </div>
                    <div>
                        <text id="messageBody">
                            {this.props.messageBody}
                        </text>
                    </div>

                </div>

            </React.Fragment>
        );

    }
}
export default MessageDisplayBox;