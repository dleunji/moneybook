import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';

const rootReducer = combineReducers({
  home,
  auth,
});

export default rootReducer;
