import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { login } from "../../../services/api-user-service";
import jwtDecode from "jwt-decode";

export const LoginUser = (user: any) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUEST });
      const data = await login(user);
      console.log("LoginUser data ", data);
      if (!data.IsSuccess) {
        dispatch({
          type: UserActionTypes.LOGIN_USER_ERROR,
          payload: data.Message,
        });
        toast.error(data.Message);
      } else {
        AuthUser(data, dispatch);
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

const AuthUser = (data: any, dispatch: Dispatch<UserActions>) => {
  const { Token, Message, IsSuccess, IsAuth, Errors } = data;
  const decodedToken = jwtDecode(Token) as any;
  dispatch({
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: { decodedToken, Message, IsSuccess, IsAuth, Errors },
  });
};
