import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from './AdminPage';
import HomePage from './HomePage';
import Day1 from './Components/ML/Day1';
import AdminLogin from './AdminLogin';
import AIDSASS from './Components/AIDS-ASS/Assignments'
function App() {
  const [isDay1Unlocked, setIsDay1Unlocked] = useState(false);

  return (
    <Router>
      <div>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/admin">Admin Page</Link> | <Link to="/day1">Day 1</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<HomePage isDay1Unlocked={isDay1Unlocked} />} />
          <Route
            path="/admin"
            element={<AdminPage isDay1Unlocked={isDay1Unlocked} setDay1Unlocked={setIsDay1Unlocked} />}
          />
          <Route
            path="/adminlogin"
            element={<AdminLogin/>}
          />
          <Route
            path="/AIDSASS"
            element={<AIDSASS/>}
          />
          <Route
            path="/day1"
            element={isDay1Unlocked ? <Day1 /> : <HomePage isDay1Unlocked={isDay1Unlocked} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
