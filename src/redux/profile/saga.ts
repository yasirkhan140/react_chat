import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { ProfileActionTypes } from "./types.ts";
import { profileApiResponseSuccess, profileApiResponseError } from "./actions.ts";

import { getProfileDetails as getProfileDetailsApi } from "../../api/profile.ts";

function* getProfileDetails() {
  try {
    const response: Promise<any> = yield call(getProfileDetailsApi);
    yield put(
      profileApiResponseSuccess(
        ProfileActionTypes.GET_PROFILE_DETAILS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      profileApiResponseError(ProfileActionTypes.GET_PROFILE_DETAILS, error)
    );
  }
}

export function* watchGetProfileDetails() {
  yield takeEvery(ProfileActionTypes.GET_PROFILE_DETAILS, getProfileDetails);
}

function* profileSaga() {
  yield all([fork(watchGetProfileDetails)]);
}

export default profileSaga;
