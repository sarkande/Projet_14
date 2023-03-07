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

    default:
      return state;
  }
};

export default employeeReducer;
