import React from "react";
import "./Feepayment.css";



function Feepayment() {

  
  

  return (
    <div className="Feepayment"> 

    <h1>Fee Payment</h1>
       <label for="name">Registration No</label>
        <input type="text" id="name" name="name" placeholder="Registration No"></input> <br></br><br></br>
        <label for="year"> Year</label>
<select id="year" name="year">
  <option value="">Year Suggetion</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
</select> <br></br><br></br>
        <label for="image">Upload an image:</label >
        <input type="file" id="image" name="image" accept="image/*"></input> <br></br><br></br>

        <div class="button-container">
     
          <button type="submit">Submit</button>
     
        </div>
        <br></br><br></br><label for="name">Payment Count</label>
        <input type="text" id="name" name="name" placeholder="Payment Count"></input> <br></br><br></br>
        <label for="name">NotPay Count</label>
        <input type="text" id="name" name="name" placeholder="NotPay Count"></input> <br></br><br></br>

    


    </div>

  );   
};
export default Feepayment;