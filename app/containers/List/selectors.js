import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the list state domain
 */

const selectListDomain = state => state.get('list', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by List
 */

const makeSelectList = () =>
  createSelector(selectListDomain, substate => substate.toJS());

export default makeSelectList;
export { selectListDomain };
