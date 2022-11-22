import { CategoryActionTypes, CategoryActions, CategoryState } from "./types";

const initialState: CategoryState = {
  message: null,
  error: null,
  loading: false,
  categories: [],
};

const CategoryReducer = (
  state = initialState,
  action: CategoryActions
): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CategoryActionTypes.FINISH_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case CategoryActionTypes.ALL_CATEGORIES_LOADED:
      console.log("ALL_CATEGORIES_LOADED ", action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload.Message,
        categories: action.payload.Payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
