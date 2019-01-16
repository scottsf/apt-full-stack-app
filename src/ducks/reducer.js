const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  imgUrl: '',
};

const UPDATE_HOUSE = 'UPDATE_HOUSE';
const UPDATE_IMG = 'UPDATE_IMG';

export const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case UPDATE_HOUSE:
      return Object.assign({}, state, action.payload);
    case UPDATE_IMG:
      return {...state, imgUrl: action.payload};
    default:
      console.log('noooo');
      return state;
  }
};

export function createHouse(info) {
  return {
    type: UPDATE_HOUSE,
    payload: info,
  };
}

export const updateImg = img => ({type: UPDATE_IMG, payload: img});
