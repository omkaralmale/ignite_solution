import { call, put } from "redux-saga/effects";
import { GET_API } from "../../services/API_Servies";
import {
  fetchBooksBySearchFailure,
  fetchBooksBySearchSuccess,
} from "../actions/searchBooksActions";

function* fetchBooksBySearchSaga(action) {
  const path = `/books?search=${action?.payload?.searchTerm}&page=${action?.payload?.page}`;
  try {
    const response = yield call(GET_API, path);

    yield put(fetchBooksBySearchSuccess(response?.results));
  } catch (error) {
    yield put(fetchBooksBySearchFailure(error.message));
  }
}

export default fetchBooksBySearchSaga;
