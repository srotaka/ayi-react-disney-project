import { combineReducers } from "redux";
import charactersData   from "./charactersData";
import usersData from "./usersData";
import userById from "./userById.js"

export default combineReducers({
    charactersData: charactersData,
    usersData: usersData,
    userById: userById,
    });