import React from "react";
import "./Complain.css";

function Complain() {

  
  

  return (
    <div className="Complain"> 

    <h1>Complain</h1>
    <h2>Private</h2> 

    <label for="date">Pick a date:</label>
    <input type="date" id="date" name="date"></input> <br></br><br></br>

    <h2>Complain Type</h2>

  <form>
    
    <select id="complainType" name="complainType" required>
      <option value="">-- Select Type --</option>
      <option value="common">Common</option>
      <option value="private">Private</option>
    </select>
  </form> <br></br><br></br>

    <label for="name">Complain About</label>
    <textarea id="name" name="name" placeholder="Other Details"></textarea> <br></br><br></br>

   <div class="button-container">
     
     <button type="submit">Submit</button>
     
    </div>

    


    </div>

);  
};
export default Complain;