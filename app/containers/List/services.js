import { listServices } from '../../dataServices/data-services';
import { errorHandler } from '../../dataServices/common';

export const getListServices = () =>
  listServices()
    .then(res => res.data)
    .catch(err => errorHandler(err));
