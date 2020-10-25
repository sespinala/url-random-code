const INITIAL_STATE = {
  code: null
};

const codeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state, 
        code: action.payload.code
      };
  
    default:
      return state;
  }
};

export default codeReducer;