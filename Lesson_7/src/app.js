//NPM - Node Package Manager
//JSON - JavaScript Object Notation

import Account from "./Account";
import CountDown from "./CountDown";
import Currency from "./Currency";

const daysValueElement = document.querySelector("#timer-days-value");
const hoursValueElement = document.querySelector("#timer-hours-value");
const minutesValueElement = document.querySelector("#timer-minutes-value");
const secondsValueElement = document.querySelector("#timer-seconds-value");

const newGroupCountDown = new CountDown("08.02.2023 20:00");
setInterval(() => {
  newGroupCountDown.calculate();

  daysValueElement.textContent = newGroupCountDown.days;
  hoursValueElement.textContent = newGroupCountDown.hours;
  minutesValueElement.textContent = newGroupCountDown.minutes;
  secondsValueElement.textContent = newGroupCountDown.seconds;
}, 1000);

const availableCurrencies = [
  new Currency("USD", 840, "Американский доллар"),
  new Currency("RUB", 643, ""),
  new Currency("EUR", 986, ""),
  new Currency("CHY", 568, ""),
  new Currency("KZT", 398, ""),

  {
    name: "Российский рубль",
    symbol: "RUB",
    code: 643,
  },
];


const customer = {
    name:"",
    surname: "",
    accounts: [
        new Account("7984689489", availableCurrencies[0]),
        new Account("7984689489", availableCurrencies[1]),
        new Account("7984689489", availableCurrencies[2]),
        new Account("4100230616", availableCurrencies[4]),
        

    ]
}

console.log(customer);

const blackFridayCountdown = new CountDown("");
const winterCollectionCountdown = new CountDown("")
const newCollectionCountdown = new CountDown("")
