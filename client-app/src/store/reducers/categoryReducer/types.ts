export interface CategoryState {
  categories: any;
  message: null | string;
  loading: boolean;
  error: null | string;
}

export enum CategoryActionTypes {
  START_REQUEST = "START_REQUEST",
  FINISH_REQUEST = "FINISH_REQUEST",
  ALL_CATEGORIES_LOADED = "ALL_USERS_LOADED",
  SERVER_USER_ERROR = "SERVER_USER_ERROR",
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
  | FinishRequestAction
  | AllCategoriesActions
  | ServerErrorAction
  | StartRequestAction;
