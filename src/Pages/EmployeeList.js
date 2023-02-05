import {Link} from 'react-router-dom';

function EmployeeList() {
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <table className="display">
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>birth</th>
            <th>startDate</th>
            <th>street</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th>
            <th>department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
          </tr>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;

/*
          firstName: firstName,
          lastName: lastName,
          birth: birth,
          startDate: startDate,
          street: street,
          city: city,
          state: state,
          zip: zip,
          department: department,
*/
