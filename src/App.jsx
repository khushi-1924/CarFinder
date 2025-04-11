import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import cars from "./mock_data";
import Card from "./components/Card";
import Wishlist from "./components/Wishlist";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [bgColor, setBgColor] = useState("bg-gray-400");
  const [textColor, setTextColor] = useState("text-black");
  const [navBg, setNavBg] = useState("bg-[#A6AEBD]");
  const [cardBg, setCardBg] = useState("bg-[#A6AEBD]");

  const handleModeClick = () => {
    if (mode === "light") {
      setMode("dark");
      setBgColor("bg-slate-900");
      setTextColor("text-white");
      setNavBg("bg-[#141c30]");
      setCardBg("bg-[#141c30]");
    } else {
      setMode("light");
      setBgColor("bg-gray-400");
      setTextColor("text-black");
      setNavBg("bg-[#A6AEBD]");
      setCardBg("bg-[#A6AEBD]");
    }
  };

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((carId) => carId !== id)
        : [...prev, id];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const handleWishlistClick = () => {};

  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    fuel_type: "",
    seats: "",
    priceRanges: "",
  });

  const filteredCars = cars.filter((car) => {
    const matchesSearch = `${car.brand} ${car.model}`
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesFilters =
      (filters.brand === "" || car.brand === filters.brand) &&
      (filters.model === "" || car.model === filters.model) &&
      (filters.fuel_type === "" || car.fuel_type === filters.fuel_type) &&
      (filters.seats === "" || car.seats.toString() === filters.seats) &&
      (filters.priceRanges === "" ||
        (car.price >=
          parseInt(filters.priceRanges.split(" ")[0].replace(/[$,]/g, "")) &&
          car.price <=
            parseInt(filters.priceRanges.split(" ")[2].replace(/[$,]/g, ""))));

    return matchesSearch && matchesFilters;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const paginatedCars = filteredCars.slice(
    startIndex,
    startIndex + carsPerPage
  );

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div
                  className={`w-full min-h-screen ${bgColor} overflow-x-hidden`}
                >
                  <div
                    className={`px-10 p-2 w-full ${navBg} shadow-lg flex justify-between items-center`}
                  >
                    <h1
                      className={`p-2 text-4xl text-center font-semibold italic ${textColor}`}
                    >
                      CarFinder
                    </h1>
                    <div>
                      <Link to="/wishlist">
                        <button
                          className="p-2 mx-5 border-2 border-purple-400 text-xl text-black rounded bg-purple-400 hover:bg-purple-500 cursor-pointer"
                          onClick={handleWishlistClick}
                        >
                          Wishlist
                        </button>
                      </Link>
                      {mode === "light" ? (
                        <button
                          className="p-2 text-xl text-black border-2 rounded border-black hover:bg-slate-900 hover:text-white hover:cursor-pointer"
                          onClick={handleModeClick}
                        >
                          Dark Mode
                        </button>
                      ) : (
                        <button
                          className="p-2 text-xl text-white border-2 rounded border-white hover:bg-gray-400 hover:text-black hover:cursor-pointer"
                          onClick={handleModeClick}
                        >
                          Light Mode
                        </button>
                      )}
                    </div>
                  </div>
                  <Search
                    mode={mode}
                    bgColor={bgColor}
                    textColor={textColor}
                    navBg={navBg}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    filters={filters}
                    setFilters={setFilters}
                  />
                  <div className="w-full overflow-x-hidden flex flex-col items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10">
                      {paginatedCars.map((car, index) => (
                        <Card
                          key={index}
                          car={car}
                          toggleWishlist={toggleWishlist}
                          isWishlisted={wishlist.includes(car.id)}
                          cardBg={cardBg}
                          textColor={textColor}
                        />
                      ))}
                    </div>

                    {filteredCars.length > carsPerPage && (
                      <div className="flex justify-center items-center gap-4 pb-10">
                        <button
                          onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                          }
                          disabled={currentPage === 1}
                          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                          Prev
                        </button>
                        <span className={`text-lg font-medium ${textColor}`}>
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          onClick={() =>
                            setCurrentPage((prev) =>
                              Math.min(prev + 1, totalPages)
                            )
                          }
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            }
          />

          <Route exact path="/" element={<App />} />
          <Route
            exact
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                cardBg={cardBg}
                textColor={textColor}
                bgColor={bgColor}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
