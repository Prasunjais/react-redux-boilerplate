import { AuthActionType } from 'redux/actionType';
import { authApi } from 'services/apiVariables';
import { addQuery } from 'services/helperFunctions';
import { history } from 'helpers';

export const login = (body) => (dispatch, getState, { api, Toast }) => {
  return new Promise((resolve, reject) => {
    api({ ...authApi.login, body })
      .then(({ data, message, status }) => {
        if (status == 200) {
          localStorage.setItem('AuthToken', data.token);
          localStorage.setItem('AuthTypeId', data.lender_type_id);

          resolve(Toast({ type: 'success', message }));
          history.push('/admin/dashboard');
        } else {
          resolve(Toast({ type: 'error', message }));
        }
      })
      .catch(({ message }) => {
        reject(Toast({ type: 'error', message }));
      });
  });
};