import axios from "axios";
import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS,  
} from "../types/actionTypes";

export const getCharactersSuccess = (characters) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const getCharactersError = (error) => {
  return {
    type: GET_CHARACTERS_ERROR,
    payload: error,
  };
};

export const getCharacters = () => async (dispatch) => {
  try {
    const response = await axios.get(process.env.REACT_APP_BASEURL);
    //const data = await res.json();
    dispatch({
      type: GET_CHARACTERS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: error,
    });
  }
};
