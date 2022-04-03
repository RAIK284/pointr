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

                        <MessageDisplayBox id="box7"> </MessageDisplayBox>
                
                        <MessageDisplayBox id="box8"> </MessageDisplayBox>
    
                        <MessageDisplayBox id="box9"></MessageDisplayBox>

                        <MessageDisplayBox id="box10"></MessageDisplayBox>

                        <MessageDisplayBox id="box11"></MessageDisplayBox>

                        <MessageDisplayBox id="box12"></MessageDisplayBox>
                      
                        <MessageDisplayBox id="box13"> </MessageDisplayBox>
                
                        <MessageDisplayBox id="box14"> </MessageDisplayBox>

                        <MessageDisplayBox id="box15"></MessageDisplayBox>

                        <MessageDisplayBox id="box16"></MessageDisplayBox>

                        <MessageDisplayBox id="box17"></MessageDisplayBox>

                        <MessageDisplayBox id="box18"></MessageDisplayBox>

                        <MessageDisplayBox id="box19"> </MessageDisplayBox>
                
                        <MessageDisplayBox id="box20"> </MessageDisplayBox>

                        <MessageDisplayBox id="box21"></MessageDisplayBox>

                        <MessageDisplayBox id="box22"></MessageDisplayBox>

                        <MessageDisplayBox id="box23"></MessageDisplayBox>

                        <MessageDisplayBox id="box24"></MessageDisplayBox>
                

                


                    </div>




                </div>
            </React.Fragment>
        );

    }   
}
export default MessagingPage;