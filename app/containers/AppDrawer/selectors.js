import { createSelector } from 'reselect';

/**
 * Direct selector to the appDrawer state domain
 */
const selectAppDrawerDomain = () => (state) => state.get('appDrawer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppDrawer
 */

const makeSelectAppDrawerOpen = () => createSelector(
  selectAppDrawerDomain(),
  (appDrawer) => appDrawer.get('appDrawerOpen'),
);

export default makeSelectAppDrawerOpen;
export {
  selectAppDrawerDomain,
};
