const number = 6880;
const NumberToAlgorism = require("./NumberToAlgorism/index");
const isNumber = value => Number.isInteger(value);

const AlgorismToNumber = () => {
  console.log("AlgorismToNumber");
};

const Run = value => {
  console.log("Number: " + value);
  isNumber(value) ? NumberToAlgorism(value) : AlgorismToNumber(value);
};

Run(number);
