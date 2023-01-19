import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modale from "../Components/Modale";
import "../Styles/app.css";

function App() {
   const params = {
      title: "HRnet",
      movable: true,
      close_button: {
         title: "X",
         active: true,
         callback: () => {
            setShow(false);
            return true;
         },
      },
      save_button: {
         title: "Ok",
         active: true,
         callback: () => {
            setShow(false);
            return true;
         },
      },
      cancel_button: {
         active: false,
      },
      content: [
         // {
         //    type: "image",
         //    value: "https://www.w3schools.com/howto/img_avatar.png",
         //    class: "avatar",
         // },
         {
            type: "text",
            value: "Employee created !",
         },
      ],
   };

   const [show, setShow] = useState(true);

   const handleSave = () => {
      setShow(true);
   };
   return (
      <div className="App">
         {show ? <Modale params={params} /> : null}
         <div className="title">
            <h1>HRnet</h1>
         </div>
         <div className="container">
            <Link to="/employee-list">View Current Employees</Link>

            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
               <label htmlFor="first-name">First Name</label>
               <input type="text" id="first-name" />

               <label htmlFor="last-name">Last Name</label>
               <input type="text" id="last-name" />

               <label htmlFor="date-of-birth">Date of Birth</label>
               <input id="date-of-birth" type="text" />

               <label htmlFor="start-date">Start Date</label>
               <input id="start-date" type="text" />

               <fieldset className="address">
                  <legend>Address</legend>

                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" />

                  <label htmlFor="city">City</label>
                  <input id="city" type="text" />

                  <label htmlFor="state">State</label>
                  <select name="state" id="state"></select>

                  <label htmlFor="zip-code">Zip Code</label>
                  <input id="zip-code" type="number" />
               </fieldset>

               <label htmlFor="department">Department</label>
               <select name="department" id="department">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
               </select>
            </form>

            <button onClick={handleSave}>Save</button>
         </div>
      </div>
   );
}
export default App;
