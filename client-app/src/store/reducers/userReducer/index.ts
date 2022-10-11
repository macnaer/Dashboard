import { UserActions, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  error: null,
  loading: false,
  isAuth: false,
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  console.log("UserReducer", action);
  switch (action.type) {
    case UserActionTypes.START_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.decodedToken,
        loading: false,
        isAuth: true,
        message: action.payload.Message,
      };
    case UserActionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
