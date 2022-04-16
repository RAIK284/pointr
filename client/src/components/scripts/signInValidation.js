//Checks if user login is valid or not.
async function validateUser()  {

    //Retrieve email and password fields from html.
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log(email.value)

    //Construct data object based on email and password fields.
    const jsonUserDataObject = {
        "email": email.value,
        "password": password.value
    };

    //Turn the data into a JSON object.
    const jsonUserData = JSON.stringify(jsonUserDataObject);

    //Make a post request with the JSON object to login.
    const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: jsonUserData
    });

    //console.log(response)

    //If the user login is valid, print to console and response status is 200. Else, print and status is 401.
    if (response.status === 200) {
        return response.json();
    } else {
        console.log("Incorrect email/password")
        return -1;
    }

    return response.status;
}

export {validateUser};