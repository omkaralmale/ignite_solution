import { pattern } from "../assets/Images";

const HeaderCard = () => {
  return (
    <div
      className="bg-cover bg-center lg:px-48 px-10 lg:py-10 w-full"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <h1 className="text-[48px] my-2 leading-tight font-montserrat text-[#5E56E7] font-[500]">
        Gutenberg Project
      </h1>
      <p className="text-[20px] font-montserrat">
        A social cataloging website that allows you to freely search its
        database of books, annotations, and reviews.
      </p>
    </div>
  );
};

export default HeaderCard;
