import { CategoryActionTypes, CategoryActions, CategoryState } from "./types";

const initialState: CategoryState = {
  message: null,
  error: null,
  loading: false,
  categories: [],
  selectedCategory: null,
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
      return {
        ...state,
        loading: false,
        message: action.payload.Message,
        categories: action.payload.Payload,
      };
    case CategoryActionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
