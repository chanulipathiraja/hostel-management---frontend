import React from "react";
import "./Aboutme.css";


function Aboutme() {

 
  

  return (
    <div className="aboutme"> 

    <h1>About Me</h1>
      <div>
        <label for="name">Student Name</label>
        <input type="text" id="name" name="name" placeholder="Your name here"></input> <br></br><br></br>
        <label for="name">Registration No</label>
        <input type="text" id="name" name="name" placeholder="Registration No"></input> <br></br><br></br>
        <label for="name">Room No</label>
        <input type="text" id="name" name="name" placeholder="Room No"></input> <br></br><br></br>
        <label for="number">Floor No</label>
       <select id="number" name="number">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select> <br></br><br></br>
        <label for="password">Index No</label>
        <input type="password" id="password" name="Confirm password"></input> <br></br><br></br>
        <label for="name">Address</label>
        <input type="text" id="name" name="name" placeholder="Address"></input> <br></br><br></br>
        <label for="name">Phone No</label>
        <input type="text" id="name" name="name" placeholder="Phone No"></input> <br></br><br></br>   
        <label for="name">Parent Name</label>
        <input type="text" id="name" name="name" placeholder="Parent Name"></input> <br></br><br></br>   
        <label for="name">Parent Phone No</label>
        <input type="text" id="name" name="name" placeholder="Parent Phone No"></input> <br></br> <br></br>  
        <label for="name">Other details</label>
        <textarea id="name" name="name" placeholder="Other Details"></textarea> <br></br><br></br>
        <label for="image">Upload an image:</label >
        <input type="file" id="image" name="image" accept="image/*"></input> <br></br><br></br>

    <div class="button-container">
     <button type="reset">Clear</button>
     <button type="submit">Submit</button>
     <button type="button" onclick="alert('Logging in')">Login</button>
    </div>
        
      </div>
    </div>
  );
};

export default Aboutme;