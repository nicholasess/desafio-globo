const NumberToString = number => {
  if (!number) return "";
  return Array.from({ length: number })
    .map(() => "C")
    .join("");
};

module.exports = number => {
  const aux = parseInt(number / 100);
  if (aux < 0 && aux > 10) return "";
  else if (aux === 4) return "CD";
  else if (aux === 5) return "D";
  else if (aux === 9) return "CM";
  else if (aux > 5) {
    return "D" + NumberToString(aux - 5);
  } else return NumberToString(aux);
};
