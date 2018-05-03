import { combineReducers } from 'redux';
import sideBarReducer from './sideBarReducer';
import navigationPropReducer from './navigationPropReducer';

export default combineReducers(
  {
    sideBarReducer,
    navigationPropReducer
  }
);
