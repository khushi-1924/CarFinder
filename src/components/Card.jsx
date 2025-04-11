import React from "react";

const Card = ({ car, toggleWishlist, isWishlisted, cardBg, textColor }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className={`max-w-xs ${cardBg} ${textColor} rounded-2xl shadow-lg p-4 flex flex-col items-center`}>
        <img
          src={car.car_image}
          alt={car.model}
          className="w-full h-40 object-cover rounded-xl border border-black"
        />
        <h2 className="text-xl font-bold mt-2">
          {car.brand} {car.model}
        </h2>
        <p className="text-sm">Fuel Type: {car.fuel_type}</p>
        <p className="text-sm">Seating Capacity: {car.seats}</p>
        <p className="text-sm">Colour: {car.color}</p>
        <p className="text-sm font-semibold">Price: ${car.price}</p>
        <button
        onClick={() => toggleWishlist(car.id)}
        className={`mt-2 px-4 py-1 rounded-full text-white cursor-pointer ${isWishlisted ? 'bg-red-400 hover:bg-red-600' : 'bg-blue-400 hover:bg-blue-600'}`}
      >
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
      </div>
      
    </div>
  );
};

export default Card;
