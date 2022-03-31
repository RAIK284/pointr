import React, { Component } from "react";
import './styles/messageDisplayBox.css';
import Button from '@mui/material/Button';

class MessageDisplayBox extends Component {
    render() {
        return (
            <React.Fragment >
                
                <div className="messageDisplay">
                    
                    <div>
                        <text id="name">
                            [Name]
                        </text>
                    </div>
                    <div>
                        <text id="username">
                            [Insert username Here]
                        </text>
                    </div>
                    <div>
                        <text id="messageBody">
                            [example message of positivity is here :) Go you!]
                        </text>
                    </div>

                </div>

            </React.Fragment>
        );

    }   
}
export default MessageDisplayBox;