import React from "react";
import "./User.css";

function User() {

 
  

  return (
    <div className="User"> 

    <h1>User</h1>
      <div>
        <label for="name">Student Name</label>
        <input type="text" id="name" name="name" placeholder="Your name here"></input> <br></br><br></br>
        <label for="name">User Name</label>
        <input type="text" id="name" name="name" placeholder="User name"></input> <br></br><br></br>
        <label for="name">Your hostel Name</label>
        <input type="text" id="name" name="name" placeholder="Your hostel name"></input> <br></br><br></br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"></input> <br></br><br></br>
        <label for="password">Confirm Password:</label>
        <input type="password" id="password" name="Confirm password"></input> <br></br><br></br>
        <label for="name">Email</label>
        <input type="text" id="name" name="name" placeholder="Email"></input> <br></br><br></br>


      <label for="image">Upload an image:</label>
      <input type="file" id="image" name="image" accept="image/*"></input> 
       <br></br><br></br>
       
        <label for="name">Phone No</label>
        <input type="text" id="name" name="name" placeholder="Phone No"></input> <br></br><br></br>
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
        <label for="name">Registration No</label>
        <input type="text" id="name" name="name" placeholder="Registration No"></input> <br></br><br></br>
        <label for="name">Room No</label>
        <input type="text" id="name" name="name" placeholder="Room No"></input> <br></br><br></br>
        <label for="name">Index No</label>
        <input type="text" id="name" name="name" placeholder="Index No"></input> <br></br><br></br>
        <label for="name">Address</label>
        <input type="text" id="name" name="name" placeholder="Address"></input> <br></br><br></br>
        <label for="name">Parent Name & Phone No</label>
        <textarea id="name" name="name" placeholder="Parent Name & Phone No"></textarea> <br></br><br></br>
        <label for="name">Other Details</label>
        <textarea id="name" name="name" placeholder="Other Details"></textarea> <br></br><br></br>

    <div class="button-container">
     
     <button type="submit">Submit</button>
     
    </div>

        
      </div>
      
    </div>
  );
};

export default User;
