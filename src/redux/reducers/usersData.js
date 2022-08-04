import {
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from "../types/actionTypes";

const initialState = {
  users: [],
  login: false,
  register: false,
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
    case LOGIN_SUCCESS:
      return {
        login: true,
      };
    case LOGOUT_SUCCESS:
      return {
        login: false,
      };
    case REGISTER_SUCCESS:
      return {
        login: true,
      };
    default:
      return state;
  }
};

export default usersData;
