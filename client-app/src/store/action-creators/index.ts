import * as UserActionCreators from "./userActions";
import * as CategoryActionCreators from "./categoryActions";
import * as PostActionCreators from "./postActions";

export default {
  ...UserActionCreators,
  ...CategoryActionCreators,
  ...PostActionCreators,
};
