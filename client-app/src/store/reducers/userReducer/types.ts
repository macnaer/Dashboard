export interface UserState {
  user: any;
  message: null | string;
  loading: boolean;
  error: null | string;
  isAuth: boolean;
  users: [];
}

export enum UserActionTypes {
  START_REQUEST = "START_REQUEST",
  LOGIN_USER = "LOGIN_USER",
  LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
  SERVER_USER_ERROR = "SERVER_USER_ERROR",
  LOGOUT_USER = "LOGOUT_USER",
  ALL_USERS_LOADED = "ALL_USERS_LOADED",
}

interface AllUsersLoadedActions {
  type: UserActionTypes.ALL_USERS_LOADED;
  payload: any;
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT_USER;
}

interface StartRequestAction {
  type: UserActionTypes.START_REQUEST;
}

interface ServerErrorAction {
  type: UserActionTypes.SERVER_USER_ERROR;
  payload: string;
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN_USER;
}

interface LoginUserSuccessAction {
  type: UserActionTypes.LOGIN_USER_SUCCESS;
  payload: any;
}

interface LoginUserErrorAction {
  type: UserActionTypes.LOGIN_USER_ERROR;
  payload: any;
}

export type UserActions =
  | AllUsersLoadedActions
  | LogoutUserAction
  | ServerErrorAction
  | StartRequestAction
  | LoginUserAction
  | LoginUserErrorAction
  | LoginUserSuccessAction;
