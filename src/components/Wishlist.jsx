import React, { useState } from "react";
import cars from "../mock_data";
import WishlistCard from "./WishlistCard";
import { Link } from "react-router-dom";

const Wishlist = ({ wishlist, toggleWishlist, cardBg, textColor, bgColor }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;
  const wishlistedCars = cars.filter((car) => wishlist.includes(car.id));
  const totalPages = Math.ceil(wishlistedCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const paginatedCars = wishlistedCars.slice(startIndex, startIndex + carsPerPage);

  return (
    <div className={`w-full min-h-screen ${bgColor}`}>
      {wishlistedCars.length === 0 ? (
        <div className="flex flex-col items-center justify-center ">
          <p className="text-red-500 text-4xl text-center font-bold my-10">
            No cars wishlisted yet! Please add some cars to your wishlist.
          </p>
          <Link to="/">
            <button className="bg-blue-500 p-3 rounded text-white font-semibold cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out">
              back to home page
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-20">
            {paginatedCars.map((car) => (
              <WishlistCard
                key={car.id}
                car={car}
                toggleWishlist={toggleWishlist}
                cardBg={cardBg}
                textColor={textColor}
              />
            ))}
          </div>

          {wishlistedCars.length > carsPerPage && (
            <div className="flex justify-center items-center gap-4 pb-10">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className={`text-lg font-medium ${textColor}`}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
