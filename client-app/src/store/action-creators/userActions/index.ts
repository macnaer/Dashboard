import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import {
  login,
  removeAccessToken,
  setAccessToken,
} from "../../../services/api-user-service";
import jwtDecode from "jwt-decode";

export const LoginUser = (user: any) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUEST });
      const data = await login(user);
      if (!data.IsSuccess) {
        dispatch({
          type: UserActionTypes.LOGIN_USER_ERROR,
          payload: data.Message,
        });
        toast.error(data.Message);
      } else {
        const { Token, Message } = data;
        setAccessToken(Token);
        AuthUser(Token, Message, dispatch);
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.SERVER_USER_ERROR,
        payload: "Unknown error",
      });
      console.log("Catch ", e);
    }
  };
};

export const LogoutUser = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    removeAccessToken();
    dispatch({ type: UserActionTypes.LOGOUT_USER });
  };
};

export const AuthUser = (
  token: string,
  Message: string,
  dispatch: Dispatch<UserActions>
) => {
  const decodedToken = jwtDecode(token) as any;
  dispatch({
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: { decodedToken, Message },
  });
};
