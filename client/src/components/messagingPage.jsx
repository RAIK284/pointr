import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";

class MessagingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <div id="messagingBackground">
                    <h1 id="heading">
                        Messages
                    </h1>

                    <Button variant="text" id= "newMessage" onClick={()=>{window.location.href='/'}}>
                        new message
                    </Button>

                    <div id="messageDisplayBoxes">
                        {/* The way this is displaying is NOT how it should be. We should have a call
                        to the api, and loop throug every message. Then, we display a box for every message. That way
                        for ex if someone only has 2 messages only 2 boxes show up */}

                        <MessageDisplayBox id="box1"> </MessageDisplayBox>
                
                        <MessageDisplayBox id="box2"> </MessageDisplayBox>
    
                        <MessageDisplayBox id="box3"></MessageDisplayBox>

                        <MessageDisplayBox id="box4"></MessageDisplayBox>

                        <MessageDisplayBox id="box5"></MessageDisplayBox>

                        <MessageDisplayBox id="box6"></MessageDisplayBox>

                    </div>




                </div>
            </React.Fragment>
        );

    }   
}
export default MessagingPage;