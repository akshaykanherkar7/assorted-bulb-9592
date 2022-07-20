import axios from "axios";
import * as types from "./auth.actionTypes";

export const registerSignUpAPI = (user) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQ });
  return axios
    .post("http://localhost:8080/loginData", user)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILED, payload: e });
    });
};
