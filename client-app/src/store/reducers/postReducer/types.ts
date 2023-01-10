export interface PostState {
  posts: any;
  message: null | string;
  loading: boolean;
  error: null | string;
  singlePost: any;
}

export enum PostActionTypes {
  START_REQUEST = "START_REQUEST",
  FINISH_REQUEST = "FINISH_REQUEST",
  ALL_POSTS_LOADED = "ALL_POSTS_LOADED",
  SERVER_USER_ERROR = "SERVER_USER_ERROR",
}

interface StartRequestAction {
  type: PostActionTypes.START_REQUEST;
}

interface FinishRequestAction {
  type: PostActionTypes.FINISH_REQUEST;
  payload: any;
}

interface AllPostsActions {
  type: PostActionTypes.ALL_POSTS_LOADED;
  payload: any;
}

interface ServerErrorAction {
  type: PostActionTypes.SERVER_USER_ERROR;
  payload: string;
}

export type PostActions =
  | ServerErrorAction
  | FinishRequestAction
  | AllPostsActions
  | StartRequestAction;
