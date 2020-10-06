import { axiosInstance, logout } from './utilities';

export var api = async function ({ method = 'get', api, body, status = false, baseURL = 'normal' }) {
  return await new Promise((resolve, reject) => {

    // setting token
    if (!!localStorage.getItem('AuthToken'))
      axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('AuthToken');

    axiosInstance[method](`${getServiceUrl(baseURL)}${api}`, body ? body : '')
      .then((data) => {
        resolve(statusHelper(status, data));
      })
      .catch((error) => {
        try {
          if (error.response) {
            reject(statusHelper(status, error.response));
          } else {
            reject(error);
          }
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
  });
};

var statusHelper = (status, dataParam) => {
  let data = dataParam.data;
  if (data.status == 401 || data.status == 403) {
    // logout();
  }
  if (status) {
    return {
      status: data.status,
      ...data,
    };
  } else {
    return {
      message: 'Unable to Reach the server',
      ...data,
    };
  }
};

let getServiceUrl = (baseURL) => {
  let finalURL = '';

  switch (baseURL) {
    case 'normal':
      finalURL = '';
      break;
    default:
      finalURL = '';
      break;
  }

  return finalURL;
};
