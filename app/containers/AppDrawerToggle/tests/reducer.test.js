
import { fromJS } from 'immutable';
import appDrawerToggleReducer from '../reducer';

describe('appDrawerToggleReducer', () => {
  it('returns the initial state', () => {
    expect(appDrawerToggleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
