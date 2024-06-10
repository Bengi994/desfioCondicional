let numeroX = -1
let test = "Variable fuera del bloque";

if (numeroX < 1){
    console.log(test)
    let numeroY = numeroX + 5
    let text = "El numero de la condicion es : "+numeroY
    console.log(text)
}

/* calor = prompt('Que temperatura es')
if(calor==30){
    alert("ya esta haciendo calor 🥵")
}else
alert("tranqui") */

parrafo = document.querySelector('#parrafoX')
parrafo.style.border = 'none'