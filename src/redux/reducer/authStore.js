import { AuthActionType } from 'redux/actionType';

const initialState = {
  tokenDetails: {},
};

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case AuthActionType.getTokenDetails:
      return {
        ...state,
        tokenDetails: payload,
      };
    default:
      return state;
  }
};
