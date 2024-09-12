import {
  FETCH_BOOKS_CATEGORY,
  FETCH_BOOKS_CATEGORY_SUCCESS,
  FETCH_BOOKS_CATEGORY_FAILURE,
  FETCH_BOOKS_EMPTY,
} from "../../constants";

export const fetchBooksByCategory = (category) => ({
  type: FETCH_BOOKS_CATEGORY,
  payload: category,
});

export const fetchBooksByCategorySuccess = (books) => ({
  type: FETCH_BOOKS_CATEGORY_SUCCESS,
  payload: books,
});

export const fetchBooksByCategoryFailure = (error) => ({
  type: FETCH_BOOKS_CATEGORY_FAILURE,
  payload: error,
});
export const fetchBooksEmpty = () => ({
  type: FETCH_BOOKS_EMPTY,
});
