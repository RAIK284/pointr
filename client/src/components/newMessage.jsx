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

    var dict = {
        0x1B780: 10,//mushroom worth 10 pts
        0x1B64A: 15//heart eyes worth 15 pts
    }
    const getMessageValue = (messageBody) => {
        console.log("In getMessageValue function")
        console.log(messageBody)
        // console.log(messageBody.length)

        var totalValue = 0

        for (var i = 0; i < messageBody.length; i++) {
            // if the character is not ASCII
            if (messageBody.charCodeAt(i) > 127)
                
                // every emoji is 2 characters
                // emoji id is charCode
                var emojiID = messageBody.charCodeAt(i)+messageBody.charCodeAt(i+1)

                // if emoji is in our approved list, add its value
                if (dict[emojiID] != null) {
                    console.log("INSIDE IF")
                    console.log(emojiID)// this emoji id is wrong... only f***s up when theres a char btwn emojis
                    console.log(dict[emojiID])
                    totalValue += dict[emojiID]
                }

                // skip next char since emojis take up 2 chars
                i++

        }

        console.log(totalValue)

    }


    const setMessageData = async () => {
        getMessageValue(messageBody);
        messageObject.timestamp = new Date().toUTCString()
        messageObject.receiver = email;
        messageObject.messageBody = messageBody;

        // console.log(messageBody)
        // console.log(email)
        await postMessage(messageObject);
        await subtractMessageValue(messageObject);

    }

    const postMessage = async (messageObject) => {
        const jsonData = JSON.stringify(messageObject);

        fetch("http://localhost:8080/api/message", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        })
        .then((response) => {
            if(response.status === 200) {
                alert("Message Sent :)")
            }
        })
        .catch((error) => {
            console.log('error: ' + error);
            console.log("POST REQUEST TO SEND MESSAGE CAUSED ERRORS")
        })

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
