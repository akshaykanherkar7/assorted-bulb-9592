import axios from "axios";
import * as types from "./auth.actionTypes";

export const registerSignUpAPI = (user) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQ });
  return axios
    .post("https://heroku-json-server1.herokuapp.com/api/loginData", user)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILED, payload: e });
    });
};

export const getLoginDataAPI = () => (dispatch) => {
  dispatch({ type: types.GET_LOGINDATA_REQ });
  return axios
    .get("https://heroku-json-server1.herokuapp.com/api/loginData")
    .then((res) => {
      console.log("res:", res);
      dispatch({ type: types.GET_LOGINDATA_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_LOGINDATA_FAILED });
    });
};

export const checkLoginorNotAPI = (creds) => (dispatch) => {
  dispatch({ type: types.CHECK_LOGIN_REQ });
  return axios
    .get("https://heroku-json-server1.herokuapp.com/api/loginData")
    .then((res) => {
      dispatch({ type: types.CHECK_LOGIN_SUCCESS, payload: creds });
    })
    .catch((e) => {
      dispatch({ type: types.CHECK_LOGIN_FAILED });
    });
};
