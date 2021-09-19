const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const storage = localStorage.getItem("colorValue") || "#ffffff";

const boton = document.querySelector("#button-save-color");
const colores = document.querySelector("#colors");
const lista = document.querySelector("#list");
const colorList = [];
const campos = JSON.parse(localStorage.getItem("colorList"));