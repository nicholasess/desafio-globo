const NumberToString = number => {
  if (!number) return "";
  return Array.from({ length: number })
    .map(() => "X")
    .join("");
};

module.exports = number => {
  const aux = parseInt(number / 10);
  console.log(aux);
  if (aux < 0 && aux > 10) return "";
  else if (aux === 4) return "XL";
  else if (aux === 5) return "L";
  else if (aux === 9) return "XIX";
  else if (aux > 5) {
    return "L" + NumberToString(aux - 5);
  } else return NumberToString(aux);
};
