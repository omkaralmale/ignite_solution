import {
  FETCH_BOOKS_CATEGORY,
  FETCH_BOOKS_CATEGORY_FAILURE,
  FETCH_BOOKS_CATEGORY_SUCCESS,
  FETCH_BOOKS_EMPTY,
} from "../../constants";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const bookByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_CATEGORY_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    case FETCH_BOOKS_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_BOOKS_EMPTY:
      return {
        ...state,
        error: action.payload,
        loading: false,
        data: [],
      };
    default:
      return state;
  }
};

export default bookByCategoryReducer;
