import { Link } from "react-router-dom";

const TopPhoto = ({ data }) => {
  return (
    <>
      {data?.map((data, idx) => (
        <Link key={idx} to={`/photo/${data.id}`} className="flex pt-2 group">
          <span className="text-2xl font-bold basis-1/12">{idx + 1}</span>
          <div className="flex flex-col basis-10/12">
            <h6 className="capitalize font-semibold group-hover:scale-105 duration-300 ease-in-out">
              {data.title}
            </h6>
            <span className="text-xs lg:text-sm capitalize">{`${data.category} - ${data.date}`}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TopPhoto;
