import React from "react";
import "./Dailycount.css";

function Dailycount() {

  
  

  return (
    <div className="Dailycount">



<div class="container">
        <h1>Daily Count</h1>
        <div class="form-section">
            <div class="form-row">
                <label>Date:</label>
                <input type="date"></input>
            </div>
            <div class="form-row">
                <label>Register count:</label>
                <input type="number"></input>
            </div>
            <div class="form-row">
                <label>Leave count:</label>
                <input type="number"></input>
            </div>
            <div class="form-row">
                <label>Sick count:</label>
                <input type="number"></input>
            </div>
        </div>

        <h2>History</h2>
        <div class="form-section">
            <div class="form-row">
                <label>Date:</label>
                <input type="search" placeholder="Search by date..."></input>
            </div>
            <div class="form-row">
                <label>Register count:</label>
                <input type="number" disabled></input>
            </div>
            <div class="form-row">
                <label>Leave count:</label>
                <input type="number" disabled></input>
            </div>
            <div class="form-row">
                <label>Sick count:</label>
                <input type="number" disabled></input>
            </div>
        </div>
    </div>
    </div>

    );  
};
export default Dailycount;
