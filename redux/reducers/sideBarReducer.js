import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR
} from '../actions/types';

const INITIAL_STATE = { showSideBar: false, disabled: true };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SHOW_SIDEBAR:
        console.log('show sidebar');
        return { showSideBar: true, disabled: false };
      case HIDE_SIDEBAR:
        console.log('hide sidebar');
        return { showSideBar: false, disabled: true };
      default:
        return INITIAL_STATE;
    }
};
