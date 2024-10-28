// AdminPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = ({ isDay1Unlocked, setDay1Unlocked }) => {
  const navigate = useNavigate();

  // Unlock Day 1
  const handleUnlock = () => {
    setDay1Unlocked(true); // Set access to true
    alert("Day 1 is now unlocked!");
  };

  // Lock Day 1
  const handleLock = () => {
    setDay1Unlocked(false); // Set access to false
    alert("Day 1 is now locked.");
    navigate('/'); // Redirect to home if locked
  };

  return (
    <div className="admin-page">
      <h3>Admin Controls</h3>
      {/* Unlock button */}
      <button onClick={handleUnlock} disabled={isDay1Unlocked}>
        Unlock Day 1
      </button>

      {/* Lock button */}
      <button onClick={handleLock} disabled={!isDay1Unlocked}>
        Lock Day 1
      </button>
    </div>
  );
};

export default AdminPage;
