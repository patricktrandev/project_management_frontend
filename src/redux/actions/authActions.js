import axios from "axios";
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

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(email);

    const { data } = await axios.post(
      "http://localhost:5454/auth/login",
      { email, password },
      config
    );
    console.log(data);
    if (data) {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("token", data.token);
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response?.data.message,
    });
    //console.log(err.response?.data);
  }
};
export const registerAction = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5454/auth/register",
      userData,
      config
    );

    //console.log("42", data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.success,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response?.data.message,
    });
    //console.log(err.response.data)
  }
};
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    const userId = localStorage.getItem("userId");
    const { data } = await axios.get(
      `http://localhost:5454/auth/users/${userId}`
    );
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: err.response?.data.message,
    });
  }
};
export const logoutUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: err.response?.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
