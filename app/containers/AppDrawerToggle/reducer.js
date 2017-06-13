/*
 *
 * AppDrawerToggle reducer
 *
 */

import { fromJS } from 'immutable';
import { CLOSE_APP_DRAWER, TOGGLE_APP_DRAWER } from './constants';

const initialState = fromJS({
  appDrawerOpen: false,
});

function appDrawerToggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_APP_DRAWER:
      return state.set('appDrawerOpen', !state.get('appDrawerOpen'));
    case CLOSE_APP_DRAWER:
      return state.set('appDrawerOpen', false);
    default:
      return state;
  }
}

export default appDrawerToggleReducer;
