import { combineReducers } from "redux";
import bookByCategoryReducer from "./bookByCategoryReducer";
import configureStore from "../Store";
import rootSaga from "../sagas";
import bookBySearchReducer from "./bookBySearchReducer";
export default () => {
  const rootReducer = combineReducers({
    bookByCategoryReducer,
    bookBySearchReducer,
  });
  return configureStore(rootReducer, rootSaga);
};
