export const employeeAdd = (form) => (dispatch) => {
   dispatch({ type: "ADD", form: form });
};
