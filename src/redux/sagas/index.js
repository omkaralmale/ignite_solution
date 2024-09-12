import { all, takeLatest } from "redux-saga/effects";
import fetchBooksByCategorySaga from "./fetchBookByCategorySaga";
import { FETCH_BOOKS_CATEGORY, FETCH_BOOKS_SEARCH } from "../../constants";
import fetchBooksBySearchSaga from "./fetchBooksBySearchSaga";

function* rootSaga() {
  yield all([takeLatest(FETCH_BOOKS_CATEGORY, fetchBooksByCategorySaga)]);
  yield all([takeLatest(FETCH_BOOKS_SEARCH, fetchBooksBySearchSaga)]);
}

export default rootSaga;
