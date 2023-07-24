const database = {
  fish: [
    {
      image:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/553540_358794477541166_1099483186_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QeFzNga1x-QAX8WAraW&_nc_oc=AQlxf8JbNFopblIdYHI8uHgAH0BJvXbhDthZ2Mh_877-Nb2VVS5oDApKVoKir-1S22g&_nc_ht=scontent-atl3-1.xx&oh=00_AfCyFEpC-y9rXB8xSMP2vz0c744hRozLO5EwqzmHw5lTcQ&oe=64E0399D",
      name: "Harry",
      species: "Harry Pufferfish",
      size: 15,
      food: "crustaceans",
      location: "Snapes Storeroom",
    },
    {
      image:
        "https://i0.wp.com/kimsmithdesigns.com/wp-content/uploads/2018/01/snowy-owl-taking-a-bath-hedwig-gloucester-ma-12-copyright-kim-smith.jpg?fit=960%2C640&ssl=1",
      name: "Hedwig",
      species: "Snowy Fish",
      size: 22,
      food: "small fish",
      location: "Owlery Pond",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Zj_EA4xXlXaZpBCBZyfeSt5SNzKRdV0vJA&usqp=CAU",
      name: "Hermione",
      species: "Bookworm Fish",
      size: 9,
      food: "insects",
      location: "Library Lake",
    },
    {
      image:
        "https://www.rover.com/blog/wp-content/uploads/2019/08/gold-1022229_1920-960x540.jpg",
      name: "Ron",
      species: "Ginger Guppy Fish",
      size: 12,
      food: "fish flakes",
      location: "Gryffindor Pond",
    },
    {
      image:
        "https://www.bettafish.com/attachments/008dd831-25a8-40ad-bee0-eca3c41449fd-jpeg.1028724/",
      name: "Dumbledore",
      species: "Wise Lionfish",
      size: 17,
      food: "Naughty children",
      location: "Headmaster's Aquarium",
    },
  ],
  tips: [
    {
      id: 1,
      tip: "Perform regular water changes to maintain water quality.",
      category: "cleanliness",
    },
    {
      id: 2,
      tip: "Monitor the salinity levels regularly for saltwater tanks.",
      category: "salinity",
    },
    {
      id: 3,
      tip: "Arrange tank decorations and plants for optimal feng shui.",
      category: "organization",
    },
    {
      id: 4,
      tip: "Avoid overfeeding the fish to prevent water contamination.",
      category: "cleanliness",
    },
    {
      id: 5,
      tip: "Keep a consistent light schedule to mimic natural day-night cycles.",
      category: "lighting",
    },
  ],
  locations: [
    {
      location: "Lake Michigan",
      harvestingTip:
        "Check local fishing regulations and obtain necessary permits before harvesting fish from Gryffindor Pond.",
    },
    {
      location: "Gulf of Mexico",
      harvestingTip:
        "Be mindful of catch limits and avoid harvesting endangered species in the the Library Lake.",
    },
    {
      location: "Amazon River",
      harvestingTip:
        "Harvest fish sustainably to preserve the unique biodiversity of the Owlery Pond.",
    },
    {
      location: "Pacific Ocean",
      harvestingTip:
        "Be aware of potential contamination in certain areas of Snapes Storeroom and follow consumption advisories.",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
  return database.tips.map((tip) => ({ ...tip }));
};

export const getLocations = () => {
  return database.fish.map((location) => ({ ...location }));
};

export const getTipLocations = () => {
  return database.locations.map((location) => ({ ...location }));
};

export const comboFunction = () => {
  let comboArray = [];
  const fishes = getFish();
  for (const fish of fishes) {
    if (fish.size % 3 === 0) {
      comboArray.push(fish);
    }
  }
  for (const fish of fishes) {
    if (fish.size % 5 === 0 && !comboArray.includes(fish)) {
      comboArray.push(fish);
    }
  }
  for (const fish of fishes) {
    if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
      comboArray.push(fish);
    }
  }
  return comboArray;
};
