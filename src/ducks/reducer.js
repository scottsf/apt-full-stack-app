const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  imgUrl: '',
  monthlyMA: 0,
  desiredMR: 0,
};

const UPDATE_HOUSE = 'UPDATE_HOUSE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE:
      return Object.assign({}, state, action.payload);
    case UPDATE_IMG:
      return {...state, imgUrl: action.payload};
    case UPDATE_AMOUNT:
      return {...state, ...action.payload};
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
