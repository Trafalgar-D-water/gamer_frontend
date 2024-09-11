import signUp from "./signUp";
import login from './login'
import { combineReducers } from "redux";

const indexReducers = combineReducers({
    signUp,
    login
});

export default indexReducers;