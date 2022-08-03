import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,  
  } from '../types/actionTypes';
  
  const initialState = {
    users: [],
    error: null,
  };
  
  const usersData = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
        };      
      case GET_USERS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default usersData;