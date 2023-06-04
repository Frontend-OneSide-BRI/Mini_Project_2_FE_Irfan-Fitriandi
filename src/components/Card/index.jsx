import { Link } from "react-router-dom";

const Card = ({ id, body, category, date, img, title }) => {
  return (
    <Link to={`/photo/${id}`} className="flex flex-col bg-secondary hover:scale-105 duration-300 ease-in-out">
      <img className="aspect-[4/3] object-cover" src={img} alt={title} />
      <div className="p-4 space-y-2">
        <span className="text-xs lg:text-sm uppercase">{`${category} - ${date}`}</span>
        <h3 className="capitalize font-semibold">{title}</h3>
        <p>{body} </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          quidem iusto commodi, distinctio explicabo eligendi cum minima ipsam
          quis cupiditate.
        </p>
      </div>
    </Link>
  );
};

export default Card;
