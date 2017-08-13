/*
 *
 * AppDrawerToggle reducer
 *
 */

import { fromJS } from 'immutable';
import { CLOSE_APP_DRAWER, TOGGLE_APP_DRAWER } from './constants';

const initialState = fromJS({
  open: false,
});

function appDrawerToggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_APP_DRAWER:
      return state.set('open', !state.get('open'));
    case CLOSE_APP_DRAWER:
      return state.set('open', false);
    default:
      return state;
  }
}

export default appDrawerToggleReducer;
