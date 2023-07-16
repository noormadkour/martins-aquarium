const database = {
  fish: [
    {
      image: "https://example.com/clownfish.jpg",
      name: "Harry",
      species: "Clown Fish",
      size: 15,
      food: "crustaceans",
      location: "Hogwarts toilet",
    },
    {
      image: "https://example.com/hedwigfish.jpg",
      name: "Hedwig",
      species: "Snowy Fish",
      size: 20,
      food: "small fish",
      location: "Owlery Pond",
    },
    {
      image: "https://example.com/hermionefish.jpg",
      name: "Hermione",
      species: "Bookworm Fish",
      size: 10,
      food: "insects",
      location: "Library Lake",
    },
    {
      image: "https://example.com/ronfish.jpg",
      name: "Ron",
      species: "Ginger Guppy Fish",
      size: 12,
      food: "fish flakes",
      location: "Gryffindor Pond",
    },
    {
      image: "https://example.com/dumbledorefish.jpg",
      name: "Dumbledore",
      species: "Wise Lionfish",
      size: 25,
      food: "Naughty children",
      location: "Headmaster's Aquarium",
    },
  ],
};

export const getFish = () => {
  return database.map((fish) => ({ ...fish }));
};
