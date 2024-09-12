import { call, put } from "redux-saga/effects";
import { GET_API } from "../../services/API_Servies";
import {
  fetchBooksByCategoryFailure,
  fetchBooksByCategorySuccess,
} from "../actions/bookByCategoryActions";

function* fetchBooksByCategorySaga(action) {

  const path = `/books/?topic=${action?.payload?.category}&page=${action?.payload?.page}`;
  try {
    const response = yield call(GET_API, path);

    yield put(fetchBooksByCategorySuccess(response?.results));
  } catch (error) {
    yield put(fetchBooksByCategoryFailure(error.message));
  }
}
export default fetchBooksByCategorySaga;
