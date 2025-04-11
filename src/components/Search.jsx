import React, { useState } from "react";

const Search = (props) => {
  const { bgColor, textColor, navBg, searchText, setSearchText, filters, setFilters } = props;

  const cars = {
    brands: [
      "Suzuki",
      "Volkswagen",
      "Infiniti",
      "Isuzu",
      "Mitsubishi",
      "Jeep",
      "Chevrolet",
      "GMC",
      "Dodge",
      "BMW",
      "Ford",
      "Saab",
      "Toyota",
      "Acura",
      "Honda",
      "Subaru",
      "Lexus",
      "Nissan",
      "Kia",
      "Buick",
      "Mercury",
      "Chrysler",
      "Geo",
      "Pontiac",
      "Hyundai",
      "Mercedes-Benz",
      "Audi",
      "Lotus",
      "Volvo",
      "Aston Martin",
      "Mazda",
    ],
    models: [
      "SJ",
      "Vanagon",
      "M",
      "Swift",
      "Rodeo",
      "Tundra",
      "Liberty",
      "Astro",
      "EX",
      "Sierra",
      "GTI",
      "Ram 2500",
      "Z4",
      "F150",
      "9-3",
      "9000",
      "Tacoma",
      "RL",
      "Accord",
      "Diamante",
      "Impreza",
      "RX",
      "350Z",
      "Legend",
      "LeSabre",
      "ES",
      "Expedition EL",
      "Truck",
      "Mountaineer",
      "Town & Country",
      "FJ Cruiser",
      "Century",
      "Metro",
      "Contour",
      "LeMans",
      "Econoline E350",
      "Ram Van B150",
      "Impala",
      "Caprice Classic",
      "E-Class",
      "Cabriolet",
      "Spirit",
      "Caprice",
      "Thunderbird",
      "GTO",
      "Sentra",
      "Montero",
      "Elan",
      "Riviera",
      "R32",
      "M3",
      "F-Series",
      "SL-Class",
      "A4",
      "Express 2500",
      "S60",
      "Vanquish S",
      "B-Series",
      "Trans Sport",
      "Colorado",
      "Ram 1500",
      "Tribute",
    ],
    fuel_type: ["Petrol", "CNG", "Hybrid", "Diesel", "Electric"],
    seats: [2, 3, 4, 5, 6],
    priceRanges: [
      "$1,000 - $2,000",
      "$2,001 - $3,000",
      "$3,001 - $4,000",
      "$4,001 - $5,000",
      "$5,001 - $6,000",
      "$6,001 - $7,000",
      "$7,001 - $8,000",
      "$8,001 - $9,000",
      "$9,001 - $10,000",
    ],
  };

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedSeats, setSelectedSeats] = useState("");
  const [priceRange, setPriceRange] = useState("");

  

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="relative w-1/2 mt-5">
          {props.mode === "light" ? (
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-2 px-4 my-4 rounded-full outline-none border border-black text-lg text-black placeholder:text-gray-700"
              placeholder="search by brand or model"
            />
          ) : (
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-2 px-4 my-4 rounded-full outline-none border border-white text-lg text-white placeholder:text-gray-500"
              placeholder="search by brand or model"
            />
          )}
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 px-3 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold hover:cursor-pointer text-white">
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
      <div className="mt-5 w-3/4 flex justify-around items-center">
        <div>
          <select
            className={`p-2 border rounded ${bgColor} ${textColor}`}
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
          >
            <option value="">Select Brand</option>
            {cars.brands.map((brand, i) => (
              <option key={i} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className={`p-2 border rounded ${bgColor} ${textColor}`}
            value={filters.model}
            onChange={(e) => handleFilterChange("model", e.target.value)}
          >
            <option value="">Select Model</option>
            {cars.models.map((model, i) => (
              <option key={i} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className={`p-2 border rounded ${bgColor} ${textColor}`}
            value={filters.fuel_type}
            onChange={(e) => handleFilterChange("fuel_type", e.target.value)}
          >
            <option value="">Select fuel type</option>
            {cars.fuel_type.map((fuel_type, i) => (
              <option key={i} value={fuel_type}>
                {fuel_type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className={`p-2 border rounded ${bgColor} ${textColor}`}
            value={filters.seats}
            onChange={(e) => handleFilterChange("seats", e.target.value)}
          >
            <option value="">Select seating capacity</option>
            {cars.seats.map((seats, i) => (
              <option key={i} value={seats}>
                {seats}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className={`p-2 border rounded ${bgColor} ${textColor}`}
            value={filters.priceRanges}
            onChange={(e) => handleFilterChange("priceRanges", e.target.value)}
          >
            <option value="">Select price range</option>
            {cars.priceRanges.map((priceRanges, i) => (
              <option key={i} value={priceRanges}>
                {priceRanges}
              </option>
            ))}
          </select>
        </div>
      </div>
      </div>
    </>
  );
};

export default Search;
