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

export const initialState = fromJS({});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.merge({ loading: false });
    case GET_LIST_PENDING:
      return state.merge({ loading: false });
    case GET_LIST_FULFILLED:
      return state.merge({
        ...action.payload,
        loading: true,
      });
    case GET_LIST_REJECTED:
      return state.merge({ loading: false });
    default:
      return state;
  }
}

export default listReducer;
