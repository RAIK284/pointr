document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById("body")
    const mail = document.getElementById("message")
    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const username = document.getElementById("username")
    const messagingPoints = document.getElementById("messaging-points")
    const funds = document.getElementById("funds")
    const bio = document.getElementById("bio")
    const profilePicture = document.getElementById("profile-picture")
    const submitButton = document.getElementById("submit-button")
    const messageBody = document.getElementById("message-body")
    const receiver = document.getElementById("receiver")

    let messages;
    let usernameValue;

    mail.addEventListener("click", () => {
        let messagesWindow = document.createElement("div")
        messagesWindow.style.position = "absolute";
        messagesWindow.style.top = "0";
        messagesWindow.style.bottom = "0";
        messagesWindow.style.left = "0";
        messagesWindow.style.right = "0";
        messagesWindow.style.margin = "auto";
        messagesWindow.style.width = "750px";
        messagesWindow.style.height = "750px";
        messagesWindow.style.backgroundColor = "white";
        messagesWindow.style.border = "4px solid black";
        body.appendChild(messagesWindow)

        messages.forEach((message) => {
            let messageContainer = document.createElement("div")
            messageContainer.style.width = "750px";
            messageContainer.style.height = "100px";
            messageContainer.style.borderBottom = "4px solid black";
            messageContainer.style.padding = "0.5rem"
            messageContainer.style.boxSizing = "border-box";

            let messageContent = document.createElement("p")
            messageContent.innerHTML = "Sender: " + message.sender + "<br><br>" + message.messageBody;
            messageContainer.appendChild(messageContent)
            messagesWindow.appendChild(messageContainer)
        });
    });

    submitButton.addEventListener("click", () => {
        sendMessage();
    });

    const userInformation = () => {
        fetch('http://localhost:8080/api/user?username=bsimpleman')
            .then(response => response.json())
            .then(data => setUserInformation(data));
    }

    const setUserInformation = (data) => {
        console.log(data);
        name.innerHTML = name.innerHTML + data.name;
        usernameValue = data.username;
        username.innerHTML = username.innerHTML + data.username;
        age.innerHTML = age.innerHTML + data.age;
        messagingPoints.innerHTML = messagingPoints.innerHTML + data.messagingPoints;
        funds.innerHTML = funds.innerHTML + data.funds;
        bio.innerHTML = bio.innerHTML + data.bio;
        messages = data.messagesReceived;
        profilePicture.src = data.profileImg;
        console.log(messages)
    }

    const sendMessage = () => {
        const data = {
            timestamp: "2022-02-23T03:31:49.200Z",
            sender: usernameValue,
            receiver: receiver.value,
            messageBody: messageBody.value,
            isRead: false
        }

        const jsonData = JSON.stringify(data)
        console.log(jsonData)
        fetch("http://localhost:8080/api/user", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
        alert("Message sent!")
    }


    userInformation()
})
