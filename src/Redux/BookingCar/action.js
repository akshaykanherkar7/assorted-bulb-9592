import { GET_CAR } from "./actionType";
import axios from "axios";
// const getCarRequest = (payload) => {
//   return {
//     type: GET_CAR_REQUEST,
//     payload,
//   };
// };

const getCar = (payload) => {
  return {
    type: GET_CAR,
    payload,
  };
};

// const getCarFailure = (payload) => {
//   return {
//     type: GET_CAR_FAILURE,
//     payload,
//   };
// };


const getCarById = (payload) => (dispatch) => {
  //   dispatch(getCarRequest);
  axios
    .get(`http://localhost:8080/cars`,payload)
    .then((res) => dispatch(getCar(res.data)))
    // console.log(data)
    .catch((err) => {
      //   dispatch((err));
    });
};

export { getCarById };