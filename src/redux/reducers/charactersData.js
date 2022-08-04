import {
    GET_CHARACTERS_ERROR,    
    GET_CHARACTERS_SUCCESS,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR, 
  } from '../types/actionTypes';
  
  const initialState = {
    characters: [],
    users: [],
    error: null,
  };
  
  const charactersData = (state = initialState, action) => {
    switch (action.type) {
      case GET_CHARACTERS_SUCCESS:
        return {
          ...state,
          characters: action.payload,
        };      
      case GET_CHARACTERS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
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
  
  export default charactersData;