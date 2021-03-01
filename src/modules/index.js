import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import foodmenus from './foodmenus';

const rootReducer = combineReducers({
  counter,
  todos,
  foodmenus,
});

export default rootReducer;
