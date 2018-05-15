const Mil = require("./mil");
const Cem = require("./cem");
const Dez = require("./dez");
const Uni = require("./uni");

module.exports = number => {
  let string = "";
  string += Mil(number);
  string += Cem(number % 1000);
  string += Dez((number % 1000) % 100);
  string += Uni(((number % 1000) % 100) % 10);
  console.log(string);
};
