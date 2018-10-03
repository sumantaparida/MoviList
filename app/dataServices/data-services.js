import { makeHttpRequest as makeHttpCall } from '../dataServices/common';
import { listApi } from '../constants/endpoint';

export function listServices() {
  const jsonData = {
    api_key: '680edef4d18ed58192b864c5dee2961c',
  };
  const config = {
    url: listApi(),
    method: 'GET',
    params: jsonData,
  };
  return makeHttpCall(config);
}

export default {
  listServices,
};
