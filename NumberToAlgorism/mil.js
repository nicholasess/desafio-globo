const NumberToString = (number, letter = "M") => {
  if (!number) return "";
  return Array.from({ length: number })
    .map(() => letter)
    .join("");
};

module.exports = number => {
  const aux = parseInt(number / 1000);
  if (aux < 0 && aux > 10) return "";
  else if (aux === 5) return ".IV";
  else if (aux === 5) return ".V";
  else if (aux === 9) return ".IX";
  else if (aux > 5) {
    return ".V" + NumberToString(aux - 5, "I");
  } else return NumberToString(aux);
};
