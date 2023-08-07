const response = {
    query: "New York", // city input from request
    message: "success", // 'Error, no such city'
    places: {
      restaurants: [
        {
          name: "Pet-Friendly Restaurant 1",
          short_description: "A cozy restaurant with a pet-friendly patio.",
          long_description:
            "Pet-Friendly Restaurant 1 is known for its delicious food and welcoming atmosphere for pets.",
          images: ["img1.png", "img2.png"],
          cover: "imgCover.png",
        },
        {
          name: "Pet-Friendly Restaurant 2",
          short_description: "An upscale dining experience where pets are welcome.",
          long_description:
            "Pet-Friendly Restaurant 2 offers a fine selection of dishes and a pet-friendly dining area.",
          images: ["img3.png", "img4.png"],
          cover: "imgCover.png",
        },
        // More restaurant objects can be included here...
      ],
      parks: [
        {
          name: "City Park",
          short_description: "A spacious park with walking trails for you and your pets.",
          long_description:
            "City Park is a beautiful recreational area where you can enjoy nature with your furry friends.",
          images: ["img5.png", "img6.png"],
          cover: "imgCover.png",
        },
        {
          name: "Doggy Meadows",
          short_description: "A park designed specifically for dogs to play and socialize.",
          long_description:
            "Doggy Meadows is an off-leash dog park with plenty of space for your pets to run and play.",
          images: ["img7.png", "img8.png"],
          cover: "imgCover.png",
        },
        // More park objects can be included here...
      ],
      shops: [
        {
          name: "Pet Boutique",
          short_description: "A boutique offering stylish accessories for your pets.",
          long_description:
            "Pet Boutique provides a wide range of fashionable accessories and toys for your furry companions.",
          images: ["img9.png", "img10.png"],
          cover: "imgCover.png",
        },
        {
          name: "Pet Superstore",
          short_description: "A one-stop-shop for all your pet's needs.",
          long_description:
            "Pet Superstore offers a vast selection of pet supplies, from food to grooming essentials.",
          images: ["img11.png", "img12.png"],
          cover: "imgCover.png",
        },
        // More shop objects can be included here...
      ],
      hotels: [
        {
          name: "Pet-Friendly Inn",
          short_description: "A charming inn that welcomes guests with their pets.",
          long_description:
            "Pet-Friendly Inn offers comfortable rooms and pet-friendly accommodations for your stay.",
          images: ["img13.png", "img14.png"],
          cover: "imgCover.png",
        },
        {
          name: "Paw's Paradise Hotel",
          short_description: "A luxury hotel that pampers both you and your pets.",
          long_description:
            "Paw's Paradise Hotel provides top-notch amenities and services for you and your beloved pets.",
          images: ["img15.png", "img16.png"],
          cover: "imgCover.png",
        },
        // More hotel objects can be included here...
      ],
    },
  };
  