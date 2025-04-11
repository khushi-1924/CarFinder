import { useState } from "react";
import React from "react";
import Search from "./Search";
import Card from "./Card";
import cars from "../mock_data";

const CarList = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    fuel_type: "",
    seats: "",
    priceRanges: "",
  });

  const filteredCars = carsData.filter((car) => {
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
  return (
    <div>
      <div className="p-4">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          filters={filters}
          setFilters={setFilters}
        />
        <Card cars={filteredCars} />
      </div>
    </div>
  );
};

export default CarList;
