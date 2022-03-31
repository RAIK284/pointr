import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';

class MessagingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <h1 id="heading">

                    Messages

                </h1>

                <Button  uppercase={false} variant="text" id= "newMessage" onClick={()=>{window.location.href='/singIn'}}>
                    new message
                </Button>

                <div className="messageDisplay">
                        <text className="Name">
                            [Name]
                        </text>

                        <div></div>

                        <text className="username">
                            [Insert username Here]
                        </text>

                        <div></div>

                        <text className="messageBody">
                            [Insert messageBody Here]
                        </text>

                </div>


 
            </React.Fragment>
        );

    }   
}
export default MessagingPage;