import React from "react";
import "./Studentdetails.css";






function Studentdetails() {
  
 

   
  return (
    <div className="Studentdetails"> 

    <h1>Student Details</h1>

       
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
           

          <i class="bi bi-search"></i> <br></br>
          <input type="text" id="searchBox" placeholder="Search number..." onkeyup="searchNumbers()" /><br></br><br></br>
          

          

        <label for="name">Student Name</label>
        <input type="text" id="name" name="name" placeholder="Your name here" ></input> <br></br><br></br>
        <label for="name">Room No</label>
        <input type="text" id="name" name="name" placeholder="Room No"></input> <br></br><br></br>
        <label for="name">Address</label>
        <input type="text" id="name" name="name" placeholder="Address"></input> <br></br><br></br>
        <label for="name">About</label>
        <textarea id="name" name="name" placeholder="Other Details"></textarea> <br></br><br></br>
        


   
    </div>
    
  );
};

export default Studentdetails;
