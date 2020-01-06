
import {
  USER_SUCCESS,
} from '../actions/user-actions-types';

const initialState = {
  token: '',
  userDetails: null,
};

export default function user(state = initialState, {

  payload, type,
  
}) {
  switch (type) {
    case USER_SUCCESS:

      return {
        ...state,
        userDetails: payload,
      };
    default:
    return state
  }
}

