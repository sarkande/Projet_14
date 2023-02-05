const initialState = {
  data: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(action);
      return {...state, data: [...state.data]};

    default:
      return state;
  }
};

export default employeeReducer;
