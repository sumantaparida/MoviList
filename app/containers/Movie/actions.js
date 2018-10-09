/*
 *
 * Movie actions
 *
 */

import { DEFAULT_ACTION, MOVIE } from './constants';
import { getMovieDetails } from './services';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getMovieDetailsAction(id) {
  return {
    type: MOVIE,
    payload: getMovieDetails(id),
  };
}
