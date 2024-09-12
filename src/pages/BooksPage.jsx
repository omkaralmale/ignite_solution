import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import {
  fetchBooksByCategory,
  fetchBooksBySearch,
  fetchBooksEmpty,
} from "../redux/actions";
import BackArrow from "../components/BackArrow";
import { Loader } from "rsuite";
import "rsuite/Loader/styles/index.css";

const BooksPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookByCategoryReducer);
  const booksSearch = useSelector((state) => state.bookBySearchReducer);
  const [searchTerm, setSearchTerm] = useState("");

  const combinedBooks = searchTerm ? booksSearch?.data : books?.data;

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchBooks = () => {
      if (searchTerm) {
        dispatch(fetchBooksBySearch({ searchTerm, page }));
      } else {
        dispatch(fetchBooksByCategory({ category, page }));
      }
    };

    fetchBooks();
  }, [category, searchTerm, page, dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
    setHasMore(true);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;

    if (bottom && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const container = document.getElementById("scrollable-container");
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  useEffect(() => {
    // if (books?.data?.length === 0) {
    //   setHasMore(false);
    // }
    return () => {
      dispatch(fetchBooksEmpty());
    };
  }, []);

  if (books?.error) {
    return (
      <div className="w-screen h-screen text-4xl flex justify-center items-center">
        Error loading books: {books?.error}
      </div>
    );
  }

  return (
    <div id="scrollable-container" className="overflow-auto h-screen">
      <div className="lg:px-48 px-10 w-full mt-10">
        <BackArrow title={category} />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
        <div className="bg-[#F8F7FF] w-full my-4 py-10">
          <div className="lg:px-48 px-10 w-full pb-20">
            <BookList books={combinedBooks} />
            {hasMore || books?.loading ? (
              <div className="flex justify-center mt-4">
                <Loader content="loading ..." vertical speed={"normal"} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
