import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";
import InternalHeading from "./internalHeading";
import HeaderDrawer from "./headerDrawer";
import NewMessage from "./newMessage";

class MessagingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: false
        }
    }

     componentDidMount() {
         fetch('http://localhost:8080/api/message?receiver=bsimpleman')
            .then(response => response.json())
            .then(data => this.setState({data}))
    }

    render() {
        if(this.state.data === undefined) return <div>Loading...</div>
        console.log(this.state.data)
        let messages = [];

        for (let i = 0; i < this.state.data.length; i++) {
            messages.push(<MessageDisplayBox name={this.state.data[i].name} username={this.state.data[i].sender} messageBody={this.state.data[i].messageBody}></MessageDisplayBox>);
        }
        return (
            <React.Fragment >
                <div id="messagingBackground">

                    <HeaderDrawer index={1}></HeaderDrawer>
                  
                    <InternalHeading title="Messages"></InternalHeading>

                    <Button variant="text" id= "newMessage" onClick={()=> this.setState({newMessage: true})}>
                        new message
                    </Button>

                    <div id="messageDisplayBoxes">
                        {/* The way this is displaying is NOT how it should be. We should have a call
                        to the api, and loop throug every message. Then, we display a box for every message. That way
                        for ex if someone only has 2 messages only 2 boxes show up */}
                        {messages}
                    </div>

                </div>

                <NewMessage trigger={this.state.newMessage}>
                    <button className = 'closeButton' onClick={()=> this.setState({newMessage: false})}>
                        X
                    </button>
                </NewMessage>
            </React.Fragment>
        );

    }   
}
export default MessagingPage;