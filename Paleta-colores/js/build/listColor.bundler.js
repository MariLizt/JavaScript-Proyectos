"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var listColors = function listColors() {
  _newArrowCheck(this, _this);

  colorList.push(color.value);
  colores.innerHTML = colorList.length;
  localStorage.setItem("colorList", JSON.stringify(colorList));
  var camposr = "";

  for (var i = 0; i <= colorList.length - 1; i++) {
    camposr = camposr + "<li style='background:" + colorList[i] + "'>" + colorList[i] + "</li>";
  }

  lista.innerHTML = camposr;
}.bind(void 0);