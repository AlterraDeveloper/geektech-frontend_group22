export const PasswordHelper = {
  passwordHas8Chars: function (password) {
    return password.length >= 8;
  },

  passwordHasDigit: function (password) {
    return password.split("").some((symbol) => symbol >= "0" && symbol <= "9");
  },

  passwordHasUpperCase: function (password) {
    return password.split("").some(function (symbol) {
      return symbol >= "A" && symbol <= "Z";
    });
  },

  passwordHasLowerCase: (password) => {
    return password.split("").some(function (symbol) {
      return symbol >= "a" && symbol <= "z";
    });
  },

  passwordHasSpecialChars: (password) => {
    return password.split("").some(function (symbol) {
      return ["!", "@", "#", "$", "%", "^", "&", "*", "_"].includes(symbol);
    });
  },
};
