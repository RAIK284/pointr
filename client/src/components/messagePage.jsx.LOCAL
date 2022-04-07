import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";
import NewMessage from "./newMessage.jsx";
import { useState } from 'react';
//reference: https://mui.com/components/drawers/

class MessagePage extends Component {

    render() {

        // const [buttonPopup, setButtonPopup] = useState(false);

        return (
            
            <React.Fragment>


                <HeaderDrawer index={1}></HeaderDrawer>
                <div id="messagingBackground">


                    <h1 id="heading">
                        Messages
                    </h1>
                    <Button variant="text" id= "newMessage" /*onClick={()=> setButtonPopup(true)}*/>
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

                    {/* new message popup code here */}
                    <NewMessage trigger={true}>
                        <h2>My Popup</h2>
                        <p>This is my button triggered popup</p>
                    </NewMessage>



                </div>
            </React.Fragment>
        );
    }
}

export default MessagePage;