import { createSelector } from 'reselect';

/**
 * Direct selector to the appNavigation state domain
 */
const selectAppNavigationDomain = () => (state) => state.get('appNavigation');

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppNavigation
 */

const makeSelectAppNavigation = () => createSelector(
  selectAppNavigationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAppNavigation;
export {
  selectAppNavigationDomain,
};
