import {
  GET_BOOKING_DETAIL,
  POST_BOOKING_DETAIL,
  SET_USER_REQUEST,
} from "./actionTypes";

const initState = {
  booking: [],
  city: "",
  start_date: "",
  end_date: "",
  duration: 0,
};

const dashboardreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER_REQUEST:
      return {
        ...state,
        city: payload.city,
        start_date: payload.start_date,
        end_date: payload.end_date,
        duration: payload.duration,
      };

    case POST_BOOKING_DETAIL: {
      return { ...state };
    }

    case GET_BOOKING_DETAIL: {
      return { ...state, booking: payload };
    }

    default:
      return {
        ...state,
      };
  }
};

export { dashboardreducer };
