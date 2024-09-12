import { useNavigate } from "react-router-dom";
import CategoryButton from "../components/CategoryButton";
import { categories } from "../constants";
import HeaderCard from "../components/HeaderCard";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/books/${category}`);
  };

  return (
    <div className="bg-[#F8F7FF] w-full lg:my-20 ">
      <HeaderCard />
      <div className="lg:px-48 px-10 w-full lg:grid lg:grid-cols-2 lg:gap-x-20 pb-20">
        {categories.map((category) => (
          <CategoryButton
            key={category.label}
            label={category.label}
            img={category.icon}
            onClick={() => handleCategoryClick(category.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
