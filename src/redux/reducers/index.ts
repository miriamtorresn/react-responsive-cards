import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import categoriesReducer from "./categoriesReducer";

// Preparing in case you're using more reducers
const rootReducer = combineReducers({
  cardsReducer,
  categoriesReducer
});

export default rootReducer;
