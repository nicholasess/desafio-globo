const NumberToString = number => {
  if (!number) return "";
  return Array.from({ length: number })
    .map(() => "I")
    .join("");
};

module.exports = aux => {
  aux = parseInt(aux);
  if (aux < 0 && aux > 10) return "";
  else if (aux === 4) return "IV";
  else if (aux === 5) return "V";
  else if (aux === 9) return "IX";
  else if (aux > 5) {
    return "V" + NumberToString(aux - 5);
  } else return NumberToString(aux);
};
