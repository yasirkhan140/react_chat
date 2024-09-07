import { APIClient } from "./apiCore.ts";
import * as url from "./urls.ts";

const api = new APIClient();

const getProfileDetails = () => {
  return api.get(url.GET_PROFILE_DETAILS);
};

const getSettings = () => {
  return api.get(url.GET_USER_SETTINGS);
};
const updateSettings = (field: string, value: any) => {
  return api.update(url.UPDATE_ETTINGS, {
    field: field,
    value: value,
  });
};

export { getProfileDetails, getSettings, updateSettings };
