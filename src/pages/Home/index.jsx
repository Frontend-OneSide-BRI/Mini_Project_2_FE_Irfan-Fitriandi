import Layout from "../../components/Layout";

import Slider from "./Slider";
import TopPhoto from "./TopPhoto";
import CardPhoto from "./CardPhoto";
import SidebarCategories from "./SidebarCategories";

import { useTitle } from "../../hooks/useTitle";
import { categories_data } from "../../constants/categories";
import { gallery_data } from "../../constants/gallery";

const Homepage = () => {
  useTitle("Home || Fvngram");

  return (
    <Layout>
      <Slider data={categories_data} />
      <div className="lg:w-[1400px] lg:mx-auto m-4">
        <section className="flex flex-col lg:flex-row gap-4 lg:mx-10">
          {/* Left Content */}
          <aside className="flex flex-col basis-1/4 space-y-8">
            {/* Categories Menu */}
            <div>
              <h3 className="font-bold text-xl lg:text-xl mb-4">Categories</h3>
              <SidebarCategories data={categories_data} />
            </div>

            {/* Top Photo */}
            <div className="bg-secondary p-4">
              <h3 className="font-bold text-xl lg:text-xl">Top Photo</h3>
              <TopPhoto data={gallery_data.slice(0, 5)} />
            </div>
          </aside>

          {/* Right Content */}
          <section className="basis-3/4 space-y-4 flex flex-col items-center">
            <CardPhoto data={gallery_data} />
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage;
