import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";

class MessagingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <h1 id="heading">

                    Messages

                </h1>

                <Button variant="text" id= "newMessage" onClick={()=>{window.location.href='/'}}>
                    new message
                </Button>

                <div>
                    <MessageDisplayBox id="box1">
                        
                    </MessageDisplayBox>
                </div>

                <div>
                    <MessageDisplayBox id="box2">
                        
                    </MessageDisplayBox>
                </div>

                <div>
                    <MessageDisplayBox id="box3">

                    </MessageDisplayBox>
                </div>




 
            </React.Fragment>
        );

    }   
}
export default MessagingPage;