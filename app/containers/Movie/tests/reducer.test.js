import { fromJS } from 'immutable';
import movieReducer from '../reducer';

describe('movieReducer', () => {
  it('returns the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(fromJS({}));
  });
});
