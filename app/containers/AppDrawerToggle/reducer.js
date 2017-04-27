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
      console.log(action.type);
      return state.set('appDrawerOpen', !state.get('appDrawerOpen'));
    default:
      console.log(action.type);
      return state;
  }
}

export default appDrawerToggleReducer;
