/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { back } from "../assets/Images";

const BackArrow = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-3 my-5 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <img
        src={back}
        loading="lazy"
        alt="Search Icon"
        className="mx-2 w-5 h-5 text-gray-400"
      />
      <div className="text-[#5E56E7] text-3xl font-bold capitalize">
        {title}
      </div>
    </div>
  );
};

export default BackArrow;
