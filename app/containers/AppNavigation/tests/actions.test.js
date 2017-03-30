
import {
  toggleAppDrawer,
} from '../actions';
import {
  TOGGLE_APP_DRAWER,
} from '../constants';

describe('AppNavigation actions', () => {
  describe('Default Action', () => {
    it('has a type of TOGGLE_APP_DRAWER', () => {
      const expected = {
        type: TOGGLE_APP_DRAWER,
      };
      expect(toggleAppDrawer()).toEqual(expected);
    });
  });
});
