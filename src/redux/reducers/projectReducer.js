import {
  CLEAR_ERRORS,
  FETCH_ALL_PROJECT_FAIL,
  FETCH_ALL_PROJECT_REQUEST,
  FETCH_ALL_PROJECT_SUCCESS,
  SEARCH_PROJECT_FAIL,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
} from "../constants/projectConstants";

export const projectReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_PROJECT_REQUEST:
    case SEARCH_PROJECT_REQUEST:
      return {
        loading: true,
        projects: [],
      };
    case FETCH_ALL_PROJECT_SUCCESS:
    case SEARCH_PROJECT_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case FETCH_ALL_PROJECT_FAIL:
    case SEARCH_PROJECT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
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
