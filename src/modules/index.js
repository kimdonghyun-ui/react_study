import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import menus from './menus';

const rootReducer = combineReducers({
  counter,
  todos,
  menus,
});

export default rootReducer;
