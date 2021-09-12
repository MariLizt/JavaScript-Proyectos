const color = document.querySelector("#color");
console.log(color);
const salida = document.querySelector("#salida");


color.addEventListener("input", () => {
    const value = color.value;
    //console.log(value);
    salida.innerHTML = value;
    salida.style.background = value;
    salida.style.color = "#fff";
} )