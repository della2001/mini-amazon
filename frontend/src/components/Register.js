import React, { useState, useEffect } from 'react';

function Register() {
     const [newID, newName, newUsername, message,  registerUser] = useState(0);

    useEffect(() => {
        fetch('/registration/', {method:'POST'}).then(res => res.json()).then(data => {
          registerUser(data.name, data.username, data.password, data.address, data.isSeller, data.isBuyer);
        });
      }, []);
    return (
        <div>
            <p>Registration successful!</p>
            <p>
                User ID: {newID}
                Name: {newName}
                Username: {newUsername}
                Message: {message}
            </p>
        </div>
    )
}

export default Register;