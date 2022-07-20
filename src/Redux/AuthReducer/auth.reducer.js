import * as types from "./auth.actionTypes";

const initialState = {
  loginData: [],
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_REQ: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        loginData: payload,
        isLoading: false,
        isError: false,
      };
    }

    case types.REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
