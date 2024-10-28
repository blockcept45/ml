import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminLogin = () => {
  const [showPopup, setShowPopup] = useState(true); // Set to true to open popup automatically
  const [password, setPassword] = useState(''); // To store the entered password
  const [errorMessage, setErrorMessage] = useState(''); // To store any error messages
  const navigate = useNavigate(); // For navigation

  // Close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setPassword(''); // Reset password input
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Check the password
  const handleLogin = () => {
    const correctPassword = '123admin123'; // Set your correct password here

    if (password === correctPassword) {
      navigate('/admin'); // Redirect to the Access Page
      handleClosePopup();
    } else {
      setErrorMessage('Incorrect password, please try again.');
    }
  };

  return (
    <div>
      {showPopup && (
        <div className="popup" >
          <div className="popup-content">
            <h3>Enter Admin Password</h3>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
            />
            <button onClick={handleLogin}>Submit</button>
            <button onClick={handleClosePopup}>Cancel</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
