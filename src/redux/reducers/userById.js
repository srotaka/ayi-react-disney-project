import {
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_ERROR,
  } from '../types/actionTypes';
  
  const initialState = {
    userById: [],
    error: null,
  };
  
  const userById = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_BY_ID_SUCCESS:
        return {
          ...state,
          userById: action.payload,
        };      
      case GET_USER_BY_ID_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userById;