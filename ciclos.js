

/*1) Hacer un  for que vaya del 0 al 5 de uno en uno */

for (let i=0; i<6; i++) {
    console.log(i)
}

/*2) Hacer un for que vaya del 0 al 10 de dos en dos*/

for (let i=0; i<11; i=i+2) {
    console.log(i)
}


/*3) Hacer un for que muestre letra por letra*/

let contra = prompt ("Ingrese una palabra")

for ( let i=0; i<contra.length; i++) {
    console.log (contra.charAt(i))}


/*4) Hacer un for que ingresada una palabra, corte cuando se encuentre la primera "A"*/

let pala = prompt ("Ingrese una palabra")

for ( let i=0; i<pala.length; i++) {
    let bandera = false
    if (pala.charAt(i)==="A") {
        bandera = true
    console.log("La palabra tiene A en la posicion "+(i+1))
}
else if(bandera=false){
    console.log("la palabra no tiene A")
}
}

/*5) Hacer un for que ingresada una palabra, corte cuando se encuentre la primer vocal*/

let palavoc = prompt ("Ingrese una palabra")

for ( let i=0; i<palavoc.length; i++) {
    let bandera = false
    if ((palavoc.charAt(i)==="A") || (palavoc.charAt(i)==="E") || (palavoc.charAt(i)==="I") ||(palavoc.charAt(i)==="O") ||  (palavoc.charAt(i)==="U")) {
        bandera = true
    console.log("La palabra tiene vocal en la posicion "+(i+1))
}
else if(bandera=false){
    console.log("la palabra no tiene vocal")
}
}
/*Escribir un ciclo que pida un numero al usuario y muestre el factorial de dicho numero*/

let nume = prompt ("Ingrese un numero")

let total = 1; 
	for (i=1; i<=nume; i++) {
		total = total * i
        console.log(total)
    }