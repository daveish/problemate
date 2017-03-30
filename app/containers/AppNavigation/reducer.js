/*
 *
 * AppNavigation reducer
 *
 */

import { fromJS } from 'immutable';
import { APP_DRAWER_ACTIVE, TOGGLE_APP_DRAWER } from './constants';

const initialState = fromJS({
  appDrawerActive: APP_DRAWER_ACTIVE,
});

function appNavigationReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_APP_DRAWER:
      return state.set('appDrawerActive', !state.appDrawerActive);
    default:
      return state;
  }
}

export default appNavigationReducer;
