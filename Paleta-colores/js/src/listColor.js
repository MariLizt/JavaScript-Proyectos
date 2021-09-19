const listColors = () =>{
    colorList.push(color.value);
    colores.innerHTML = colorList.length;
    localStorage.setItem("colorList", JSON.stringify(colorList));

    var camposr = "";

    for(let i=0; i<=colorList.length-1; i++){
        camposr = camposr+ "<li style='background:" + colorList[i] +"'>"+ colorList[i] +"</li>";
    }

    lista.innerHTML = camposr;


}