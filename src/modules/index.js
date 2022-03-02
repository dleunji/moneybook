import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';
import entry from './entry';
import history from './history';
const rootReducer = combineReducers({
  home,
  auth,
  entry,
  history,
});

export default rootReducer;
