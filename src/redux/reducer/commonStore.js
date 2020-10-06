import { CommonActionType } from 'redux/actionType';

const initialState = {
  notification: {},
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    // case CommonActionType.getNotification:
    //   return {
    //     ...state,
    //     notification: payload,
    //   };
    default:
      return state;
  }
};
