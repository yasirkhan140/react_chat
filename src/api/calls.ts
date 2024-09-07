import { APIClient } from "./apiCore.ts";
import * as url from "./urls.ts";

const api = new APIClient();

const getCalls = () => {
  return api.get(url.GET_CALLS_LIST);
};

export { getCalls };
