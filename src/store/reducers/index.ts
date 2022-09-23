import { combineReducers } from 'redux';
import { organizeUserReducer } from './organizeUserReducer';
import { usersReducer } from './userReducer';
import { organizationReducer } from './organizationReducer';
import { taskboardsReducer } from './taskboardsReducer';

export default combineReducers({
  usersReducer,
  organizeUserReducer,
  organizationReducer,
  taskboardsReducer,
});
