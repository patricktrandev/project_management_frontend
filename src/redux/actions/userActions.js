import axios from "axios";
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
} from "../constants/authConstants";

export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    const userId = localStorage.getItem("userId");
    const { data } = await axios.get(
      `http://localhost:5454/auth/users/${userId}`
    );
    console.log(data);
    const user = { ...data };
    console.log(user);
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
