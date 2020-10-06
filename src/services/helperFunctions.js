import moment from 'moment';

export const addQuery = (dataObject, apiObject) => {
  if (!dataObject) {
    return '';
  }

  let keys = ['page', 'limit', 'search', 'token', 'PageSize', 'PageNo'];

  keys.map((key) => {
    if (dataObject.hasOwnProperty(key) && typeof dataObject[key] != 'object') {
      if (apiObject.query.hasOwnProperty(key)) {
        apiObject.addQuery = { key, payload: dataObject[key] };
      }
    } else {
      dataObject[key] &&
        Object.keys(dataObject[key]).map((keyName) => {
          if (apiObject.query.hasOwnProperty(keyName)) {
            apiObject.addQuery = { key: keyName, payload: dataObject[key][keyName] };
          }
        });
    }
  });
};

export const generateQuery = (query) => {
  let url = '';

  if (query.hasOwnProperty('url_id')) {
    url = `/${query.url_id}`;
  }

  return (
    url +
    Object.keys(query).reduce((accumulator, key, index, array) => {
      if (
        query[key] == '' ||
        query[key] == null ||
        key == 'url_id' ||
        (query[key] !== null && query[key].toString().trim() == '')
      ) {
        return accumulator;
      } else {
        return accumulator + `${index != 0 ? '&' : '?'}${key}=${query[key]}`;
      }
    }, '')
  );
};

export const getSNo = ({ totalPages, page = 1, chunk }, index) => {
  return parseInt((page - 1) * chunk) + index + 1;
};

export const phoneFormat = (data) => {
  return data ? data.replace(/[-|+]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') : data;
};

export const scrollTop = (id = 'content-page', selector = 'getElementById') => {
  var contentPageEle = document[selector](id);

  if (selector !== 'getElementById') {
    contentPageEle = contentPageEle[0];
  }

  contentPageEle &&
    contentPageEle.scrollTo &&
    contentPageEle.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};

export const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const displayImg = (file) => {
  if (typeof file === 'object') {
    return URL.createObjectURL(file);
  } else {
    return file;
  }
};

export const timeAgo = (date) => {
  var now = moment(new Date());
  var duration = moment.duration(now.diff(date));
  var hours = duration.asHours();
  let timeAgo = '';
  let time = parseFloat(hours).toFixed(1);
  if (time <= '0.3') {
    timeAgo = 'Now';
  } else if (time > '0.3' && time <= '24') {
    timeAgo = '1h ago';
  } else if (time >= '24' && time <= '48') {
    timeAgo = 'Yesterday';
  } else {
    timeAgo = moment(date).format('DD/MM/YY');
  }
  return timeAgo;
};
