"use strict";

var color = document.querySelector("#color");
console.log(color);
var salida = document.querySelector("#salida");
color.addEventListener("input", function () {
  var value = color.value; //console.log(value);

  salida.innerHTML = value;
  salida.style.background = value;
  salida.style.color = "#fff";
});