import { combineReducers } from 'redux';
import codeReducer from './code/code.reducer';

export default combineReducers({
  code: codeReducer
});