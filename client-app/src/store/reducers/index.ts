import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CategoryReducer from "./categoryReducer";
import PostReducer from "./postReducer";

export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  PostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
