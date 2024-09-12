import { useLocation } from "react-router";

const BookDetailsPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="bg-[#FAEBD0] w-screen h-fit py-20 font-mono text-sm">
      <div className="lg:px-48 px-10 lg:w-3/4 w-full pb-20 flex flex-col gap-4">
        <p>Title: {state?.book?.title}</p>
        <p>Author: {state?.book?.authors?.map((items) => items?.name)}</p>
        <p>Language: {state?.book?.languages?.map((items) => items)}</p>
        <p>Character set encoding: {}</p>
      </div>
      <div className="flex w-screen justify-center">
        <img
          src={state?.book?.formats["image/jpeg"]}
          alt="book cover image"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default BookDetailsPage;
