import { Link } from "react-router-dom";

import { categories_data } from "../../../constants/categories";

const NavbarCategories = ({ pathname, handleCategory }) => {

  return (
    <nav className="flex items-center justify-center bg-secondary h-8 lg:h-12 pt-2 shadow-sm group">
      <Link
        to={"/gallery/all"}
        className={`transition-all duration-150 w-full lg:w-full ease-in-out h-full text-center text-xs lg:text-base uppercase font-semibold ${
          pathname === `/gallery/all`
            ? "text-[#1d1d1f] border-b-4 border-[#1d1d1f]"
            : "hover:border-b-4 border-[#1d1d1f] hover:text-[#1d1d1f]"
        }`}
        onClick={() => {
          handleCategory("");
        }}
      >
        all
      </Link>
      {categories_data.map((data, idx) => (
        <Link
          key={idx}
          className={`transition-all duration-150 w-full lg:w-full ease-in-out h-full text-center text-xs lg:text-base uppercase font-semibold ${
            pathname === `/gallery/${data.label}`
              ? "text-[#1d1d1f] border-b-4 border-[#1d1d1f]"
              : "hover:border-b-4 border-[#1d1d1f] hover:text-[#1d1d1f]"
          }`}
          to={`/gallery/${data.label}`}
          onClick={() => {
            handleCategory(data.label);
          }}
        >
          {data.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarCategories;
