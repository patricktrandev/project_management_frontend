import axios from "axios";
import {
  FETCH_ALL_PROJECT_FAIL,
  FETCH_ALL_PROJECT_REQUEST,
  FETCH_ALL_PROJECT_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  SEARCH_PROJECT_FAIL,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
} from "../constants/projectConstants";
export const getProjectsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ALL_PROJECT_REQUEST,
    });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    let url = `http://localhost:5454/api/projects`;
    const { data } = await axios.get(url, config);
    console.log("first load project");
    dispatch({
      type: FETCH_ALL_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_PROJECT_FAIL,
      payload: err.response.data?.message,
    });
  }
};
export const getProjectsSearchAction =
  (keyword = "", tags = "", category = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_PROJECT_REQUEST,
      });
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      let url = `http://localhost:5454/api/projects`;
      if (keyword !== "" && category === "" && tags === "") {
        url = url + `?name=${keyword}`;
      } else {
        url = url + `&name=${keyword}`;
      }
      if (
        keyword === "" &&
        category !== "" &&
        tags === "" &&
        category != "all"
      ) {
        url = url + `?category=${category}`;
      } else {
        url = url + `&category=${category}`;
      }
      if (keyword === "" && tags !== "" && category === "" && tags !== "all") {
        url = url + `?tags=${tags}`;
      } else {
        url = url + `&tags=${tags}`;
      }

      console.log(url);
      const { data } = await axios.get(url, config);
      console.log(data);
      dispatch({
        type: SEARCH_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_PROJECT_FAIL,
        payload: err.response.data?.message,
      });
    }
  };
export const getSingleHotelAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5454/api/projects${id}`);

    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: err.response?.data?.message,
    });
  }
};
