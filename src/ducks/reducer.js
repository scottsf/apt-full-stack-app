const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
};

const CREATE_HOUSE = 'CREATE_HOUSE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HOUSE:
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

export default reducer;

// export default const = () => {

// }
