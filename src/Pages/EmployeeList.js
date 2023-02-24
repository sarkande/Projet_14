import React from 'react';
import {useState} from 'react';

import {Link} from 'react-router-dom';

import DataTable from 'react-data-table-component';

import {useSelector} from 'react-redux';

import {datas_labels} from '../Datas/datas_labels';

//https://react-data-table-component.netlify.app/?path=/story/columns-reorder--reorder
function EmployeeList() {
  //default table
  const [columns] = useState(datas_labels);
  const [rows] = useState(useSelector(state => state.employee.data));

  const [searchField, setSearchField] = useState('');
  const onChangeHandler = event => {
    setSearchField(event.target.value);
  };
  //https://react-data-table-component.netlify.app/?path=/docs/examples-filtering--filtering
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div>
        <label>Search: </label>
        <input type="text" value={searchField} onChange={onChangeHandler} />
      </div>

      <DataTable
        columns={columns}
        data={rows.filter(item => {
          if (searchField === '') {
            return item;
          } else if (
            item.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchField.toLowerCase()) ||
            item.dateOfBirth
              .toLowerCase()
              .includes(searchField.toLowerCase()) ||
            item.startDate.toLowerCase().includes(searchField.toLowerCase()) ||
            item.department.toLowerCase().includes(searchField.toLowerCase()) ||
            item.street.toLowerCase().includes(searchField.toLowerCase()) ||
            item.city.toLowerCase().includes(searchField.toLowerCase()) ||
            item.state.toLowerCase().includes(searchField.toLowerCase()) ||
            item.zipCode.toLowerCase().includes(searchField.toLowerCase())
          ) {
            return item;
          } else {
            return '';
          }
        })}
        title="Employee List"
        pagination
        subHeader
        persistTableHead
      />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
