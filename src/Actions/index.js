export const employeeAdd = form => dispatch => {
  console.log(form);
  dispatch({
    type: 'ADD',
    data: {
      firstName: form.firstName,
      lastName: form.lastName,
      dateOfBirth: form.dateOfBirth,
      startDate: form.startDate,
      street: form.street,
      city: form.city,
      state: form.state,
      zipCode: form.zipCode,
      department: form.department,
      // edit: '✎',
      // delete: '❌',
    },
  });
};
