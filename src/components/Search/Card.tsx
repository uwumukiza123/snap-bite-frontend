import { useLocation, useNavigate } from "react-router-dom";
import Search from "../../../public/uploads/search";
import { useState, useEffect } from "react";
import FoodCombination from "../FoodCombination";

const SearchCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchTerm(params.get("search") || "");
    setCategory(params.get("category") || "");
  }, [location.search]);

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    navigate(
      { search: params.toString().toLocaleLowerCase() },
      { replace: true }
    );
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="border flex gap-3 p-3 rounded-xl w-96">
          <button
            type="button"
            aria-label="perform search"
            className="-rotate-90"
          >
            <Search />
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => updateQueryParams("search", e.target.value)}
            placeholder="Search your desired meal here..."
            className="placeholder:text-gray-300 placeholder:text-sm"
          />
        </div>
      </div>
      <FoodCombination searchTerm={searchTerm} Category={category} />
    </div>
  );
};

export default SearchCard;
