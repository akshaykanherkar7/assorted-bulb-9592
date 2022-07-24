import axios from "axios";
import {
  DELETE_BOOKING_DETAIL,
  GET_BOOKING_DETAIL,
  POST_BOOKING_DETAIL,
  SET_USER_REQUEST,
} from "./actionTypes";

const setUserRequest = (payload) => {
  return {
    type: SET_USER_REQUEST,
    payload,
  };
};

export { setUserRequest };

export const postBookingData = (data) => (dispatch) => {
  axios
    .post("https://heroku-json-server1.herokuapp.com/api/bookings", data)
    .then((res) => {
      dispatch({ type: POST_BOOKING_DETAIL });
    });
};
export const getBookingData = () => (dispatch) => {
  axios
    .get("https://heroku-json-server1.herokuapp.com/api/bookings")
    .then((res) => {
      dispatch({ type: GET_BOOKING_DETAIL, payload: res.data });
    });
};

export const deleteBookingData = (id) => (dispatch) => {
  return axios
    .delete(`https://heroku-json-server1.herokuapp.com/api/bookings/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_BOOKING_DETAIL });
    });
};
