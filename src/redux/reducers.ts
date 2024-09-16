import { combineReducers } from "redux";

import ForgetPassword from "./auth/forgetpwd/reducer.ts";
import Login from "./auth/login/reducer.ts";
import Register from "./auth/register/reducer.ts";
import Layout from "./layout/reducer.ts";
import Profile from "./profile/reducer.ts";
import Contacts from "./contacts/reducer.ts";
import Calls from "./calls/reducer.ts";
import Bookmarks from "./bookmarks/reducer.ts";
import Settings from "./settings/reducer.ts";
import Chats from "./chats/reducer.ts";

export default combineReducers({
  ForgetPassword,
  Login,
  Register,
  Layout,
  Profile,
  Contacts,
  Calls,
  Bookmarks,
  Settings,
  Chats,
});
