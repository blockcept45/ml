import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
const HomePage = ({ isDay1Unlocked }) => {
  const navigate = useNavigate();

  const handleAccessDay1 = () => {
    if (isDay1Unlocked) {
      navigate('/day1'); // Navigate to Day 1 if unlocked
    } else {
      alert("Access Denied! Please ask an admin to unlock Day 1.");
      navigate('/adminlogin'); // Redirect to admin page if locked
    }
  };
  return (
    <div>
        <div>
        <h1 className='heading'>Technocrats Institute of Technology</h1>
        </div> 
        <hr></hr>
        <Link to="/adminlogin">
        <button className='admin'>Admin Login</button>
        </Link>
        <div>
       
        </div>
        
        <div className='totalclass'>
        <h1 className='heading'>Machine learning (ML)</h1>
        {/* <Link to="/Home"> */}
        <button onClick={handleAccessDay1}>Go to Day 1
        <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
        </button>
        
      {/* </Link> */}
      <Link to="/Home">
        <button>Go to Day 2 <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 3  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 4  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 5  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 6  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 7  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 8  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 9  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 10  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 11  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 12  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 13  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 14  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 15  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 16  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 17  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 18  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 19  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 20  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 21  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 22  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 23  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 24  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Blogs">
        <button>Go to Day 25  <i className="fas fa-lock"></i></button>
      </Link>
        </div>



        <div className='totalclass'>
        <h1 className='heading'>Java OOP (Object-Oriented Programming)</h1>
        <Link to="/java1">
        <button>Go to Day 1  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 2  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 3  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 4  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 5  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 6  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 7  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 8  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 9  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 10  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 11  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 12  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 13  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 14  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 15  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 16  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 17  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 18  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 19  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 20  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 21  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 22  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 23  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Home">
        <button>Go to Day 24  <i className="fas fa-lock"></i></button>
      </Link>
      <Link to="/Blogs">
        <button>Go to Day 25  <i className="fas fa-lock"></i></button>
      </Link>
        </div>
      
     <div className='assignments'>
        <h1>Students Assignments Status</h1>
        

        <Link to="/AIDSASS">
        <button>AIDS V SEM</button>
      </Link>
      <Link to="/Blogs">
        <button>CSE-A III SEM</button>
      </Link>
      <Link to="/Blogs">
        <button>IT III SEM</button>
      </Link>
     </div>
    </div>
  );
};

export default HomePage;
