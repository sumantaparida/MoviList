/*
 *
 * List actions
 *
 */

import { DEFAULT_ACTION, GET_LIST } from './constants';
import { getListServices } from './services';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getListAction() {
  return {
    type: GET_LIST,
    payload: getListServices(),
  };
}
