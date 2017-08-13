import { createSelector } from 'reselect';

/**
 * Direct selector to the appDrawer state domain
 */
const selectAppDrawer = (state) => state.get('appDrawer');

const selectAppDrawerOpen = createSelector(
  selectAppDrawer,
  (appDrawerState) => appDrawerState.get('open'),
);

export {
  selectAppDrawer,
  selectAppDrawerOpen,
};
