import {
  DISPATCH_NAVIGATION
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case DISPATCH_NAVIGATION:
        console.log('navigationPropReducer');
        return { navigation: action.payload };
    default:
        return state;
  }
};
