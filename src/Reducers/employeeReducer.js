const initialState = {
  data: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case 'EDIT':
      console.log('EDIT');
      break;
    default:
      return state;
  }
};

export default employeeReducer;
