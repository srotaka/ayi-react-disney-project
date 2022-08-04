import axios from "axios";

import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,  
    LOGIN_SUCCESS, 
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
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
    
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,      
    });
    console.log(response.data);
    
  } catch (error) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: error,
    });
  }
};

export function login() {
  return function (dispatch){
  return dispatch({
     type: LOGIN_SUCCESS,
     payload: true
  })
}
}

export function logout() {
  return function (dispatch){
  return dispatch({
     type: LOGOUT_SUCCESS,
     payload: false
  })
}
}

export function register() {
  return function (dispatch){
  return dispatch({
     type: REGISTER_SUCCESS,
     payload: false
  })
}
}