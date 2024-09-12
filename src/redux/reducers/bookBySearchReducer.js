// bookBySearchReducer.js
import {
  FETCH_BOOKS_SEARCH,
  FETCH_BOOKS_SEARCH_FAILURE,
  FETCH_BOOKS_SEARCH_SUCCESS,
  FETCH_BOOKS_SEARCH_EMPTY,
} from "../../constants";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const bookBySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SEARCH_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    case FETCH_BOOKS_SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_BOOKS_SEARCH_EMPTY:
      return {
        ...state,
        loading: false,
        data: [],
      };
    default:
      return state;
  }
};

export default bookBySearchReducer;
