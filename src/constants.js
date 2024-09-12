import {
  adventure,
  drama,
  fiction,
  humour,
  philosophy,
  politics,
  history,
} from "./assets/Images";

export const categories = [
  { label: "fiction", icon: fiction },
  { label: "drama", icon: drama },
  { label: "humor", icon: humour },
  { label: "politics", icon: politics },
  { label: "philosophy", icon: philosophy },
  { label: "history", icon: history },
  { label: "adventure", icon: adventure },
];

export const FETCH_BOOKS_SEARCH = "FETCH_BOOKS_SEARCH";
export const FETCH_BOOKS_SEARCH_SUCCESS = "FETCH_BOOKS_SEARCH_SUCCESS";
export const FETCH_BOOKS_SEARCH_FAILURE = "FETCH_BOOKS_SEARCH_FAILURE";
export const FETCH_BOOKS_SEARCH_EMPTY = "FETCH_BOOKS_SEARCH_EMPTY";

export const FETCH_BOOKS_CATEGORY = "FETCH_BOOKS_CATEGORY";
export const FETCH_BOOKS_CATEGORY_SUCCESS = "FETCH_BOOKS_CATEGORY_SUCCESS";
export const FETCH_BOOKS_CATEGORY_FAILURE = "FETCH_BOOKS_CATEGORY_FAILURE";
export const FETCH_BOOKS_EMPTY = "FETCH_BOOKS_EMPTY";
