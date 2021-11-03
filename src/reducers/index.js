import { combineReducers } from "redux";
import LogReducer from "./logReducer";
import TechReducer from "./techReducer";


export default combineReducers({
    log: LogReducer,
    tech: TechReducer
})