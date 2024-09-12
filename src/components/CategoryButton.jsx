import { next } from "../assets/Images";

/* eslint-disable react/prop-types */
const CategoryButton = ({ label, onClick, img }) => {
  return (
    <div
      className="flex bg-white border cursor-pointer shadow-custom-light items-center rounded px-[10px] h-[50px] justify-between w-full my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <button className="flex items-center transition duration-300 w-full space-x-2">
        <img src={img} alt={label} className="w-6 h-6" loading="lazy" />
        <span className="uppercase font-[600]">{label}</span>
      </button>
      <img src={next} alt="arrow" className="w-4 h-4" />
    </div>
  );
};

export default CategoryButton;
