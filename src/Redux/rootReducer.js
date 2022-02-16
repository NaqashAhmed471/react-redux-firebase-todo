import { combineReducers } from "redux";
import contactReducer from "./contact/contactReducer";

const rootReducer = combineReducers({
  contactReducer,
});

export default rootReducer;
