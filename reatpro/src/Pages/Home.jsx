import React from "react";
import "./Home.css";

function Home ()  {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Hostelase</h1>

      <div className="card-grid">
        <button className="carde">Daily Count</button>
        <button className="carde">Facilities in hostel</button>
        <button className="carde">Hotline Number</button>
        <button className="carde">About me</button>
        <button className="carde">Student details</button>
        <button className="carde">Complain</button>
        <button className="carde">Fee Payment</button>

        
      </div>
      <div className="help-btn">Help
        
      </div>
      </div>

  );
};

export default Home;