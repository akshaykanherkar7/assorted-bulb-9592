import * as types from "./auth.actionTypes";

const initialState = {
  isAuth: false,
  loginData: [],
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.GET_LOGINDATA_SUCCESS: {
      return { ...state, loginData: payload, isLoading: false, isError: false };
    }

    case types.CHECK_LOGIN_REQ: {
      return { ...state, isAuth: false, isLoading: true, isError: false };
    }

    case types.CHECK_LOGIN_SUCCESS: {
      let flag;
      for (let i = 0; i < state.loginData.length; i++) {
        if (
          state.loginData[i].email === payload.email &&
          state.loginData[i].password === payload.password
        ) {
          flag = true;
          localStorage.setItem("LoginData", JSON.stringify(state.loginData[i]));
          break;
        } else {
          flag = false;
        }
      }

      if (flag === true) {
        return { ...state, isAuth: true, isLoading: false, isError: false };
      } else {
        return { ...state, isAuth: false, isLoading: false, isError: false };
      }
    }

    case types.CHECK_LOGIN_FAILED: {
      return { ...state, isAuth: false, isLoading: false, isError: true };
    }

    case types.LOGOUT: {
      return { ...state, isAuth: false };
    }

    default: {
      return state;
    }
  }
};
