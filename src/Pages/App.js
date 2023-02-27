import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Modale from '../Components/Modale';
import '../Styles/app.css';
import {useDispatch} from 'react-redux';
import {employeeAdd} from '../Actions';

import {states, departments} from '../Datas/datas_dropdown';

//https://reactdatepicker.com
//https://github.com/fraserxu/react-dropdown

function App() {
  const params = {
    title: 'HRnet',
    movable: true,
    close_button: {
      title: 'X',
      active: true,
      callback: () => {
        setShow(false);
      },
    },
    save_button: {
      title: 'Ok',
      active: true,
      callback: () => {
        setShow(false);
      },
    },
    cancel_button: {
      active: false,
    },
  };

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [state, setState] = useState(states[0]);
  const [department, setDepartment] = useState(departments[0]);

  const dispatch = useDispatch();
  const handleSave = e => {
    e.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let dateOfBirth = document.getElementById('date-of-birth').value;
    let startDate = document.getElementById('start-date').value;
    let street = document.getElementById('street').value;
    let city = document.getElementById('city').value;
    let zipCode = document.getElementById('zip-code').value;
    if (
      firstName !== '' &&
      lastName !== '' &&
      dateOfBirth !== '' &&
      startDate !== '' &&
      street !== '' &&
      city !== '' &&
      zipCode !== ''
    ) {
      dispatch(
        employeeAdd({
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          startDate: startDate,
          street: street,
          city: city,
          state: state.value,
          zipCode: zipCode,
          department: department,
        }),
      );
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const _onSelectState = e => {
    setState(e);
  };
  const _onSelectDepartment = e => {
    setDepartment(e.value);
  };
  return (
    <div className="App">
      {show ? <Modale params={params}>Employee created !</Modale> : null}
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>

        <h2>Create Employee</h2>
        {error ? (
          <h3 style={{color: 'red'}}>Error - all fields are required</h3>
        ) : null}
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" required={true} />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" required={true} />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            required={true}
            selected={dateOfBirth}
            onChange={date => setDateOfBirth(date)}
          />
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            required={true}
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" required={true} />

            <label htmlFor="city">City</label>
            <input id="city" type="text" required={true} />

            <label htmlFor="state">State</label>
            <Dropdown
              onChange={_onSelectState}
              options={states}
              value={states[0].value}
              placeholder="Select an option"
            />
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" required={true} />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Dropdown
            onChange={_onSelectDepartment}
            options={departments}
            value={departments[0]}
            placeholder="Select an option"
          />
        </form>

        <button className="saveButton" disabled={show} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
export default App;
