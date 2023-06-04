import { BsSearch } from "react-icons/bs";

const Search = ({ handleChange }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.35),
              rgba(0, 0, 0, 0.35)
            ), url(https://images.unsplash.com/photo-1549433746-e1f463631509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
      className="h-96 flex flex-col justify-center items-center space-y-4"
    >
      <div className="flex justify-between items-center bg-secondary py-2 px-3">
        <input
          type="text"
          placeholder="Search. . . "
          onChange={handleChange}
          className="outline-none bg-secondary px-1 w-full"
        />
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
