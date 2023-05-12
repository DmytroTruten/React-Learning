import { configureStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
}

const store = configureStore(countReducer)
