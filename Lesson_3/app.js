function fnName() {}

// paste your code here...
//function expression - функциональное выражение
var printDelimiter = function () {
  console.log("-".repeat(30));
};

//function declaration - определение функции
function drawTriangle(height, symbol) {
  symbol = symbol || "*";
  for (var i = 0; i < height; i++) {
    console.log(symbol.repeat(i + 1));
  }
}
drawTriangle(7, "%", 5, true, [1, 2, 3], null, NaN);
printDelimiter();
drawTriangle(3);

function printMyOS() {
  switch (navigator.platform) {
    case "Linux x86_64":
      console.log("Download for Linux");
      break;
    case "Win32":
    case "Win64":
      console.log("Download for Windows");
      break;
  }
}

drawTriangle(5, "$");
printDelimiter();
printMyOS();

// f(x^2)
//  x =1 f = 1
//  x = 2 f = 4

function validateByLuhn(cardNumber) {
  var isSecond = false;
  var sum = 0;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var cardDigit = Number(cardNumber[i]);

    if (isSecond) {
      var doubledDigit = cardDigit * 2;
      if (doubledDigit.toString().length === 2) {
        var digitAsString = doubledDigit.toString(); //16 -> "16"
        sum += Number(digitAsString[0]) + Number(digitAsString[1]);
      } else {
        sum += doubledDigit;
      }
    } else {
      sum += cardDigit;
    }
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}

var validationResult = validateByLuhn("4586197845128984");
console.log(validationResult);
console.log(validateByLuhn("1546789415614678"));

console.log([1, 2, 3, 4, 5].join());

//Falsy (ложноподобные) - false, 0, NaN, null, undefined, ''
//Truthy - все что не Falsy

var formatCardNumber = function (cardNumber, separator, groupLength) {
  var i = 0;
  var formatResult = "";
  while (i < cardNumber.length) {
    formatResult += "".concat(
      cardNumber.substring(i, i + groupLength),
      separator
    );
    i += groupLength;
  }
  return formatResult.trim();
};

console.log(formatCardNumber("1546789415614678", " ", 4));
console.log(formatCardNumber("1546789415614678", " ", 8));

function checkIsOnlyDigits(text) {
  var result = 0;
  for (var symbol of text) {
    if (symbol >= "0" && symbol <= "9") result++; // 0 1 2 3 ...
  }
  return result === text.length;
}

//20105199012345
function validateKgInn(inn) {
  var innLength = inn.length === 14;
  var onlyDigits = inn.split("").every(function (symbol) {
    return symbol >= "0" && symbol <= "9";
  });
  var firstSymbol = [0, 1, 2].includes(Number(inn[0]));
  return innLength && onlyDigits && firstSymbol;
}

console.log(validateKgInn("20105199012345") ? "INN correct" : "INN invalid");
console.log(validateKgInn("12345678912345") ? "INN correct" : "INN invalid");

// tewurw7+!iwTWRF***0%%

function passwordLength(password) {
  return password.length > 8;
}

function passwordHasDigit(password) {
  return password.split("").some(function (symbol) {
    return symbol >= "0" && symbol <= "9";
  });
}

var password = "Welcome1";
console.log(passwordLength(password));
console.log(passwordHasDigit(password));

var names = ["Anna", "Jenny", "Alexander", "Jack", "Bob", "Martin"];

//findFunc - это callback (функция обратного вызова)
function findElementIndex(array, findFunc) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (findFunc(element)) return i;
  }
}

var jIndex = findElementIndex(names, function (element) {
  return element.startsWith("J");
});
var jIndex2 = names.findIndex(function (element) {
  return element.startsWith("J");
});
var alexIndex = findElementIndex(names, function (element) {
  return element.length > 7;
});
var alexIndex2 = names.findIndex(function (element) {
  return element.length > 7;
});
// var bobIndex = findElementIndex(names, "bob");
console.log(names[jIndex]);
console.log(names[jIndex2]);
console.log(names[alexIndex]);
console.log(names[alexIndex2]);
