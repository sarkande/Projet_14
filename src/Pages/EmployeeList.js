import { Link } from "react-router-dom";

function EmployeeList() {
   return (
      <div className="container">
         <h1>Current Employees</h1>
         <table className="display"></table>
         <Link to="/">Home</Link>
      </div>
   );
}

export default EmployeeList;
