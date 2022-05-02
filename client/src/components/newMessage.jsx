import React, { Component, useState, useEffect} from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';
import TokenCostButton from "./tokenCostButton";
import emojiDataExport from './emojiData.js'
import root from '../root'


function NewMessage(props){
    const [usernameList, setUsernameList] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${root}/api/usersInfo`)
            const json = await res.json();

            setUsernameList(json);
        }

        fetchData();
    }, [])

    // filterData();

    // function filterData() {
    //     const newList = usernameList;
    //     const keys = Object.keys(newList);
    //     let i = 0;
    //     for (const key of keys) {
    //         // console.log("DKS:FJSLDFJS:LDFJL")
    //         // console.log(usernameList[Object.keys(usernameList)[i]])
    //         console.log(newList[Object.keys(newList)[i]].username)
    //         i++;
    //         if (newList[Object.keys(newList)[i]].username === sender) {
    //             console.log("DKS:FJSLDFJS:LDFJL")
    //             console.log(newList[Object.keys(newList)[0]])
    //             delete newList[Object.keys(newList)[i]]
    //         }
    //     }
    //     setUsernameList(newList);
    // }
    


    // console.log("USERNAME LIST")
    // console.log(usernameList)





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

    const handleInput = () => {
        setMessageData()
        console.log(messageObject)
    }

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
    
    
    function removeEmojis(str) {
        var emojiRE = /(\P{EPres})|(\P{ExtPict})/gu;
        return str.replace(emojiRE, '');
    }

    function removeNonEmojis(str) {
        var emojiRE = /(\P{EPres})|(\P{ExtPict})/gu;
        return str.replace(emojiRE, '');
    }

    const getMessageValue = (messageBody) => {

        var messageBodyPostCull = removeEmojis(messageBody)

        var messageBodyPostCull = removeNonEmojis(messageBody)

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


    const setMessageData = async () => {
        messageObject.value = getMessageValue(messageBody);
        setMessageValue(getMessageValue(messageBody));
        messageObject.timestamp = new Date().toUTCString();
        messageObject.receiver = document.getElementById("selectedEmail").value;

        messageObject.messageBody = messageBody;

        const receiverName = await getReceiverName(messageObject);
        console.log("Receiver Name" + receiverName);
        const messageSentStatus = await subtractMessageValue(messageObject);
        if (messageSentStatus) {
            await postMessage(messageObject, receiverName);
        }
    }

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

    const subtractMessageValue = async (messageObject) => {
        const receiverFunds = await getReceiverFunds();
        const receiverAllTimeFunds = await getReceiverAllTimeFunds();
        const newMessagingPoints = senderMessagingPoints - messageObject.value;
        const newFunds = receiverFunds + messageObject.value;
        const newFundsValue = parseInt(newFunds);

        const newAllTimeFunds = receiverAllTimeFunds + messageObject.value;
        const newAllTimeFundsValue = parseInt(newAllTimeFunds);
        console.log("this is the receiver" + receiver)
        console.log("new funds" + newFunds)
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

            fetch("http://localhost:8080/api/user?username=" + document.getElementById("selectedEmail").value, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: receiverDataJSON
            });
            getUserInformation();
            return true;
        } else {
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
                        <select id="selectedEmail">
                            {/* {emailList} */}
                            {/* look at store page */}
                            {usernameList.map((user) => (<option>{user.username}</option>))}

                        </select>
                    </div>

                    <div>
                        <textarea className="messageEntryBox" value={messageBody} name={"messageBody"} rows="4" cols="50" onChange={e => setMessageBody(e.target.value)} placeholder="Type your message here..."></textarea>
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