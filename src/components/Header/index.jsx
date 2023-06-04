import { Link } from "react-router-dom";
import Icon from "../../assets/icon.png";

const Header = () => {
  const path = window.location.pathname;
  const isHome = path[1] !== "g";

  return (
    <header className="flex justify-between items-center h-16 p-2 lg:px-10">
      <Link className="flex gap" to="/">
        <img src={Icon} alt="icon" className="h-5" />
        <div className="text-2xl lg:text-3xl font-extrabold tracking-tighter">
          Fvngram
        </div>
      </Link>
      <nav className="flex gap-2 justify-center items-center">
        <Link
          to="/"
          className={`${
            isHome ? "text-xl font-semibold tracking-wide" : "hover:scale-110 duration-300 ease-in-out"
          }`}
        >
          Home
        </Link>
        <Link
          to="/gallery/all"
          className={`${
            !isHome ? "text-xl font-semibold tracking-wide" : "hover:scale-110 duration-300 ease-in-out"
          }`}
        >
          Gallery
        </Link>
      </nav>
    </header>
  );
};

export default Header;
