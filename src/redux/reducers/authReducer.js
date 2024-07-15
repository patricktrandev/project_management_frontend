import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/authConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
    case REGISTER_REQUEST: {
      return {
        loading: true,
        isAuthenticated: false,
      };
    }

    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    }

    case LOGIN_FAIL:
    case REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
      //console.log(state)
    }
    case LOAD_USER_FAIL: {
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    }
    case LOGOUT_FAIL: {
      return {
        ...state,
        error: action.payload,
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
