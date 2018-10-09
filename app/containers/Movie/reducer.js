/*
 *
 * Movie reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  MOVIE_PENDING,
  MOVIE_FULFILLED,
  MOVIE_REJECTED,
} from './constants';

export const initialState = fromJS({});

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case MOVIE_PENDING:
      return state.merge({ loading: false });
    case MOVIE_FULFILLED:
      return state.merge({
        ...action.payload,
        loading: true,
      });
    case MOVIE_REJECTED:
      return state.merge({ loading: false });
    default:
      return state;
  }
}

export default movieReducer;
