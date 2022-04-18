const getUserData = () => {
    const data = fetch('http://localhost:8080/api/usersInfo').then(response => response.json());
}

export data;