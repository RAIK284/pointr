import React, { Component, useState} from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';
// import TokensBox from "./tokensBox";
import TokenCostButton from "./tokenCostButton";

function NewMessage(props){

    const [email, setEmail] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const messageObject = {
        "timestamp": "",
        "sender": "bsimpleman",
        "receiver": "",
        "value": "",
        "messageBody": "",
        "isRead": false
    }

    const handleInput = () => {
        setMessageData()
    }

    const getMessageValue = () => {

    }

    const setMessageData = async () => {
        getMessageValue();
        messageObject.timestamp = new Date().toUTCString()
        messageObject.receiver = email;
        messageObject.messageBody = messageBody;

        console.log(messageBody)
        console.log(email)
        await postMessage(messageObject);
        await subtractMessageValue(messageObject);
    }

    const postMessage = async (messageObject) => {
        const jsonData = JSON.stringify(messageObject);

        fetch("http://localhost:8080/api/message", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        });
    }

    const subtractMessageValue = async (messageObject) => {
        const jsonData = JSON.stringify(messageObject);

        fetch("http://localhost:8080/api/user?username=bsimpleman", {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        });
    }

    return(props.trigger) ? (
        <React.Fragment >

            <div className = 'newMessage'>
                <div className = 'newMessageInner'>
                    <text className = 'sendTo'>Send a message to: </text>
                    {/* <input className = 'sendToEntryBox' name={"email"} onChange={e => setEmail(e.target.value)} type="text" placeholder="send to email"></input> */}
                    <div class="dropdown">
                        <span>Select User</span>
                        <div class="dropdown-content">
                            <p onClick={e => setEmail(e.target.value)}>hard coded user 1</p>
                            <p>hard coded user 2</p>
                            <p>hard coded user 3</p>
                            <p>hard coded user 4</p>
                            <p>hard coded user 5</p>
                            <p>hard coded user 6</p>
                            <p>hard coded user 7</p>
                            <p>hard coded user 8</p>
                            <p>hard coded user 9</p>
                            <p>hard coded user 10</p>
                            <p>hard coded user 12</p>
                            <p>hard coded user 13</p>
                            <p>hard coded user 14</p>
                            <p>hard coded user 15</p>

                        </div>
                    </div>

                    <textarea className="messageEntryBox" name={"messageBody"} rows="4" cols="50" onChange={e => setMessageBody(e.target.value)} placeholder="Type your message here..."></textarea>

                    <div className="tokensBox">
                    
                        <TokenCostButton onClick={e => setMessageBody(e.target.value.concat("[EMOJI]"))}></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>
                        <TokenCostButton></TokenCostButton>

                    </div>

                    <Button variant="text" id= "send" onClick={() => handleInput()}>
                        Send
                    </Button>



                    {props.children}
                </div>

            </div>
        </React.Fragment>
    ) : "";
}

export default NewMessage

// import MessagingPage from "./messagingPage";


// class NewMessage extends Component {
//     constructor(props) {
//         super(props);
//         this.newMessage = this.newMessage.bind(this)

//     }

//     render() {
//         return(
//             <React.Fragment >
    
//                 <div className = 'newMessage'>
//                     <div className = 'newMessageInner'>
//                         <button className = 'closeButton' onClick={()=> this.setState({newMessage: false})}>
//                             X
//                         </button>
//                     </div>
    
//                 </div>
//             </React.Fragment>
    
//         )
    
//     }
// }
