import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";
import InternalHeading from "./internalHeading";
import HeaderDrawer from "./headerDrawer";
import NewMessage from "./newMessage";
import root from "../root"

class MessagingPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            receivedMessages: {},
            sentMessages: {},
            newMessage: false,
            viewStatus: false
        }
    }

    // Handles the switch from displaying sent vs received messages
    handleChange() {
        const newStatus = !this.state.viewStatus;
        this.setState({viewStatus: newStatus});
    }

    async componentDidMount() {

        await fetch(`${root}/api/user/self`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => this.setState({
                username: data.username
            }));

        await fetch(`${root}/api/message?receiver=${this.state.username}`)
            .then(response => response.json())
            .then(data => this.setState({receivedMessages: data}))

         fetch(`${root}/api/message?sender=${this.state.username}`)
             .then(response => response.json())
             .then(data => this.setState({sentMessages: data}))
    }

    render() {
        if(this.state.receivedMessages === undefined) return <div>Loading...</div>

        let sentMessages = [];
        let receivedMessages = [];

        for (let i = this.state.sentMessages.length - 1; i > 0; i--) {
            sentMessages.push(<MessageDisplayBox name={this.state.sentMessages[i].receiverName} username={this.state.sentMessages[i].receiver} messageBody={this.state.sentMessages[i].messageBody}></MessageDisplayBox>);
        }
        for (let i = this.state.receivedMessages.length - 1; i > 0; i--) {
            receivedMessages.push(<MessageDisplayBox name={this.state.receivedMessages[i].name} username={this.state.receivedMessages[i].sender} messageBody={this.state.receivedMessages[i].messageBody}></MessageDisplayBox>);
        }

        // if switch is toggled to see sent messages
        if (this.state.viewStatus) {
            return (
                <React.Fragment >
                    <div id="messagingBackground">

                        <HeaderDrawer index={1}></HeaderDrawer>

                        <InternalHeading title="Messages"></InternalHeading>

                        <Button variant="text" id= "newMessage" data-testid="newMessageButton" onClick={()=> this.setState({newMessage: true})}>
                            new message
                        </Button>

                        <label className="toggle">
                            <input type="checkbox" data-testid="checkbox" onChange={() => this.handleChange()}></input>
                            <span className="labels" data-testid="sentReceivedCheck" data-on="Sent" data-off="Recieved"></span>
                        </label>

                        <div id="messageDisplayBoxes" data-testid="messageDisplayBoxes">
                            {sentMessages}
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
        // else if received messages should be displayed
        else {
            return (
                <React.Fragment >
                    <div id="messagingBackground">
                        <HeaderDrawer index={1}></HeaderDrawer>
                        <InternalHeading title="Messages"></InternalHeading>

                        <Button variant="text" id= "newMessage" data-testid="newMessageButton" onClick={()=> this.setState({newMessage: true})}>
                            new message
                        </Button>
                        <label className="toggle">
                            <input type="checkbox" data-testid="checkbox" onChange={() => this.handleChange()}></input>
                            <span className="labels" data-testid="sentReceivedCheck" data-on="Sent" data-off="Recieved"></span>
                        </label>

                        <div id="messageDisplayBoxes" data-testid="messageDisplayBoxes">

                            {receivedMessages}
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
}
export default MessagingPage;