import * as types from "./actionTypes";
import axios from "axios";

// tt
export const getCars = (params) => (dispatch) => {
  dispatch({ type: types.GET_CARS_REQUEST });
  axios
    .get("https://heroku-json-server1.herokuapp.com/api/cars", params)
    .then((r) => dispatch({ type: types.GET_CARS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_CARS_FAILURE }));
};
