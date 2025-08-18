import React from "react";
import "./Admin.css";


function Admin() {

  
  

  return (
    <div className="Admin"> 

    <h1>Admin</h1>
      <div>
        <label for="name">Admin's Name</label>
        <input type="text" id="name" name="name" placeholder="Your name here"></input> <br></br><br></br>
        <label for="name">Admin's Post</label>
        <input type="text" id="name" name="name" placeholder="Your post"></input> <br></br><br></br>
        <label for="name">Admin's hostel Name</label>
        <input type="text" id="name" name="name" placeholder="Admin's hostel name"></input> <br></br><br></br>
        <label for="name">User Name</label>
        <input type="text" id="name" name="name" placeholder="User name"></input> <br></br><br></br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"></input> <br></br><br></br>
        <label for="password">Confirm Password:</label>
        <input type="password" id="password" name="Confirm password"></input> <br></br><br></br>
        <label for="name">Email</label>
        <input type="text" id="name" name="name" placeholder="Email"></input> <br></br><br></br>
        <label for="name">Phone No</label>
        <input type="text" id="name" name="name" placeholder="Phone No"></input> <br></br><br></br>
        <label for="image">Upload an image:</label >
       <input type="file" id="image" name="image" accept="image/*"></input> <br></br><br></br>


       <div class="button-container">
         <button type="submit">Submit</button>
     
    </div>
    </div>
    </div>

    
  );
};

export default Admin;
