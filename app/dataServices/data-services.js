import { makeHttpRequest as makeHttpCall } from '../dataServices/common';
import { listApi } from '../constants/endpoint';
const key = '680edef4d18ed58192b864c5dee2961c';
export function listServices() {
  const url = `${listApi()}list/92674`;
  const jsonData = {
    api_key: key,
  };
  const config = {
    url,
    method: 'GET',
    params: jsonData,
  };
  return makeHttpCall(config);
}

export function movieDetails(id) {
  const url = `${listApi()}movie/${id}`;
  const jsonData = {
    api_key: key,
  };
  const config = {
    url,
    method: 'GET',
    params: jsonData,
  };
  return makeHttpCall(config);
}

export default {
  listServices,
  movieDetails,
};
