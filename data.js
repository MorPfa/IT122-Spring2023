const cars = [
  { manufacturer: "Ford", model: "Mustang", horsepower: 480, trimModel: "GT" },
  { manufacturer: "Toyota", model: "Supra", horsepower: 382, trimModel: "GR" },
  {
    manufacturer: "Chevy",
    model: "Corvette",
    horsepower: 405,
    trimModel: "Z06",
  },
  { manufacturer: "BMW", model: "3Series", horsepower: 500, trimModel: "M3" },
  {
    manufacturer: "Nissan",
    model: "Skyline",
    horsepower: 300,
    trimModel: "GTR",
  },
];
const getAll = () => cars;
const getItem = (attr) => cars.find((item) => item.manufacturer === attr);

export { getAll };
export { getItem };
