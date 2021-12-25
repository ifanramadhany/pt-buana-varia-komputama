import { combineReducers } from "redux";
import memberReducer from "./memberReducer"

const reducers = combineReducers({
  memberState: memberReducer,
})

export default reducers;