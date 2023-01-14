var childrenYears = [2002, 2005, 2007, 1999, 2013, 2015];
// indexes             0     1     2     3     4     5
var realChildrenYears = [];

var currentYear = 2022;

for (var childrenYear of childrenYears) {
  var childAge = currentYear - childrenYear;
  if (childAge <= 12) {
    realChildrenYears.push(childAge);
  }
}

console.log(typeof realChildrenYears);

var a = 5;
// a = a + 1;
// a += 5;
// a++; // a += 1 a = a + 1
// a--;
//for(;;)

for (var i = 0; i < childrenYears.length; i += 2) {
  console.log(childrenYears[i]);
}

var rangeArray = [];
var startRange = 0;
var endRange = 1000;
var step = 25;

for (var i = startRange; i <= endRange; i += step) {
  rangeArray.push(i);
}
console.log(rangeArray);

var numbers = [1, 2, 3, 4, 5];
var reverseNumbers = [];
for (var i = numbers.length - 1; i >= 0; i--) {
  reverseNumbers.push(numbers[i]);
}
console.log(reverseNumbers);
reverseNumbers = [];
console.log(reverseNumbers);

//while(true)
// while (numbers.length > 0) {
//   reverseNumbers.push(numbers.pop());
// }
// console.log(reverseNumbers);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var guessNumber = getRandomInt(1, 5);
// var tries = 0;

// do {
//   var userNumber = Number(prompt("Enter number 1 - 5"));
// } while (userNumber !== guessNumber);

// console.log("Guessed number =", guessNumber);

var firstSum = 0;
var depositPeriod = 24;
var amountPerMonth = 5000;
var depositRate = 0.14;

var depositMainSum = 0;
var depositPercentSum = 0;
var useCapitalization = false;

for (var month = 1; month <= depositPeriod; month++) {
  depositMainSum += month === 1 ? firstSum : amountPerMonth;
  //   if (month === 1) {
  //     depositMainSum += firstSum;
  //   } else {
  //     depositMainSum += amountPerMonth;
  //   }
  var percents = Math.round(depositMainSum * (depositRate / 12));
  depositPercentSum += percents;
  if (useCapitalization) depositMainSum += percents;
  console.log(month, depositMainSum, depositPercentSum);
}

var customer = {
  Surname: "Ivanov",
  Name: "Ivan",
  BirthDate: null,
  IsResident: false,
  phoneNumbers: ["+996 555 112233", "+996 (500) 11-22-33", "+7 897 457-12-23"],
};

console.log(
  "Статус клиента:",
  customer.IsResident ? "Резидент" : "Не резидент"
  //условие ? значение_если_правда : значение_если_ложь
);

for (var phoneNumber of customer.phoneNumbers) {
  var formattedPhone = "";
  for (var char of phoneNumber) {
    if (char >= "0" && char <= "9") formattedPhone += char;
  }
  console.log(formattedPhone);
}

var cardNumber = "154678941561467";
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
console.log(sum, sum % 10 === 0);