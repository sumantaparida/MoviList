import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movie state domain
 */

const selectMovieDomain = state => state.get('movie', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Movie
 */

const makeSelectMovie = () =>
  createSelector(selectMovieDomain, substate => substate.toJS());

export default makeSelectMovie;
export { selectMovieDomain };
