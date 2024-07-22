import {
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
} from "../constants/authConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST: {
      return {
        loading: true,
        isAuthenticated: false,
      };
    }

    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};
