/*
 *
 * AppDrawerToggle reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_APP_DRAWER } from './constants';

const initialState = fromJS({
  appDrawerOpen: false,
});

function appDrawerToggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_APP_DRAWER:
      return state.set('appDrawerOpen', !state.get('appDrawerOpen'));
    default:
      return state;
  }
}

export default appDrawerToggleReducer;
