import { combineReducers } from 'redux'
import contentHeaderReducer from './contentHeaderReducer';
import contentCardReducer from './contentCardReducer';

export default combineReducers({
  contentHeaderReducer,
  contentCardReducer
});
