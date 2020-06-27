import { combineReducers } from "redux";
import usersReducer from "./users/users.reducers";
const rootReducers = combineReducers({
  users: usersReducer
});

export default rootReducers;
