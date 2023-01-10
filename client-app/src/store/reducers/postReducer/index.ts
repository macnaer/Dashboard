import { getJSDocReturnType } from "typescript";
import { PostActionTypes, PostActions, PostState } from "./types";

const initialState: PostState = {
  posts: [],
  message: null,
  loading: false,
  error: null,
  singlePost: null,
};

const PostReducer = (state = initialState, action: PostActions): PostState => {
  switch (action.type) {
    case PostActionTypes.START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.FINISH_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case PostActionTypes.ALL_POSTS_LOADED:
      return {
        ...state,
        loading: false,
        posts: action.payload.Payload,
        message: action.payload.Message,
      };
    default:
      return state;
  }
};

export default PostReducer;
