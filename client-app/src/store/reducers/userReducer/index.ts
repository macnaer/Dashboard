import { UserActions, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  error: null,
  loading: false,
  isAuth: false,
  selectedUser: null,
  users: [],
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
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
    case UserActionTypes.FINISH_REQUEST:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case UserActionTypes.SELECT_USER:
      return { ...state, selectedUser: action.payload };
    case UserActionTypes.LOGOUT_USER:
      return {
        user: null,
        message: null,
        error: null,
        loading: false,
        isAuth: false,
        selectedUser: null,
        users: [],
      };
    case UserActionTypes.ALL_USERS_LOADED:
      return {
        ...state,
        loading: false,
        message: action.payload.Message,
        users: action.payload.Payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
