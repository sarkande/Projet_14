import React from "react";
import Modale from "../Components/Modale";
import "../Styles/app.css";

function App() {
   const params = {
      title: "HRnet",
      movable: true,
      close_button: {
         title: "E",
         active: true,
      },
      save_button: {
         title: "yolo",
         active: true,
      },
      content: [
         // {
         //    type: "image",
         //    value: "https://www.w3schools.com/howto/img_avatar.png",
         //    class: "avatar",
         // },
         {
            type: "text",
            value: "employee created",
         },
      ],
   };
   return (
      <div className="App">
         <Modale params={params} />

         <div className="title">
            <h1>HRnet</h1>
         </div>
         <div className="container">
            <a href="employee-list.html">View Current Employees</a>
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

            <button>Save</button>
         </div>
         <div id="confirmation" className="modal">
            Employee Created!
         </div>
      </div>
   );
}
export default App;
