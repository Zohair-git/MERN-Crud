import React, { useState } from 'react';

const User = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userName,
      userEmail,
      userPassword
    };

    try {
      const userResponse = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const apiResponse = await userResponse.json();

      if (apiResponse.message) {
        alert('User added successfully!');
      } else {
        alert(apiResponse.error);
      }
    } catch (error) {
      alert('Error adding user: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mt-3">User Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            User Email
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">
            User Password
          </label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default User;