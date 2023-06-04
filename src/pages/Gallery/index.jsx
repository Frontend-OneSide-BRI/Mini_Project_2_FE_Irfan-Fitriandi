import { useState } from "react";
import { GiSadCrab } from "react-icons/gi";

import Layout from "../../components/Layout";
import NavbarCategories from "./NavbarCategories";
import Search from "./Search";
import CardPhoto from "./CardPhoto";

import { useTitle } from "../../hooks/useTitle";
import { gallery_data } from "../../constants/gallery";

const GalleryPage = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const filteredData =
    filter.length === 0
      ? gallery_data.filter((data) =>
          data.category.toLowerCase().includes(category.toLowerCase())
        )
      : gallery_data.filter((data) =>
          data.caption.toLowerCase().includes(filter.toLowerCase())
        );

  useTitle("Gallery || Fvngram");

  return (
    <Layout>
      {/* Navbar */}
      <NavbarCategories
        pathname={window.location.pathname}
        handleCategory={setCategory}
      />
      <Search
        handleChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <section className="lg:w-[1400px] lg:mx-auto m-4">
        <div className="basis-3/4 space-y-4 flex flex-col justify-center items-center min-h-[45vh]">
          {filteredData.length === 0 ? (
            <>
              <GiSadCrab className="text-6xl lg:text-8xl" />
              <div className="lg:text-xl">
                Empty Search: No data matches found.
              </div>
            </>
          ) : (
            <CardPhoto data={filteredData} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
