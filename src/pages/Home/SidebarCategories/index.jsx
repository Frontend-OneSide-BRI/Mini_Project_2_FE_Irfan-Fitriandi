import { Link } from "react-router-dom";

const SidebarCategories = ({ data }) => {
  return (
    <>
      {data.map((data, idx) => (
        <Link
          key={idx}
          to={`/gallery/${data.label}`}
          style={{
            backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ), url(${data.img})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
          className="flex flex-col justify-center items-center text-white my-2 h-20 group"
        >
          <span className="font-bold capitalize lg:text-xl group-hover:scale-110 duration-300 ease-in-out">
            {data.label}
          </span>
        </Link>
      ))}
    </>
  );
};

export default SidebarCategories;
