import {
  DISPATCH_NAVIGATION
} from './types';

const dispatchNavigation = (navigation) => {
  return {
    type: DISPATCH_NAVIGATION,
    payload: navigation
  };
};

export { dispatchNavigation };
