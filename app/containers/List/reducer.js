/*
 *
 * List reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_LIST_PENDING,
  GET_LIST_FULFILLED,
  GET_LIST_REJECTED,
} from './constants';

export const initialState = fromJS({
  data: {},
});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_LIST_PENDING:
      return state;
    case GET_LIST_FULFILLED:
      return state.merge({
        data: action.payload,
      });
    case GET_LIST_REJECTED:
      return state;
    default:
      return state;
  }
}

export default listReducer;
