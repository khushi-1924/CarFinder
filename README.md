## this website is created using vite
## reactJs is the framework used and tailwindCSS is used for the UI

## created a mock API using mockaroo for cars

## CarFinder
CarFinder is a responsive car browsing web app built using React. Users can search, filter, and browse through a list of cars, and maintain a wishlist. The app supports dark/light mode and pagination for better usability.

## Features
 - Search and Filter by brand, model, fuel type, seating capacity, and price range
 - Pagination – Displays 10 cars per page
 - Wishlist – Add/remove cars from wishlist (saved in localStorage)
 - Dark/Light Mode toggle
 - Client-Side Routing using React Router
 - Mock data used for car listings
 - Responsive Design using Tailwind CSS

## Folder Structure
carfinder/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── WishlistCard.jsx
│   │   ├── Search.jsx
│   │   └── Wishlist.jsx
│   ├── mock_data.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md

## Tech Stack
 - Frontend: React, Tailwind CSS
 - Routing: React Router
 - State Management: React useState
 - Storage: Browser LocalStorage
 - Bundler: Vite

## Getting Started
1. Clone the Repository
git clone https://github.com/your-username/carfinder.git
cd carfinder

2. Install Dependencies
npm install

3. Run the App
npm run dev
App will run locally at: http://localhost:5173

🧪 Mock Data
The mock_data.js file contains an array of car objects with the following structure:
{
  id: 1,
  brand: "Toyota",
  model: "Camry",
  fuel_type: "Petrol",
  seats: 5,
  price: 24000,
  image: "https://example.com/image.jpg"
}
You can update or extend the mock data as needed.

## Important Notes
 - Search is live.
 - Wishlist is persisted in localStorage and is available across reloads.
 - Pagination applies both on home page and wishlist view.