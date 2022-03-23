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

`GET` **/api/user**

**Required Params**
* username - the username of the username you want to get information for


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
fetch("http://localhost:8080/api/user", {
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
fetch("http://localhost:8080/api/token", {
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