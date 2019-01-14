const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
};

const CREATE_HOUSE = 'CREATE_HOUSE';

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_HOUSE:
      console.log('HEEEY');
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default reducer;

export function createHouse(info) {
  return {
    type: CREATE_HOUSE,
    payload: info,
  };
}
