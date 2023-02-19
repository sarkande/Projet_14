import React from 'react';
import {Link} from 'react-router-dom';
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import {useSelector} from 'react-redux';

import {datas_labels as columns} from '../Datas/datas_labels';

//https://yarnpkg.com/package/react-table
function EmployeeList() {
  const rows = useSelector(state => state.employee.data);
  console.log(rows);
  console.log(columns);

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div>
        <label>Search: </label>
        <input type="text" />
      </div>
      <DataGrid
        columns={columns}
        rows={rows}
        defaultColumnOptions={{width: '1fr'}}
      />
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
