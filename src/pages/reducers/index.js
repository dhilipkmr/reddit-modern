import { combineReducers } from 'redux'
import headerSearch from './headerSearch'; 
import homeReducer from './HomeReducer';

export default combineReducers({
  headerSearch,
  homeReducer
});
