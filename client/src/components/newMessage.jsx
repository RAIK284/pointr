import React, { Component, useState, useEffect} from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';
import TokenCostButton from "./tokenCostButton";
import emojiDataExport from './emojiData.js'

// New Message popup for the messaging page
function NewMessage(props){
    const [usernameList, setUsernameList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8080/api/usersInfo')
            const json = await res.json();

            setUsernameList(json);
        }

        fetchData();
    }, [])

    // Data about emojis and their value
    const emojiData = emojiDataExport;

    const [email, setEmail] = useState('');
    const [messageBody, setMessageBody] = useState('');
    const [name, setName] = useState('');
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [receiverFunds, setReceiverFunds] = useState('');
    const [receiverAllTimeFunds, setReceiverAllTimeFunds] = useState('');
    const [senderMessagingPoints, setSenderMessagingPoints] = useState('');
    const [messageValue, setMessageValue] = useState('');

    getUserInformation();

    async function getUserInformation() {
        fetch('http://localhost:8080/api/user/self', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem("token")},
        })
            .then(response => response.json())
            .then(data => {setName(data.name); setSender(data.username); setSenderMessagingPoints(data.messagingPoints)})
    }

    async function getReceiverName(messageObject) {
        const response = await fetch('http://localhost:8080/api/user?username=' + messageObject.receiver);
        const data = await response.json();
        return data.name;
    }

    async function getReceiverFunds() {
        const response = await fetch('http://localhost:8080/api/user?username=' + messageObject.receiver);
        const data = await response.json();
        return data.funds;
    }

    async function getReceiverAllTimeFunds() {
        const response = await fetch('http://localhost:8080/api/user?username=' + messageObject.receiver);
        const data = await response.json();
        return data.allTimeFunds;
    }

    // Message Object that matches what is in the database/post request
    const messageObject = {
        "name": name,
        "receiverName": '',
        "timestamp": "",
        "sender": sender,
        "receiver": "",
        "value": "",
        "messageBody": "",
        "isRead": false
    }

    // changes what the message is as the user types
    const handleInput = () => {
        setMessageData()
    }

    // dict to index emoji's versus their value
    var dict = {
        '😂': emojiData.joyTears.price,
        '😎': emojiData.sunglass.price,
        '💩': emojiData.poo.price,
        '💋': emojiData.kiss.price,
        '💯': emojiData.hundred.price,
        '👍': emojiData.thumbsUp.price,
        '🐸': emojiData.frog.price,
        '🥂': emojiData.clinkGlass.price,
        '🌟': emojiData.glowStar.price,
        '🔥': emojiData.fire.price
    }
    
    // extract emojis from the message string
    function removeEmojis(str) {
        var emojiRE = /(\P{EPres})|(\P{ExtPict})/gu;
        return str.replace(emojiRE, '');
    }

    // calculate message value based on emojis used
    const getMessageValue = (messageBody) => {

        var messageBodyPostCull = removeEmojis(messageBody)

        var totalValue = 0

        for (var i = 0; i < messageBodyPostCull.length; i++) {
            // if the character is not ASCII
            if (messageBodyPostCull.charCodeAt(i) > 127)
                
                var emojiIcon = messageBodyPostCull.charAt(i) + messageBodyPostCull.charAt(i+1)

                // if the emoji is in our selected list
                if (dict[emojiIcon] != null) {
 
                    totalValue += dict[emojiIcon]
   
                }
                // skip next char since emojis take up 2 chars
                i++
        }
        console.log("totalValue: ")
        return totalValue
    }

    useEffect(() => {
        setMessageBody(messageBody)
    }, [messageBody]);

    // create message object so it is ready to send
    const setMessageData = async () => {
        messageObject.value = getMessageValue(messageBody);
        setMessageValue(getMessageValue(messageBody));
        messageObject.timestamp = new Date().toUTCString();
        messageObject.receiver = document.getElementById("selectedUser").value;

        messageObject.messageBody = messageBody;

        const receiverName = await getReceiverName(messageObject);
        console.log("Receiver Name" + receiverName);
        const messageSentStatus = await subtractMessageValue(messageObject);
        if (messageSentStatus) {
            await postMessage(messageObject, receiverName);
        }
    }

    // send message
    const postMessage = async (messageObject, receiverName) => {
        messageObject.receiverName = receiverName;
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

    useEffect(() => console.log(messageBody), [messageBody]);

    // reduce user messaging points based on value of message sent
    const subtractMessageValue = async (messageObject) => {
        const receiverFunds = await getReceiverFunds();
        const receiverAllTimeFunds = await getReceiverAllTimeFunds();
        const newMessagingPoints = senderMessagingPoints - messageObject.value;
        const newFunds = receiverFunds + messageObject.value;
        const newFundsValue = parseInt(newFunds);

        const newAllTimeFunds = receiverAllTimeFunds + messageObject.value;
        const newAllTimeFundsValue = parseInt(newAllTimeFunds);

        // if enough funds, send the message
        if (newMessagingPoints >= 0) {
            const senderData = {
                messagingPoints: newMessagingPoints
            }

            const receiverData = {
                funds: newFundsValue,
                allTimeFunds: newAllTimeFundsValue
            }

            const senderDataJSON = JSON.stringify(senderData);
            const receiverDataJSON = JSON.stringify(receiverData)

            console.log(senderData)
            console.log(receiverData)

            fetch("http://localhost:8080/api/user?username=" + sender, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: senderDataJSON
            });

            fetch("http://localhost:8080/api/user?username=" + document.getElementById("selectedUser").value, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: receiverDataJSON
            });
            getUserInformation();
            return true;
        } 
        // alert if not enough points
        else {
            alert("You don't have enough messaging points to send that!")
            return false;
        }
    }

    return(props.trigger) ? (
        <React.Fragment >

            <div className = 'newMessage'>
                <div className = 'newMessageInner'>
                    <text className = 'sendTo'>Send a message to: </text>
                 
                    <div className="box">
                        <select id="selectedUser">
                            {usernameList.map((user) => (<option>{user.username}</option>))}

                        </select>
                    </div>

                    <div>
                        <textarea className="messageEntryBox" value={messageBody} name={"messageBody"} rows="4" cols="50" onChange={e => setMessageBody(e.target.value)} placeholder="Type your message here..." maxlength="80"></textarea>
                    </div>
                    <div className="tokensBox">
                        <TokenCostButton 
                            image = {emojiData.joyTears.image} 
                            points = {emojiData.joyTears.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.joyTears.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.sunglass.image} 
                            points = {emojiData.sunglass.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.sunglass.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.poo.image} 
                            points = {emojiData.poo.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.poo.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.kiss.image} 
                            points = {emojiData.kiss.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.kiss.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.hundred.image} 
                            points = {emojiData.hundred.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.hundred.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.thumbsUp.image} 
                            points = {emojiData.thumbsUp.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.thumbsUp.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.frog.image} 
                            points = {emojiData.frog.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.frog.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.clinkGlass.image} 
                            points = {emojiData.clinkGlass.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.clinkGlass.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.glowStar.image} 
                            points = {emojiData.glowStar.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.glowStar.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.fire.image} 
                            points = {emojiData.fire.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.fire.emoji)}>
                        </TokenCostButton>

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