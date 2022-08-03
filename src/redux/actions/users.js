import axios from "axios";
import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,  
} from "../types/actionTypes";

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersError = (error) => {
  return {
    type: GET_USERS_ERROR,
    payload: error,
  };
};

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(process.env.REACT_APP_BASEURL_USERS);
    //const data = await res.json();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: error,
    });
  }
};