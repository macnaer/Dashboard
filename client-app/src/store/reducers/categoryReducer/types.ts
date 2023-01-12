export interface CategoryState {
  categories: [];
  message: null | string;
  loading: boolean;
  error: null | string;
  selectedCategory: any;
}

export enum CategoryActionTypes {
  START_REQUEST = "START_REQUEST",
  FINISH_REQUEST = "FINISH_REQUEST",
  ALL_CATEGORIES_LOADED = "ALL_USERS_LOADED",
  SERVER_USER_ERROR = "SERVER_USER_ERROR",
  SELECT_CATEGORY = "SELECT_CATEGORY",
  CATEGORY_UPDATED = "CATEGORY_UPDATED",
}

interface CategoryUpdatedActions {
  type: CategoryActionTypes.CATEGORY_UPDATED;
  payload: string;
}
interface SelectedCategoryActions {
  type: CategoryActionTypes.SELECT_CATEGORY;
  payload: any;
}

interface AllCategoriesActions {
  type: CategoryActionTypes.ALL_CATEGORIES_LOADED;
  payload: any;
}

interface FinishRequestAction {
  type: CategoryActionTypes.FINISH_REQUEST;
}

interface StartRequestAction {
  type: CategoryActionTypes.START_REQUEST;
}

interface ServerErrorAction {
  type: CategoryActionTypes.SERVER_USER_ERROR;
  payload: string;
}

export type CategoryActions =
  | CategoryUpdatedActions
  | SelectedCategoryActions
  | FinishRequestAction
  | AllCategoriesActions
  | ServerErrorAction
  | StartRequestAction;
