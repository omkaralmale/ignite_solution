import { useLocation, useNavigate } from "react-router";

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookClick = (book) => {
    navigate(`${location.pathname}/${book.id}`, { state: { book } });
  };

  return (
    <div
      className="w-[114px] cursor-pointer hover:scale-110 transaction ease-in-out duration-500"
      onClick={() => handleBookClick(book)}
    >
      <div className="w-full h-[162px] shadow-custom-light">
        <img
          loading="lazy"
          src={book?.formats["image/jpeg"]}
          alt={book?.title}
          className="w-full h-full rounded-lg bg-cover bg-center "
        />
      </div>

      <h2 className="font-montserrat text-start w-full text-xs font-semibold uppercase mt-3 text-[#333333] line-clamp-2">
        {book?.title || "ALTERNATIVE BOOK NAME "}
      </h2>

      <p className="font-montserrat text-xs text-start capitalize text-[#A0A0A0] line-clamp-2">
        {book?.authors[0]?.name || "Unknown Author"}
      </p>
    </div>
  );
};

export default BookCard;
