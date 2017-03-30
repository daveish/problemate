
import { fromJS } from 'immutable';
import appNavigationReducer from '../reducer';

describe('appNavigationReducer', () => {
  it('returns the initial state', () => {
    expect(appNavigationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
