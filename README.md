<h1>Project setup</h1>

<br>
<ol>
<li><a href="https://nodejs.org/en/download">Download node.js</a></li>
<li>Pull the repository into Visual Studio, name the folder you pull the project into "pointr-project"</li>
<ul><li>If you did not do this, update file paths in package.json to match the name of your root directory</li></ul>
<li>Open up 2 terminal windows in VS Code</li>
<li>In the first terminal, run "npm start" in the root directory
<br>
<li>In the second terminal, type and run "cd client"
<li>run "npm start" in the client directory</li>
<li>A React app website will launch with a "Connected?" button</li>
<li>If everything worked, pressing this button should cause the backend terminal to log "Connected to React"</li>
</ol>


Error fix: taskkill /im node.exe /f

<h2> API Documentation </h2>

<h3> Sign Up Endpoint </h3>

`POST` **/api/signup**

- Using this endpoint will encrypt the password details of the user

**Success Response**
* Code: 200


**Sample Call**

* JSON Body: jsonData
```json
{
  "username": "bsimpleman",
  "name": "Blake Simpleman",
  "age": 20,
  "bio": "A test user",
  "email": "blakeman90911@gmail.com",
  "password": "password123",
  "profileImg": "https://raw.githubusercontent.com/RAIK284/pointr/main/server/images",
  "phoneNumber": 4029490831,
  "messagingPoints": 100,
  "funds": 200,
  "inventoryId": "inventory-blake",
  "lastLogin": "2022-02-23T03:27:13.535Z",
  "isPrivate": false,
  "messagesReceived": []
}
```
* Javascript
```js
fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

---

<h3> Login Endpoint </h3>

`POST` **/api/login**

- Using this endpoint will verify the user's email and password match

**Success Response**
* Code: 200

**Failure Response**
* Code: 401

**Sample Call**

* JSON Body: jsonData
```json
{
  "email": "user@gmail.com",
  "password": "password123"
}
```
* Javascript
```js
fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

---

<h3> User Endpoint </h3>

`GET` **/api/user**

**Required Params**
* username - the username of the user to get information about


**Sample Call**

```js
    fetch('http://localhost:8080/api/user?username=bsimpleman')
        .then(response => response.json())
        .then(data => console.log(data));
```

**Success Response**
* Code: 200
* Response Example:
```json
{
  "id": "",
  "username": "",
  "name": "",
  "bio": "",
  "email": "",
  "profileImg": "",
  "phoneNumber": 0,
  "messagingPoints": 0,
  "funds": 0,
  "inventoryId": "",
  "lastLogin": "2022-02-23T03:27:13.535Z",
  "isPrivate": false,
  "messagesReceived": []
  }
```

`POST` **/api/user**

- Only use this endpoint for testing - it will not encrypt passwords. For creating a new user use /api/signup instead

**Success Response**
* Code: 200


**Sample Call**

* JSON Body: jsonData
```json
{
  "username": "bsimpleman",
  "name": "Blake Simpleman",
  "age": 20,
  "bio": "A test user",
  "email": "blakeman90911@gmail.com",
  "profileImg": "https://raw.githubusercontent.com/RAIK284/pointr/main/server/images",
  "phoneNumber": 4029490831,
  "messagingPoints": 100,
  "funds": 200,
  "inventoryId": "inventory-blake",
  "lastLogin": "2022-02-23T03:27:13.535Z",
  "isPrivate": false,
  "messagesReceived": [
    {
      "timestamp": "2022-02-23T03:31:49.200Z",
      "sender": "testUser",
      "receiver": "bsimpleman",
      "messageBody": "This message is a test",
      "isRead": false
    }
  ]
}
```
* Javascript
```js
fetch("http://localhost:8080/api/user", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`PATCH` **/api/user**

**Required Params**
* username - the username of the user that is having information updated

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "age": "21",
  "bio": "This is a new bio to be updated via a PATCH request",
  "email": "newEmail@gmail.com"
}
```

* Javascript
```js
fetch("http://localhost:8080/api/user?username=bsimpleman", {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`DELETE` **/api/user**

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "username": "user_to_be_deleted"
}
```
* Javascript
```js
fetch("http://localhost:8080/api/user", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```
---
<h3> Leaderboard Endpoint </h3>

`GET` **/api/leaderboard**

**Optional Params**
* top - returns the top amount of users for the number requested. Ex: top=5 returns the top 5 users


**Sample Call**

```js
    fetch('http://localhost:8080/api/user?top=5')
        .then(response => response.json())
        .then(data => console.log(data));
```
**Success Response**
* Code: 200
* Response Example:
```json
[
  {
    "username": "scooper22",
    "messagingPoints": 500
  },
  {
    "username": "sortTest3",
    "messagingPoints": 350
  },
  {
    "username": "sortTest2",
    "messagingPoints": 350
  },
  {
    "username": "bsimpleman",
    "messagingPoints": 100
  },
  {
    "username": "sortTest",
    "messagingPoints": 50
  }
]
```
---
<h3> Token Endpoint </h3>

`GET` **/api/token**

**Required Params**
* name - the name of the token you want information for

**Sample Call**

```js
    fetch('http://localhost:8080/api/token?name=tokenOne')
        .then(response => response.json())
        .then(data => console.log(data));
```

**Success Response**
* Code: 200
* Response Example:
```json
{
  "_id": "623b408efa6d95874620a0cd",
  "name": "firstToken",
  "value": 250,
  "image": "./imgpath/imgOne.png"
}
```

`POST` **/api/token**

**Success Response**
* Code: 200

**Sample Call**

* JSON Body: jsonData
```json
{
  "name": "tokenToBeCreated",
  "value": 200,
  "image": "./imgpath/image.png"
}
```
* Javascript
```js
fetch("http://localhost:8080/api/token", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`PATCH` **/api/token**

**Required Params**
* name - the name of the token to have information updated

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "value": 100
}
```

* Javascript
```js
fetch("http://localhost:8080/api/token?name=tokenOne", {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`DELETE` **/api/token**

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "name": "name_of_token_to_be_deleted"
}
```
* Javascript
```js
fetch("http://localhost:8080/api/token", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

---
<h3> Store Item Endpoint </h3>

`GET` **/api/storeItem**

**Optional Params**
* name - the name of the token you want information for. Calling without this param returns all store items

**Sample Call**

```js
    fetch('http://localhost:8080/api/storeItem?name=Item-One')
        .then(response => response.json())
        .then(data => console.log(data));
```

**Success Response**
* Code: 200
* Response Example:
```json
{
  "name": "Item-Two",
  "price": 200,
  "image": "storeItemFolder/imageTwo.png",
  "description": "This is the second item",
  "userList": []
}
```

`POST` **/api/storeItem**

**Success Response**
* Code: 200

**Sample Call**

* JSON Body: jsonData
```json
{
  "name": "Item-To-Be-Created",
  "price": 200,
  "image": "storeItemFolder/itemImage.png",
  "description": "This is a new store item",
  "userList": []
}
```
* Javascript
```js
fetch("http://localhost:8080/api/storeItem", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`PATCH` **/api/storeItem**

**Required Params**
* name - the name of the store item to have information updated

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "description": "Here's a new description for the store item"
}
```

* Javascript
```js
fetch("http://localhost:8080/api/token?name=Item-One", {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`DELETE` **/api/storeItem**

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "name": "name-of-store-item-to-be-deleted"
}
```
* Javascript
```js
fetch("http://localhost:8080/api/storeItem", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

---
<h3> Message Endpoint </h3>

`GET` **/api/message**

**Optional Params**
* id - Returns a message with a specific id
* sender - Returns all messages sent from a username
* receiver - Returns all messages received by a username

**Sample Call**

```js
    fetch('http://localhost:8080/api/message?sender=bsimpleman')
        .then(response => response.json())
        .then(data => console.log(data));
```

**Success Response**
* Code: 200
* Response Example:
```json
[
  {
    "_id": "623cd7beb5ddad67c58c0faf",
    "timestamp": "2022-02-23T03:31:49.200Z",
    "sender": "bsimpleman",
    "receiver": "bsimpleman",
    "messageBody": "This is a new message added through an api endpoint",
    "isRead": false
  },
  {
    "_id": "623cd7d4b5ddad67c58c0fb0",
    "timestamp": "2022-02-23T03:31:49.200Z",
    "sender": "bsimpleman",
    "receiver": "scooper22",
    "messageBody": "This message is sent by bsimpleman to scooper22 with an api endpoint",
    "isRead": false
  }
]
```

`POST` **/api/message**

**Success Response**
* Code: 200

**Sample Call**

* JSON Body: jsonData
```json
{
  "timestamp": "2022-02-23T03:31:49.200Z",
  "sender": "bsimpleman",
  "receiver": "scooper22",
  "messageBody": "This is a new message added through an api endpoint",
  "isRead": false
}
```
* Javascript
```js
fetch("http://localhost:8080/api/message", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```

`DELETE` **/api/message**

**Success Response**
* Code: 200

**Sample Call**
* JSON Body: jsonData
```json
{
  "_id": "id-of-message-to-be-deleted"
}
```
* Javascript
```js
fetch("http://localhost:8080/api/message", {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        }).then(res => {
            console.log("Request complete! response:", res);
        });
```
