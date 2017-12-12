import { combineReducers } from 'redux';


// the books reducer is added as a key/value pair to our global app state
const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
