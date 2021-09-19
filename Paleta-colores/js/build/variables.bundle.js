"use strict";

var color = document.querySelector("#color");
var salida = document.querySelector("#salida");
var storage = localStorage.getItem("colorValue") || "#ffffff";
var boton = document.querySelector("#button-save-color");
var colores = document.querySelector("#colors");
var lista = document.querySelector("#list");
var colorList = [];
var campos = JSON.parse(localStorage.getItem("colorList"));