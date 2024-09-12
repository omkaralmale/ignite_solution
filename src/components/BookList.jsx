/* eslint-disable react/prop-types */

import BookCard from "./BookCard";

const BookList = ({ books = [] }) => {
  return (
    <div className="flex flex-wrap gap-10 sm:gap-6 md:gap-8 justify-center">
      {books?.map((book, index) => (
        <BookCard key={book.id + book.title + index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
