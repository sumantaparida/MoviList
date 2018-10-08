import axios from 'axios';

// axios.interceptors.request.use(config => {
//   const c = config;
//   c.headers['Content-Type'] = 'application/json';
//   return c;
// });

axios.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(error),
);

export const makeHttpRequest = config =>
  axios
    .request({
      method: config.method || 'GET',
      baseURL: config.baseURL,
      url: config.url,
      data: config.data,
      headers: config.headers,
      params: config.params || {},
      timeout: config.timeout,
      responseType: config.responseType ? config.responseType : 'json',
    })
    .then(res => res)
    .catch(err => errorHandler(err));

export const errorHandler = err => {
  throw err;
};

export default {
  makeHttpRequest,
  errorHandler,
};
