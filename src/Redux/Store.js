 import {
   legacy_createStore,
   combineReducers,
   applyMiddleware,
   compose,
 } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";
import { dashboardreducer } from "./Dashboard/reducer";
import {BookCarReducer} from './BookingCar/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard : dashboardreducer,
  mybookcars: BookCarReducer,

});

 export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

