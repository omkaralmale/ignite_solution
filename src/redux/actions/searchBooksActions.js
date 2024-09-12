import {
  FETCH_BOOKS_SEARCH,
  FETCH_BOOKS_SEARCH_SUCCESS,
  FETCH_BOOKS_SEARCH_FAILURE,
  FETCH_BOOKS_SEARCH_EMPTY,
} from "../../constants";

export const fetchBooksBySearch = (payload) => ({
  type: FETCH_BOOKS_SEARCH,
  payload,
});

export const fetchBooksBySearchSuccess = (payload) => ({
  type: FETCH_BOOKS_SEARCH_SUCCESS,
  payload,
});

export const fetchBooksBySearchFailure = (payload) => ({
  type: FETCH_BOOKS_SEARCH_FAILURE,
  payload,
});
export const fetchBooksBySearchEmpty = () => ({
  type: FETCH_BOOKS_SEARCH_EMPTY,
});
