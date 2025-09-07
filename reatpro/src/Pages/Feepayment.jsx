import React from "react";
import "./Feepayment.css";



function Feepayment() {

  
  

  return (
    <div className="Feepayment"> 

    <h1>Fee Payment</h1>
       <label for="name">UserID</label>
        <input type="text" id="name" name="name" placeholder="Registration No"></input> <br></br><br></br>
        <label for="date">Pick a date:</label>
    <input type="date" id="date" name="date"></input> <br></br><br></br>
        <label for="image">Upload an image:</label >
        <input type="file" id="image" name="image" accept="image/*"></input> <br></br><br></br>

        <div class="button-container">
     
          <button type="submit">Submit</button>
     
        </div>


        <label for="name">Payment Reference</label>
        <input type="text" id="name" name="name" placeholder="Payment Reference"></input><br></br><br></br>
        <label for="name">Payment Amount</label>
        <input type="text" id="name" name="name" placeholder="Payment Amount"></input><br></br><br></br>
        <label for="name">Payment Description</label>
        <input type="text" id="name" name="name" placeholder="Payment Description"></input><br></br><br></br>
        <br></br><br></br><label for="name">Payment Count</label>
        <input type="text" id="name" name="name" placeholder="Payment Count"></input> <br></br><br></br>
        <label for="name">NotPay Count</label>
        <input type="text" id="name" name="name" placeholder="NotPay Count"></input> <br></br><br></br>


    


    </div>

  );   
};
export default Feepayment;