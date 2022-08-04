import axios from "axios";
import {
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_ERROR,
 
} from "../types/actionTypes";

/* --- Get User --- */
export const getUserByIdSuccess = (user) => {
    return {
      type: GET_USER_BY_ID_SUCCESS,
      payload: user,
    };
  };
  
  export const getUserByIdError = (error) => {
    return {
      type: GET_USER_BY_ID_ERROR,
      payload: error,
    };
  };
  
  export const getUserById = () => async (dispatch) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL_USERS}/9`);
      
      dispatch({
        type: GET_USER_BY_ID_SUCCESS,
        payload: response.data,      
      });
      /*console.log(response.data);*/
      
    } catch (error) {
      dispatch({
        type: GET_USER_BY_ID_ERROR,
        payload: error,
      });
    }
  };