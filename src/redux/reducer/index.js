import { combineReducers } from 'redux';
import authStore from './authStore';
import commonStore from './commonStore';

export const reducers = combineReducers({
  authStore,
  commonStore,
});
