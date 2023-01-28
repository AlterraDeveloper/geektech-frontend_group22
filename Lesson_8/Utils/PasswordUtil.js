export function passwordHas8Chars(password) {
  return password.length >= 8;
}

export function passwordHasDigit(password) {
  return password.split("").some((symbol) => symbol >= "0" && symbol <= "9");
}

export function passwordHasUpperCase(password) {
  return password.split("").some(function (symbol) {
    return symbol >= "A" && symbol <= "Z";
  });
}

 export const passwordHasLowerCase = (password) => {
  return password.split("").some(function (symbol) {
    return symbol >= "a" && symbol <= "z";
  });
}

export const passwordHasSpecialChars = (password) => {
  return password.split("").some(function (symbol) {
    return ["!", "@", "#", "$", "%", "^", "&", "*", "_"].includes(symbol);
  });
}
