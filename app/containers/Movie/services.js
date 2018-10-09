import { movieDetails } from '../../dataServices/data-services';
import { errorHandler } from '../../dataServices/common';

export const getMovieDetails = id =>
  movieDetails(id)
    .then(res => res.data)
    .catch(err => errorHandler(err));
