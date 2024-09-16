import { all } from "redux-saga/effects";

//auth
import registerSaga from "./auth/register/saga.ts";
import loginSaga from "./auth/login/saga.ts";
import forgetPasswordSaga from "./auth/forgetpwd/saga.ts";
import profileSaga from "./profile/saga.ts";
import LayoutSaga from "./layout/saga.ts";
import contactsSaga from "./contacts/saga.ts";
import callsSaga from "./calls/saga.ts";
import bookmarksSaga from "./bookmarks/saga.ts";
import settingsSaga from "./settings/saga.ts";
import chatsSaga from "./chats/saga.ts";

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    forgetPasswordSaga(),
    profileSaga(),
    LayoutSaga(),
    contactsSaga(),
    callsSaga(),
    bookmarksSaga(),
    settingsSaga(),
    chatsSaga(),
  ]);
}
