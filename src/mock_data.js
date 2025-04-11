const cars = [
  {
    "id": 1,
    "brand": "Suzuki",
    "model": "SJ",
    "color": "blue",
    "price": 1604.3,
    "seats": 5,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJ8YNIYoddJEFlE13fwLD2RYuYWQBoydSnA&s"
  },
  {
    "id": 2,
    "brand": "Volkswagen",
    "model": "Vanagon",
    "color": "black",
    "price": 1793.26,
    "seats": 4,
    "fuel_type": "CNG",
    "car_image": "https://images.squarespace-cdn.com/content/v1/5535c0dbe4b0d5c1b09d31ac/1650298034628-SXDGTB7G60VP66J27ZBD/Short+Bus+Front-min.jpg"
  },
  {
    "id": 3,
    "brand": "Infiniti",
    "model": "M",
    "color": "yellow",
    "price": 3782.77,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://thumbs.dreamstime.com/z/fast-moving-yellow-infiniti-qx-s-car-highway-road-overspeed-city-concept-suv-motion-side-view-moscow-russia-august-260731455.jpg"
  },
  {
    "id": 4,
    "brand": "Suzuki",
    "model": "Swift",
    "color": "blue",
    "price": 2686.65,
    "seats": 5,
    "fuel_type": "Hybrid",
    "car_image": "https://imgd.aeplcdn.com/370x208/n/2sol3ra_1429638.jpg?q=80"
  },
  {
    "id": 5,
    "brand": "Isuzu",
    "model": "Rodeo",
    "color": "yellow",
    "price": 1090.75,
    "seats": 4,
    "fuel_type": "Hybrid",
    "car_image": "https://i.ytimg.com/vi/ky8wWpMV66A/hqdefault.jpg"
  },
  {
    "id": 6,
    "brand": "Mitsubishi",
    "model": "Tundra",
    "color": "green",
    "price": 8883.71,
    "seats": 4,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8Us-slKmrEHZu2aSb_CEhwG4MN_9xKKs5w&s"
  },
  {
    "id": 7,
    "brand": "Jeep",
    "model": "Liberty",
    "color": "red",
    "price": 6620.25,
    "seats": 3,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6lqg00yCLvIjpWjYaaFdmLf7eraXoJnO_Q&s"
  },
  {
    "id": 8,
    "brand": "Chevrolet",
    "model": "Astro",
    "color": "blue",
    "price": 3946.75,
    "seats": 2,
    "fuel_type": "Diesel",
    "car_image": "https://images.dealersync.com/2440/Photos/285420/20181110194843025_1541879322.jpg?_=6c93677872076039eb85a9fab14110ca064f5e3d"
  },
  {
    "id": 9,
    "brand": "Infiniti",
    "model": "EX",
    "color": "black",
    "price": 8927.92,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://c8.alamy.com/comp/AXHBGM/2008-infiniti-ex-ex35-journey-in-black-drivers-side-profile-AXHBGM.jpg"
  },
  {
    "id": 10,
    "brand": "GMC",
    "model": "Sierra",
    "color": "yellow",
    "price": 1949.28,
    "seats": 6,
    "fuel_type": "CNG",
    "car_image": "https://i.ytimg.com/vi/K_Y1xurPzHU/sddefault.jpg"
  },
  {
    "id": 11,
    "brand": "Volkswagen",
    "model": "GTI",
    "color": "red",
    "price": 1493.74,
    "seats": 5,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5FxgVbwBRrH4-aaCL9h5VhcvV5uarN-Ngg&s"
  },
  {
    "id": 12,
    "brand": "Dodge",
    "model": "Ram 2500",
    "color": "green",
    "price": 1587.99,
    "seats": 6,
    "fuel_type": "CNG",
    "car_image": "https://di-uploads-pod32.dealerinspire.com/glenncdjroflouisville/uploads/2024/06/2024-Ram-2500-Olive-Green-Pearl-Coat-Exterior-Paint.jpg"
  },
  {
    "id": 13,
    "brand": "BMW",
    "model": "Z4",
    "color": "black",
    "price": 9109.65,
    "seats": 6,
    "fuel_type": "Diesel",
    "car_image": "https://imgd.aeplcdn.com/664x374/n/vmhbrab_1666869.jpg?q=80"
  },
  {
    "id": 14,
    "brand": "Ford",
    "model": "F150",
    "color": "green",
    "price": 8608.07,
    "seats": 5,
    "fuel_type": "Diesel",
    "car_image": "https://i.ytimg.com/vi/3MMGpnzZoMo/maxresdefault.jpg"
  },
  {
    "id": 15,
    "brand": "Saab",
    "model": "9-3",
    "color": "yellow",
    "price": 4255.43,
    "seats": 6,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcfHN-bfhMzqTMxxmgjl42JPrVpBH21uzpg&s"
  },
  {
    "id": 16,
    "brand": "GMC",
    "model": "Sonoma Club Coupe",
    "color": "green",
    "price": 7802.14,
    "seats": 3,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8G-yFCpawZB6O_hq7soG-mAtGoDR4LrDQQ&s"
  },
  {
    "id": 17,
    "brand": "Saab",
    "model": "9000",
    "color": "red",
    "price": 2991.28,
    "seats": 2,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0CRWy4jeYMvs61-7vxLp-5RyWR6_L_3L2w&s"
  },
  {
    "id": 18,
    "brand": "Toyota",
    "model": "Tacoma",
    "color": "yellow",
    "price": 8566.49,
    "seats": 6,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMux69I-zk2grY8KEp9mOQMNOprGRwGRCiQ&s"
  },
  {
    "id": 19,
    "brand": "Acura",
    "model": "RL",
    "color": "green",
    "price": 7416.77,
    "seats": 2,
    "fuel_type": "Petrol",
    "car_image": "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/ea93686cb7f6bba23b9693c4dac92c0715d7c4cd/photos/35b1VdQl-WC8r7xof4y-(edit).jpg?t=168499362682"
  },
  {
    "id": 20,
    "brand": "Honda",
    "model": "Accord",
    "color": "yellow",
    "price": 4824.14,
    "seats": 2,
    "fuel_type": "Electric",
    "car_image": "https://i.pinimg.com/736x/fe/0c/4d/fe0c4d4ae03fa38f89da765bd0a59478.jpg"
  },
  {
    "id": 21,
    "brand": "Mitsubishi",
    "model": "Diamante",
    "color": "green",
    "price": 8789.29,
    "seats": 4,
    "fuel_type": "Hybrid",
    "car_image": "https://zdn.nz/ic/baycityrotorua/1212153242/270715273.jpg"
  },
  {
    "id": 22,
    "brand": "Subaru",
    "model": "Impreza",
    "color": "green",
    "price": 6134.43,
    "seats": 2,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzSIchniWjxXYLpq0xw4yRoqvWf9i4IFx1Q&s"
  },
  {
    "id": 23,
    "brand": "Lexus",
    "model": "RX",
    "color": "red",
    "price": 5677.61,
    "seats": 3,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJslPkB3v-rh8FCJL8gADKUKkAjGSOLiCnQ&s"
  },
  {
    "id": 24,
    "brand": "Nissan",
    "model": "350Z",
    "color": "yellow",
    "price": 8173.67,
    "seats": 3,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxFWIC2GAPWM_ZP2CWqdwikRVeofZrelc1g&s"
  },
  {
    "id": 25,
    "brand": "Volkswagen",
    "model": "Fox",
    "color": "white",
    "price": 4874.05,
    "seats": 6,
    "fuel_type": "Hybrid",
    "car_image": "https://i.ytimg.com/vi/svbiNJ_qeNk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnydRDZ6RvswDQjHyGsfThEVmwKA"
  },
  {
    "id": 26,
    "brand": "Kia",
    "model": "Rondo",
    "color": "red",
    "price": 2715.97,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IUUiTzPjx4F-Myp8exm5JBrBCtiFcF33hQ&s"
  },
  {
    "id": 27,
    "brand": "Acura",
    "model": "Legend",
    "color": "white",
    "price": 6615.91,
    "seats": 5,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdSc4CXke17uuPSIHKeyQ55B2Yn0m1_Q_TQ&s"
  },
  {
    "id": 28,
    "brand": "Buick",
    "model": "LeSabre",
    "color": "yellow",
    "price": 9787.83,
    "seats": 2,
    "fuel_type": "Petrol",
    "car_image": "https://cdn.dealeraccelerate.com/fastlane/1/2556/86138/790x1024/1973-buick-lesabre-custom"
  },
  {
    "id": 29,
    "brand": "Lexus",
    "model": "ES",
    "color": "green",
    "price": 2930.01,
    "seats": 5,
    "fuel_type": "Diesel",
    "car_image": "https://i.ytimg.com/vi/LgfbHbI4SGM/maxresdefault.jpg"
  },
  {
    "id": 30,
    "brand": "Ford",
    "model": "Expedition EL",
    "color": "green",
    "price": 4350.03,
    "seats": 6,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqlwjQJyK0Hdkg6EYpXZ_np0VM61mCklvuQ&s"
  },
  {
    "id": 31,
    "brand": "Mitsubishi",
    "model": "Truck",
    "color": "white",
    "price": 4232.58,
    "seats": 4,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteByq6i4kdZhTtorFJI7QapWdEKu7hNL8Kg&s"
  },
  {
    "id": 32,
    "brand": "Mercury",
    "model": "Mountaineer",
    "color": "black",
    "price": 9568.5,
    "seats": 3,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KR1zL1hG079E_JYwUD9CfGfmZnjbbnQO4w&s"
  },
  {
    "id": 33,
    "brand": "Chrysler",
    "model": "Town & Country",
    "color": "blue",
    "price": 1971.38,
    "seats": 6,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmf_754KyVVNqTnfndNLUy1mQQZeWexFL4A&s"
  },
  {
    "id": 34,
    "brand": "Toyota",
    "model": "FJ Cruiser",
    "color": "yellow",
    "price": 5521.58,
    "seats": 3,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9WbfXwS8rJr-dBf_r45oybX3TLz1lJRAlg&s"
  },
  {
    "id": 35,
    "brand": "Buick",
    "model": "Century",
    "color": "white",
    "price": 1555.18,
    "seats": 3,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSkM4ByJ6IlHn_TJKSDdB8VpxVHjXNyWqXQ&s"
  },
  {
    "id": 36,
    "brand": "Geo",
    "model": "Metro",
    "color": "red",
    "price": 6494.12,
    "seats": 2,
    "fuel_type": "Electric",
    "car_image": "https://i.ytimg.com/vi/TN4qVW6qHs0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBt9Yf0eP5ELcuG89uNGlHgfBp_cg"
  },
  {
    "id": 37,
    "brand": "Ford",
    "model": "Contour",
    "color": "green",
    "price": 2060.29,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbh1Dg0_obsu0yWlwOQ9L5FkEA_BjhO3mzA&s"
  },
  {
    "id": 38,
    "brand": "Pontiac",
    "model": "LeMans",
    "color": "yellow",
    "price": 9829.66,
    "seats": 5,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNT2b03U_DARq3geoLueVDIh0hV_9JBDGvw&s"
  },
  {
    "id": 39,
    "brand": "Hyundai",
    "model": "Sonata",
    "color": "white",
    "price": 4170.11,
    "seats": 6,
    "fuel_type": "Electric",
    "car_image": "https://i.ytimg.com/vi/yGwZrewSFg0/maxresdefault.jpg"
  },
  {
    "id": 40,
    "brand": "Ford",
    "model": "Econoline E350",
    "color": "red",
    "price": 6032.11,
    "seats": 4,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsBPYzlIK4mffaVmJ79ofZg43uZmNp7jjWA&s"
  },
  {
    "id": 41,
    "brand": "Dodge",
    "model": "Ram Van B150",
    "color": "blue",
    "price": 2700.96,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/1990_Dodge_Ram_350_Maxi%2C_front_right.jpg/420px-1990_Dodge_Ram_350_Maxi%2C_front_right.jpg"
  },
  {
    "id": 42,
    "brand": "Chevrolet",
    "model": "Impala",
    "color": "red",
    "price": 2608.45,
    "seats": 2,
    "fuel_type": "Petrol",
    "car_image": "https://i.ytimg.com/vi/DySSUAt1Alw/maxresdefault.jpg"
  },
  {
    "id": 43,
    "brand": "Chevrolet",
    "model": "Caprice Classic",
    "color": "yellow",
    "price": 3830.68,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://i.pinimg.com/736x/62/52/90/6252907371c4748b87d6d7a9139fdfae.jpg"
  },
  {
    "id": 44,
    "brand": "Mercedes-Benz",
    "model": "E-Class",
    "color": "black",
    "price": 3852.7,
    "seats": 3,
    "fuel_type": "Hybrid",
    "car_image": "https://imgd.aeplcdn.com/370x208/n/5va8vta_1511431.jpg?q=80"
  },
  {
    "id": 45,
    "brand": "Audi",
    "model": "Cabriolet",
    "color": "blue",
    "price": 3714.12,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://images.dealer.com/ddc/vehicles/2024/Audi/A5/Convertible/color/Navarra%20Blue%20Metallic%20Black%20Roof-2DPA-10,33,127-640-en_US.jpg"
  },
  {
    "id": 46,
    "brand": "Dodge",
    "model": "Spirit",
    "color": "black",
    "price": 7575.44,
    "seats": 4,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhUmcPdqwbMnQT0EqbvIutsMMsF871yX_2g&s"
  },
  {
    "id": 47,
    "brand": "Chevrolet",
    "model": "Caprice",
    "color": "black",
    "price": 5159.29,
    "seats": 4,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYFwUtwKDmWH7zfyUlHEsgflKEelg6PkLkA&s"
  },
  {
    "id": 48,
    "brand": "Ford",
    "model": "Thunderbird",
    "color": "yellow",
    "price": 8483.36,
    "seats": 6,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Qg-8fsqeQFhKWPqKVB_nl0cSU-rDJfP7rw&s"
  },
  {
    "id": 49,
    "brand": "Toyota",
    "model": "Tacoma",
    "color": "green",
    "price": 7319.01,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://www.motortrend.com/uploads/sites/5/2019/07/2020-Toyota-Tacoma-TRD-Pro-30.jpg"
  },
  {
    "id": 50,
    "brand": "Pontiac",
    "model": "GTO",
    "color": "green",
    "price": 4761.46,
    "seats": 2,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTPGzw3xQLDiyxnnW0-usfZu_Sm5OVqSsNA&s"
  },
  {
    "id": 51,
    "brand": "Nissan",
    "model": "Sentra",
    "color": "red",
    "price": 6088.51,
    "seats": 4,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkcr4quv2Nh78Zk0UTvfDUdBSMHYa-1fpDA&s"
  },
  {
    "id": 52,
    "brand": "Lexus",
    "model": "ES",
    "color": "green",
    "price": 9568.9,
    "seats": 6,
    "fuel_type": "CNG",
    "car_image": "https://i.ytimg.com/vi/LD9im45e5qw/maxresdefault.jpg"
  },
  {
    "id": 53,
    "brand": "Mitsubishi",
    "model": "Montero",
    "color": "black",
    "price": 9733.02,
    "seats": 6,
    "fuel_type": "CNG",
    "car_image": "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-color-photo/gallery/mitsubishi-montero-sport-jet-black-mica-philippines-66bc35ef9ba21.jpg"
  },
  {
    "id": 54,
    "brand": "Lotus",
    "model": "Elan",
    "color": "white",
    "price": 3117.0,
    "seats": 3,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8H-R5KxSQmFCOIdFK6LzZNFGptRywHVmQPw&s"
  },
  {
    "id": 55,
    "brand": "Saab",
    "model": "9000",
    "color": "blue",
    "price": 5094.48,
    "seats": 4,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7i6GP5L9QV8lBIp-TE9HkQEiXQF0Ae8qjQ&s"
  },
  {
    "id": 56,
    "brand": "Buick",
    "model": "Riviera",
    "color": "red",
    "price": 9726.79,
    "seats": 3,
    "fuel_type": "Electric",
    "car_image": "https://i.ytimg.com/vi/A5wdLReBrSs/maxresdefault.jpg"
  },
  {
    "id": 57,
    "brand": "Volkswagen",
    "model": "R32",
    "color": "white",
    "price": 8034.36,
    "seats": 6,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFIdTSKkrpANq2acUr-Wl3UyuSDolE4fuqA&s"
  },
  {
    "id": 58,
    "brand": "BMW",
    "model": "M3",
    "color": "black",
    "price": 3564.23,
    "seats": 2,
    "fuel_type": "CNG",
    "car_image": "https://etimg.etb2bimg.com/photo/92392007.cms"
  },
  {
    "id": 59,
    "brand": "Ford",
    "model": "F-Series",
    "color": "yellow",
    "price": 6614.38,
    "seats": 3,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1qbolMLnTR-GW4ugCuS2Yw3MTnP5onw3qw&s"
  },
  {
    "id": 60,
    "brand": "Mercedes-Benz",
    "model": "SL-Class",
    "color": "green",
    "price": 3867.91,
    "seats": 3,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEO2dLQmoOAhdG7uhs2QuUcFd6eaoxc9gcA&s"
  },
  {
    "id": 61,
    "brand": "Mitsubishi",
    "model": "GTO",
    "color": "black",
    "price": 9640.67,
    "seats": 3,
    "fuel_type": "Diesel",
    "car_image": "https://i.redd.it/w1rk1ggyi3o51.jpg"
  },
  {
    "id": 62,
    "brand": "Audi",
    "model": "A4",
    "color": "yellow",
    "price": 1514.61,
    "seats": 3,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWnWz3L2M9igMOd4CYHb9xtLIpGdmFUunTA&s"
  },
  {
    "id": 63,
    "brand": "Chevrolet",
    "model": "Express 2500",
    "color": "green",
    "price": 2851.53,
    "seats": 3,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfsDclxlx1z3PpHycl_1j1heRez0ivA0k9g&s"
  },
  {
    "id": 64,
    "brand": "Volvo",
    "model": "S60",
    "color": "black",
    "price": 2351.74,
    "seats": 3,
    "fuel_type": "Diesel",
    "car_image": "https://imgd.aeplcdn.com/370x208/n/1scn6ta_1502613.jpg?q=80"
  },
  {
    "id": 65,
    "brand": "Aston Martin",
    "model": "Vanquish S",
    "color": "blue",
    "price": 8766.04,
    "seats": 2,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBEfxiU__DSJLTsx6kJ6pjq4DgYAlk0F7DA&s"
  },
  {
    "id": 66,
    "brand": "Ford",
    "model": "Expedition",
    "color": "yellow",
    "price": 2494.97,
    "seats": 4,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9ic_OHX6jDI7ZGawJlgbrqlxJUflDe-N2A&s"
  },
  {
    "id": 67,
    "brand": "Mazda",
    "model": "B-Series",
    "color": "black",
    "price": 5913.17,
    "seats": 2,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurTnbkSJnIiQxXuvEGswh4XKzeXh2KiSj3g&s"
  },
  {
    "id": 68,
    "brand": "Pontiac",
    "model": "Trans Sport",
    "color": "red",
    "price": 4363.09,
    "seats": 2,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eBA00K9nArp6RWgF9N-WupXMypy92DKswg&s"
  },
  {
    "id": 69,
    "brand": "Mitsubishi",
    "model": "Diamante",
    "color": "green",
    "price": 3333.26,
    "seats": 3,
    "fuel_type": "Electric",
    "car_image": "https://zdn.nz/ic/baycityrotorua/1212153242/270715273.jpg"
  },
  {
    "id": 70,
    "brand": "Chevrolet",
    "model": "Colorado",
    "color": "black",
    "price": 3082.37,
    "seats": 6,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHPq3Psh02K1xr0qkOTj-Vo470OFumEQcxA&s"
  },
  {
    "id": 71,
    "brand": "Mitsubishi",
    "model": "Montero",
    "color": "black",
    "price": 4049.66,
    "seats": 2,
    "fuel_type": "Diesel",
    "car_image": "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-color-photo/gallery/mitsubishi-montero-sport-jet-black-mica-philippines-66bc35ef9ba21.jpg"
  },
  {
    "id": 72,
    "brand": "Dodge",
    "model": "Ram 1500",
    "color": "black",
    "price": 9561.63,
    "seats": 3,
    "fuel_type": "Electric",
    "car_image": "https://cdn.motor1.com/images/mgl/XPm1v/s3/ram-1500-limited-black-edition.jpg"
  },
  {
    "id": 73,
    "brand": "Mazda",
    "model": "Tribute",
    "color": "red",
    "price": 2421.92,
    "seats": 2,
    "fuel_type": "Petrol",
    "car_image": "https://www2.mazda.com/ja/100th/cars/assets/img/cars/img_042_tribute.png"
  },
  {
    "id": 74,
    "brand": "Ford",
    "model": "Thunderbird",
    "color": "red",
    "price": 5849.49,
    "seats": 4,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggRXdutiMUqWgVZBNYKxEskTfEU6L6AGWDQ&s"
  },
  {
    "id": 75,
    "brand": "Chevrolet",
    "model": "Monte Carlo",
    "color": "red",
    "price": 4054.37,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQKPWT6nISOWPU3T7npQrHOTEUxhzdOJNMQ&s"
  },
  {
    "id": 76,
    "brand": "Suzuki",
    "model": "SJ 410",
    "color": "black",
    "price": 9662.04,
    "seats": 6,
    "fuel_type": "Diesel",
    "car_image": "https://i.ytimg.com/vi/_wpD0xVJfaU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5Ekzi4Sy3v9CARBPBCrts46zPxg"
  },
  {
    "id": 77,
    "brand": "Cadillac",
    "model": "DeVille",
    "color": "white",
    "price": 3109.46,
    "seats": 2,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKk_ssJqJC-ATEQYFCGdBBH2LSa-keX-8iQ&s"
  },
  {
    "id": 78,
    "brand": "Chevrolet",
    "model": "Beretta",
    "color": "black",
    "price": 4282.2,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDtQs-R1LCdonS20KYIV0Ck98qNDLAUmKBg&s"
  },
  {
    "id": 79,
    "brand": "Chevrolet",
    "model": "Cavalier",
    "color": "green",
    "price": 7549.66,
    "seats": 6,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOKlisYTlrdV77k3yk2yJ5tdm4g1IlmazWQ&s"
  },
  {
    "id": 80,
    "brand": "Nissan",
    "model": "Altima",
    "color": "green",
    "price": 9276.35,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcDTCDHlFR6eTX9X-QtHuYpzvxCT11siCTg&s"
  },
  {
    "id": 81,
    "brand": "GMC",
    "model": "Sierra 2500",
    "color": "blue",
    "price": 6719.35,
    "seats": 4,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4vQQW4trVFydEHq35UkF-JcHx-7D7uaDyA&s"
  },
  {
    "id": 82,
    "brand": "Suzuki",
    "model": "SX4",
    "color": "white",
    "price": 5549.18,
    "seats": 2,
    "fuel_type": "Hybrid",
    "car_image": "https://i.ytimg.com/vi/inTc4CM8mnw/hqdefault.jpg"
  },
  {
    "id": 83,
    "brand": "Lexus",
    "model": "RX",
    "color": "black",
    "price": 8434.1,
    "seats": 6,
    "fuel_type": "Petrol",
    "car_image": "https://imgd.aeplcdn.com/1056x594/n/zbh9jab_1657989.jpg?q=80"
  },
  {
    "id": 84,
    "brand": "Ford",
    "model": "Econoline E350",
    "color": "blue",
    "price": 3212.15,
    "seats": 5,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenAXCBKoaP2dYTXwBhJp3ksKx6A0XIOCyog&s"
  },
  {
    "id": 85,
    "brand": "Porsche",
    "model": "911",
    "color": "green",
    "price": 4358.71,
    "seats": 3,
    "fuel_type": "Diesel",
    "car_image": "https://stimg.cardekho.com/images/car-images/large/Porsche/911/10990/1690869615558/224_green_169949.jpg?impolicy=resize&imwidth=420"
  },
  {
    "id": 86,
    "brand": "Toyota",
    "model": "Tacoma",
    "color": "green",
    "price": 9040.0,
    "seats": 6,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTai2ozh7AUM8jf8a9XI4ZYxp9q0M2P3K-wNQ&s"
  },
  {
    "id": 87,
    "brand": "GMC",
    "model": "Savana 1500",
    "color": "yellow",
    "price": 5914.79,
    "seats": 2,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCmVHyeArERc8nSwgCvhmmjeZR_Cqk918jg&s"
  },
  {
    "id": 88,
    "brand": "Mitsubishi",
    "model": "Montero Sport",
    "color": "green",
    "price": 4933.14,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJkMf_xBxKUTMCo4T8P6nTwOczo4-uMNY8Q&s"
  },
  {
    "id": 89,
    "brand": "Ford",
    "model": "F150",
    "color": "yellow",
    "price": 4725.93,
    "seats": 3,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivQHzQO6dZ6aVj67VlNcmwRWiQNSjCp7VKQ&s"
  },
  {
    "id": 90,
    "brand": "Mitsubishi",
    "model": "Montero",
    "color": "yellow",
    "price": 5002.39,
    "seats": 5,
    "fuel_type": "CNG",
    "car_image": "https://imgd.aeplcdn.com/370x208/n/4chrqsa_1477569.jpg?q=80"
  },
  {
    "id": 91,
    "brand": "Buick",
    "model": "Riviera",
    "color": "red",
    "price": 2603.07,
    "seats": 2,
    "fuel_type": "CNG",
    "car_image": "https://i.ytimg.com/vi/A5wdLReBrSs/maxresdefault.jpg"
  },
  {
    "id": 92,
    "brand": "Saturn",
    "model": "VUE",
    "color": "yellow",
    "price": 5433.15,
    "seats": 5,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURLf9qcEJ9LxT0dUPEvdRupY0me0SxAmL_g&s"
  },
  {
    "id": 93,
    "brand": "Volkswagen",
    "model": "GTI",
    "color": "yellow",
    "price": 2130.42,
    "seats": 5,
    "fuel_type": "Diesel",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4-M67BiWJPCqJ2oU7xO5GGRdjlgI8zTAtw&s"
  },
  {
    "id": 94,
    "brand": "Mercury",
    "model": "Lynx",
    "color": "pink",
    "price": 8013.34,
    "seats": 6,
    "fuel_type": "Hybrid",
    "car_image": "https://i.ytimg.com/vi/ZpTI8Lzuwvo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWShTMA8=&rs=AOn4CLCMmscDSjRPcVr6eyep0J-Xf9_p0A"
  },
  {
    "id": 95,
    "brand": "Toyota",
    "model": "Corolla",
    "color": "yellow",
    "price": 2679.31,
    "seats": 4,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxwHdPsmenmN-iVP1GuCZmBvtxOn8H-JjeQ&s"
  },
  {
    "id": 96,
    "brand": "BMW",
    "model": "325",
    "color": "white",
    "price": 2076.53,
    "seats": 5,
    "fuel_type": "Electric",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW2zS7JnNEdk5j9_r2OiaChRoWHe78L-q1A&s"
  },
  {
    "id": 97,
    "brand": "Toyota",
    "model": "MR2",
    "color": "green",
    "price": 1190.37,
    "seats": 6,
    "fuel_type": "Hybrid",
    "car_image": "https://aacarsdna.com/images/vehicles/93/large/d9f19b4e8e3f01bb131ee61b22638e0d.jpg"
  },
  {
    "id": 98,
    "brand": "Mazda",
    "model": "323",
    "color": "white",
    "price": 3302.88,
    "seats": 4,
    "fuel_type": "Petrol",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1l43IRLCYv6UI0VEk1PE1ORRoXWMFoH6GQ&s"
  },
  {
    "id": 99,
    "brand": "Buick",
    "model": "Regal",
    "color": "yellow",
    "price": 1088.47,
    "seats": 2,
    "fuel_type": "CNG",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT485H5FQUWRIFWq9Zan2Qxe819SntSezl3Sw&s"
  },
  {
    "id": 100,
    "brand": "Chevrolet",
    "model": "Blazer",
    "color": "black",
    "price": 3012.52,
    "seats": 6,
    "fuel_type": "Hybrid",
    "car_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPJjfEw5Cj-VWDH7s2waAsu4R0ma8WyRFKg&s"
  }
]

export default cars;