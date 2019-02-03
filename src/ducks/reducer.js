const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  imgUrl: '',
  monthlyMA: 0,
  desiredMR: 0,
  user: ''
};

const UPDATE_HOUSE = 'UPDATE_HOUSE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
const CLEAR_STATE = 'CLEAR_STATE';
const UPDATE_USER = 'UPDATE_USER';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE:
      return Object.assign({}, state, action.payload);
    case UPDATE_IMG:
      return {...state, imgUrl: action.payload};
    case UPDATE_AMOUNT:
      return {...state, ...action.payload};
    case CLEAR_STATE:
      return action.payload;
    case UPDATE_USER:
      console.log(action.payload)
      return {...state, user: action.payload};
    default:
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
export const updateAmount = amount => ({type: UPDATE_AMOUNT, payload: amount});
export const clearState = () => ({type: CLEAR_STATE, payload: initialState});
export const  updateUser = (user) => ({type: UPDATE_USER, payload: user})
