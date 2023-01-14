//HTML - Hyper Text Markup Language
//HTTP(S) - Hyper Text Transfer Protocol (secured)
//DOM - Document Object Model
//yandex.ru -> 111.45.7.18

// var num = "123";
// var numNum = Number.parseInt(num);
// console.log(numNum + 1);

document.body.style.backgroundColor = "blue";

// var h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
// h1.style.color = "white";
// h1.textContent = "I learn HTML, CSS, JavaScript";

// var _document = {
//   head: {},
//   body: {
//     style: {
//       margin: 0,
//       padding: 0,
//     },
//     h1: {},
//   },
// };

function passwordLength(password) {
  return password.length >= 8;
}

function passwordHasDigit(password) {
  return password.split("").some(function (symbol) {
    return symbol >= "0" && symbol <= "9";
  });
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

function calculatePasswordStrength(password) {
  var passStrength = 0;
  passStrength += passwordLength(password);
  passStrength += passwordHasDigit(password);
  passStrength += passwordHasLowerCase(password);
  passStrength += passwordHasUpperCase(password);
  passStrength += passwordHasSpecialChars(password);
  return passStrength;
}

function createLineItem(passwordStrength) {
  var div = document.createElement("div");
  div.classList.add("lineItem");
  switch (passwordStrength) {
    case 1:
      div.style.backgroundColor = "#802614";
      break;
    case 2:
      div.style.backgroundColor = "#ec3611";
      break;
    case 3:
      div.style.backgroundColor = "#dd9522";
      break;
    case 4:
      div.style.backgroundColor = "#e5e91f";
      break;
    case 5:
      div.style.backgroundColor = "#28de10";
      break;
  }
  return div;
}

// var passwordInput = document.getElementById("password");
var passwordInput = document.querySelector("#password");
passwordInput.addEventListener("input", function (event) {
  var password = event.target.value;
  var strength = calculatePasswordStrength(password);
  console.log(password, " = ", strength);
  var lineContainer = document.getElementById("line");
  lineContainer.innerHTML = "";
  for (var i = 0; i < strength; i++) {
    var lineItem = createLineItem(i + 1);
    lineContainer.appendChild(lineItem);
  }
});

function createEyeIcon(type) {
  var i = document.createElement("i");
  i.classList.add("fa-solid");
  switch (type) {
    case "password":
      i.classList.add("fa-eye");
      break;
    case "text":
      i.classList.add("fa-eye-slash");
  }
  return i;
}

var button = document.getElementById("btn");
button.addEventListener("click", function (event) {
  var inputType = passwordInput.getAttribute("type");

  passwordInput.setAttribute(
    "type",
    inputType === "password" ? "text" : "password"
  );
  button.innerHTML = "";
  button.appendChild(createEyeIcon(passwordInput.getAttribute("type")));
});
// button.addEventListener("mouseleave", function () {
//   passwordInput.setAttribute("type", "password");
// });
