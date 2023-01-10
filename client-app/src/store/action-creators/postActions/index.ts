import { Dispatch } from "react";
import { getAllPosts } from "../../../services/post-api-service";
import { PostActions, PostActionTypes } from "../../reducers/postReducer/types";
import { toast } from "react-toastify";

export const GetAllPosts = () => {
  return async (dispatch: Dispatch<PostActions>) => {
    try {
      dispatch({ type: PostActionTypes.START_REQUEST });
      const data = await getAllPosts();
      if (!data.IsSuccess) {
        dispatch({
          type: PostActionTypes.FINISH_REQUEST,
          payload: data.Message,
        });
        toast.error(data.Message);
      } else {
        console.log(data);
        dispatch({
          type: PostActionTypes.ALL_POSTS_LOADED,
          payload: data,
        });
      }
    } catch (e) {
      dispatch({
        type: PostActionTypes.SERVER_USER_ERROR,
        payload: "Unknown error",
      });
    }
  };
};
