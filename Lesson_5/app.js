//ECMAScript 5 (ES5) 2009
//ECMAScript 6+ (ES6) 2015
//Babel
var a;
//let const
// Hoisting - поднятие\всплытие
console.log(a);

a = 5;
let b = 10;
const c = 10;

console.log("b in global ", b);
//Scopes - области видимости
{
  let b = 7;
  console.log("b in local ", b);
}
console.log("b in global ", b);

function getRange(min, max, step) {
  var range = [];
  step = step || 1;
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}
range = "1-10";
console.log(range);
console.log("range = ", getRange(1, 10));
console.log(range);

b = 100;
console.log("const = ", c);
// c++; // c = c + 1
console.log(b);

const numbers = [1, 2, 3];
console.log("numbers = ", numbers);
numbers.push(4);
numbers.unshift(0);
console.log("numbers = ", numbers);

const person = {
  name: "Ivan",
  surname: "Ivanov",
  account: {
    no: "123456789",
    curr: "KGS",
    balance: 500,
  },
};

// person.age = 18;
// delete person.name;
// person.surname = "Petrov";

//template strings - шаблонные строки

person.fullname = person.surname + " " + person.name;
person.fullname2 = `${person.surname} ${person.name}`;

console.log(
  `Уважаемый ${person.fullname}, 
  на вашем счете ${person.account.no} 
  остаток составляет ${person.account.balance} ${person.account.curr}`
);

console.log("Уважаемый " + person.fullname + ", на вашем счете ");

//arrow functions - стрелочные функции
// console.log(sum);
// console.log(sumArrow);

const sum = function (a, b) {
  return a + b;
};

const sumArrow = (a = 0, b = 0) => a + b;

console.log(sum(2, 2));
console.log("sumArrow = ", sumArrow());

const passwordLength = (password) => password.length >= 8;

function passwordHasDigit(password) {
  return password.split("").some((symbol) => symbol >= "0" && symbol <= "9");
}

function passwordHasUpperCase(password) {
  return password.split("").some(function (symbol) {
    return symbol >= "A" && symbol <= "Z";
  });
}

function passwordHasLowerCase(password) {
  return password.split("").some(function (symbol) {
    return symbol >= "a" && symbol <= "z";
  });
}

function passwordHasSpecialChars(password) {
  return password.split("").some(function (symbol) {
    return ["!", "@", "#", "$", "%", "^", "&", "*", "_"].includes(symbol);
  });
}

const calculatePasswordStrength = (password) =>
  0 +
  passwordLength(password) +
  passwordHasDigit(password) +
  passwordHasLowerCase(password) +
  passwordHasUpperCase(password) +
  passwordHasSpecialChars(password);

console.log(calculatePasswordStrength("12345qwerty@QWERT"));

//default params - параметры по умолчанию

const BankSettings = {
  maskSymbol: "X",
};

const getMaskSymbolFromSettings = () => BankSettings.maskSymbol;

function maskString(text, mask = "*") {
  var leftOpenPart = text.substring(0, 6);
  var maskedPart = mask.repeat(text.length - 6 - 4);
  var rightOpenPart = text.substring(text.length - 4);
  return leftOpenPart + maskedPart + rightOpenPart;
}

"".substring();

console.log(maskString("4512789845632547", "#", 1, 2, 3, 4, 5));

//rest spread operators
console.log(1);
console.log(11, 11);
console.log(11, 11, [], {}, null);
console.log(11, 11, [], {}, null, 5, 5, 5, 5, "dsicsd");

const sumMany = function () {
  let sum = 0;
  for (const i of arguments) sum += i;
  return sum;
};
console.log(sumMany(1, 2, 3));
console.log(sumMany(1, 2, 3, 4));
console.log(sumMany());

//openAccountInAnotherCurrency(account, EUR, USD)
//openAccountInAnotherCurrency(account, EUR, USD, CNY, KZT)
// function openAccountInAnotherCurrency() {
//   const accounts = [];
//   const account = arguments[0];
//   for (const currency of Array.from(arguments).slice(1)) {
//     accounts.push({
//       no: account.no,
//       curr: currency,
//       balance: 0,
//     });
//   }
//   return accounts;
// }

const cardNUmber = {
  no: "",
  curr: "",
  balance: "",
  cards: [],
};

function openAccountInAnotherCurrency({ no: accountNo }, ...currencies) {
  const accounts = [];
  for (const currency of currencies) {
    accounts.push({
      no: accountNo,
      curr: currency,
      balance: 0,
    });
  }
  return accounts;
}

const currencies = ["USD", "EUR"];
//openAccountInAnotherCurrency(account, EUR, USD)
console.log(openAccountInAnotherCurrency(person.account, ...currencies));
// console.log(
//   openAccountInAnotherCurrency(person.account, "EUR", "USD", "CNY", "KZT")
// );

const numbers2 = [5, 4, 7, 1, 2];
console.log("Max number is", Math.min(...numbers2));

const {
  no: AccountNo,
  curr: AccountCurrency,
  balance: AccountBalance,
} = { ...person.account };

// const AccountNo = person.account.no;
// const AccountCurrency = person.account.curr;
// const AccountBalance = person.account.balance;

//classes and modules
