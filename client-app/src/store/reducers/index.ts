import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CategoryReducer from "./categoryReducer";

export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
