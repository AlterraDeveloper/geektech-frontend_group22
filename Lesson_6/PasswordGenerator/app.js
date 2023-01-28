const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", () => {
  const lengthValue = document.querySelector("#length");
  const passwordLength = lengthValue.value;

  const checkedRules = Object.keys(generateRules).filter(
    (rule) => generateRules[rule]
  );

  if (!checkedRules.length) return;

  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i += checkedRules.length) {
    checkedRules.forEach((rule) => {
      switch (rule) {
        case "uppercase":
          generatedPassword += getRandomUpperCase();
          break;
        case "lowercase":
          generatedPassword += getRandomLowerCase();
          break;
        case "numbers":
          generatedPassword += getRandomNumber();
          break;
        case "symbols":
          generatedPassword += getRandomSymbol();
          break;
      }
    });
  }
  const finalPassword = generatedPassword.substring(0, passwordLength);
  const resultElement = document.querySelector("#result");
  resultElement.textContent = finalPassword;
});

const clipboardButton = document.getElementById("clipboard");
clipboardButton.addEventListener("click", () => {
  const resultElement = document.querySelector("#result");
  const password = resultElement.textContent;
  navigator.clipboard.writeText(password);
  alert("Password copied!");
});

const generateRules = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
};

const checkButtons = document.querySelectorAll("input[type=checkbox]");
checkButtons.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    generateRules[checkbox.id] = checkbox.checked;
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomUpperCase = () =>
  String.fromCharCode(getRandomInt("A".charCodeAt(0), "Z".charCodeAt(0)));

const getRandomLowerCase = () =>
  String.fromCharCode(getRandomInt("a".charCodeAt(0), "z".charCodeAt(0)));

const getRandomNumber = () =>
  String.fromCharCode(getRandomInt("0".charCodeAt(0), "9".charCodeAt(0)));

const getRandomSymbol = () => {
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];
  const index = getRandomInt(0, symbols.length - 1);
  return symbols[index];
};
