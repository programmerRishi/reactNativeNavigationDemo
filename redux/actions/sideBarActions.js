import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR
} from './types';

const hideSideBar = () => {
  return { type: HIDE_SIDEBAR };
};

const showSideBar = () => {
  return { type: SHOW_SIDEBAR };
};

export { showSideBar, hideSideBar };
