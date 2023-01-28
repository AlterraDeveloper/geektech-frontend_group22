"use strict";

//NPM - Node Package Manager

//JSON - JavaScript Object Notation

var a = 5;

var sum = function sum(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};