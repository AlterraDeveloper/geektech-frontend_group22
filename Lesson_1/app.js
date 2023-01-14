/*

Урок 1
Тема: основы JS
Дата: 4 января

*/

//1) String - текстовый, строковый
var surname = "Kiselev";
var name = "Evgeniy";
console.log(surname);
surname = "Ivanov";
console.log(surname);
console.log("typeof string =>", typeof surname);

//2) Number - числовой
var customerId = 564; // Camel Case
console.log("typeof number =>", typeof customerId);

//3) Boolean - логический

var isResident = false;
console.log("typeof boolean => ", typeof isResident);

//4) NUll - нулевой или пустой

var birthDate = null;
console.log("typeof null =>", typeof birthDate);

//5) undefined - неопределенный

var passport;
console.log("passport =>", passport);
console.log("typeof undefined =>", typeof passport);

//6) Object - объектный или комплексный

var passport = {
  Series: "ID",
  Number: "123456",
  IssueAuthority: "ROVD Bishkek",
  IssueDate: "01-01-2015", // DD-MM-YYYY
  ExpiryDate: "01-01-2025",
};

var customer = {
  Surname: "Ivanov",
  Name: "Ivan",
  BirthDate: null,
  IsResident: false,
  Passport: passport,
};
console.log("typeof object =>", typeof customer);

//Операции

//1) String Строковый
//  Конкатенация
var customerFullName = customer.Surname + " " + customer.Name;
console.log(customerFullName);

//2) Number

var customerCardBalance = Infinity;

var customerId = NaN; // NaN - Not a Number

//3) Boolean
// Операторы сравнения - > < >= <= == === != !==
// Логические операторы: && ||

var loanAmount = prompt("Enter loan amount");
var loanCurrency = prompt("Enter loan currency");

function getAmountInKgs(amount, currency) {
  switch (currency) {
    case "USD":
      return amount * 85.5;
    case "EUR":
      return amount * 102.5;
    case "RUB":
      return amount * 1.4;
    default:
      return amount;
  }

  if (currency === "USD") {
    return amount * 85.5;
  } else if (currency === "EUR") {
    return amount * 102.5;
  } else if (currency === "RUB") {
    return amount * 1.4;
  } else {
    return amount;
  }
}

//Ветвление
if (customer.IsResident || getAmountInKgs(loanAmount, loanCurrency) <= 200000) {
  console.log("Issue approved");
} else {
  console.warn("Customer must be resident");
}

console.log(Number(loanAmount) + 1000);

var customerDepositPeriod = 24;

if (customerDepositPeriod > 0 && customerDepositPeriod < 24) {
  console.log("Short-term deposit");
} else if (customerDepositPeriod >= 24 && customerDepositPeriod < 60) {
  console.log("Middle-term deposit");
} else if (customerDepositPeriod >= 60) {
  console.log("Long-term deposit");
}
