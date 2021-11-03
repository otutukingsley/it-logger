import { combineReducers } from "redux";
import LogReducer from "./logReducer";


export default combineReducers({
    log: LogReducer,
})