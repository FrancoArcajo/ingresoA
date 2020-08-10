/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombreTitular;
	let lugar;
	let temporada;
	let cantidadPasajeros;
	let contadorSalta=0;
	let contadorCataratas=0;
	let contadorBariloche=0;
	let titularMasPasajeros;
	let acumPersonas = 0;
	let flagMasPasajeros = 0;
	let promedioInvierno = 0;
	let cantidadPersonas;
	let contadorPersonasInvierno = 0;
	let lugarMasElegido;

do  {

nombreTitular = prompt("Ingrese el nombre del titular");
while (!(isNaN(nombreTitular))) {
nombreTitular = prompt("Inválido. Ingrese el nombre del titular")
}

lugar = prompt("Ingrese el lugar").toLowerCase();
while(lugar !="salta" && lugar!="bariloche" && lugar!="cataratas"){
	lugar = prompt("Ingrese un destino valido").toLowerCase();
}
temporada = prompt("Ingrese la temporada").toLowerCase();
while(temporada!="otoño" && temporada!="primavera" && temporada!="invierno" && temporada != "verano"){
	temporada=prompt("Ingrese una temporada valida").toLowerCase();
}
cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));
while(cantidadPasajeros <=0 || isNaN(cantidadPasajeros)){
	cantidadPasajeros=parseInt(prompt("Ingrese una cantidad valida"));
}

switch(lugar){
	case "salta":
		contadorSalta++;
	break;
	case "bariloche":
		contadorBariloche++;
		break;
	case "cataratas":
		contadorCataratas++;
		break;
	}

	if(flagMasPasajeros == 0){
		titularMasPasajeros = cantidadPersonas;
		titularMasPasajeros = nombreTitular;
		flagMasPasajeros = 1
	}

	else if(cantidadPersonas > titularMasPasajeros){
		titularMasPasajeros = cantidadPersonas;
		titularMasPasajeros = nombreTitular;
	}

	if(temporada == "invierno"){
		contadorPersonasInvierno ++;
		acumPersonas = acumPersonas + cantidadPersonas;
		
	}
	promedioInvierno = acumPersonas / contadorPersonasInvierno;
 
	seguir = prompt("Desea ingresar otra estadia?(s/n)");
}while(seguir == 's') 

if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
	lugarMasElegido = "Bariloche";
} else if (contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta) {
	lugarMasElegido = "Cataratas";
} else {
	lugarMasElegido = "Salta";
}

console.log(`A. El lugar mas elegido es ${lugarMasElegido}`);
console.log(`B. El nombre del titular que lleva mas pasajeros es ${titularMasPasajeros}`);
console.log(`C. En invierno el promedio de personas por viaje es de ${promedioInvierno}`);
}