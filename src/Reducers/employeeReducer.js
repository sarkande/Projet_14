const employeeReducer = (state = {}, action) => {
   switch (action.type) {
      case "ADD":
         console.log(action);
         return {
            form: action.form,
         };
         break;
      case "EDIT":
         break;
      case "GET":
         break;
      default:
         return state;
   }
};

export default employeeReducer;
