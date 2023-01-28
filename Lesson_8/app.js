import User from "./Models/User";
import * as PasswordHelper from "./Utils/PasswordUtil";
// import { passwordHasDigit, passwordHasLowerCase, passwordHasSpecialChars, passwordHasUpperCase } from "./Utils/PasswordUtil";
import { PasswordHelper as PasswordHelper2 } from "./Utils/PasswordUtil2";
import { AncestryJson } from "./Data/Ancestry";

const me = new User("Evgeniy Kiselev", "ekiselev", "12345");

console.log(me.greet());

//Сериализация
const meJson = JSON.stringify(me);
console.log(meJson);

//Десериализация парсинг
const meFromJson = JSON.parse(meJson);
console.log(meFromJson);
// console.log(meFromJson.greet()); //error

const numberFromString = Number.parseInt("00000589");
console.log(numberFromString);

const usersJson = `[
    {
      "username": "Evgeniy Kiselev",
      "login": "ekiselev",
      "password": "12345"
    },
    {
      "username": "Ivanov Ivan",
      "login": "iivanov",
      "password": "54321"
    },
    {
      "username": "Ivanov Ivan",
      "login": "iivanov",
      "password": "54321"
    },
    {
      "username": "Ivanov Ivan",
      "login": "iivanov",
      "password": "54321"
    }
  ]
  `;

const users = JSON.parse(usersJson);
console.log(users.length, users);

console.log(
  "passwordHas8Chars =>",
  PasswordHelper.passwordHas8Chars(me.password)
);
console.log(
  "passwordHasDigit =>",
  PasswordHelper.passwordHasDigit(me.password)
);
console.log(
  "passwordHasLowerCase =>",
  PasswordHelper.passwordHasLowerCase(me.password)
);
console.log(
  "passwordHasUpperCase =>",
  PasswordHelper.passwordHasUpperCase(me.password)
);
console.log(
  "passwordHasSpecialChars =>",
  PasswordHelper.passwordHasSpecialChars(me.password)
);
console.log("-".repeat(20));
console.log(
  "passwordHas8Chars =>",
  PasswordHelper2.passwordHas8Chars(me.password)
);
console.log(
  "passwordHasDigit =>",
  PasswordHelper2.passwordHasDigit(me.password)
);
console.log(
  "passwordHasLowerCase =>",
  PasswordHelper2.passwordHasLowerCase(me.password)
);
console.log(
  "passwordHasUpperCase =>",
  PasswordHelper2.passwordHasUpperCase(me.password)
);
console.log(
  "passwordHasSpecialChars =>",
  PasswordHelper2.passwordHasSpecialChars(me.password)
);

const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map((num) => num ** 2));
// console.log(numbers.map((num) => num.toString().padStart(3,'0')));
// console.log(numbers);

const ancestry = JSON.parse(AncestryJson);

console.log(
  ancestry.map((person) => {
    return {
      name: person.name,
      sex: person.sex === "m" ? "male" : "female",
      age: person.died - person.born,
    };
  })
);

// console.log(numbers.filter((num) => num % 2 !== 0));

console.log(
  ancestry
    .map((person) => {
      return {
        name: person.name,
        sex: person.sex === "m" ? "male" : "female",
        age: person.died - person.born,
      };
    })
    .filter((person) => person.sex === "female" && person.age > 80)
);

// console.log(numbers.reduce((sum, num) => (sum += num), 0));
// console.log(
//   numbers.reduce(
//     (sumArray, num) => {
//       sumArray[0] += num % 2 === 0 ? num : 0; //сумма четных
//       sumArray[1] += num % 2 !== 0 ? num : 0; //сумма нечетных
//       return sumArray;
//     },
//     [0, 0]
//   )
// );

console.log(
  ancestry
    .map((person) => {
      return {
        name: person.name,
        sex: person.sex === "m" ? "male" : "female",
        age: person.died - person.born,
      };
    })
    .filter((person) => person.sex === "male")
    .reduce((longestLifeWoman, woman) =>
      longestLifeWoman.age < woman.age ? longestLifeWoman : woman
    )
);