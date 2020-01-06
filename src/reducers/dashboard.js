
import {
  DashBoard_SUCCESS,
} from '../actions/DashBoard-actions-types copy';

const initialState = {
  token: '',
  DashBoardDetails: null,
};

export default function dashboard(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case DashBoard_SUCCESS:

      return {
        ...state,
        DashBoardDetails: payload,
      };
    default:
    return state
  }
}

