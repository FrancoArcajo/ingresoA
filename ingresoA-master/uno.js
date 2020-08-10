/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let temperatura
	let mujerMasTemperatura;
	let flag = 0;
	let mayorTemperatura;
	let contadorHombres = 0;
	let contadorMujeres = 0;
	let acumEdad = 0;
	let promedioEdad;
	

	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese el nombre");
		while(nombre == ""){
			nombre = prompt("Error! Ingrese bien el nombre");
		}
		edad = parseInt(prompt("Ingrese la edad"));
		while(edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("Error! Ingrese una edad valida"));
		}
		sexo = prompt("Ingrese el sexo").toLowerCase();
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error! Ingrese un sexo valido").toLowerCase();

        }
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error! Ingrese una temperatura valida"));
		}
		acumEdad += edad;

		switch (sexo) {
			case "f":
				contadorMujeres++
				break;
			case "m":
				contadorHombres++
				break;
		}
		promedioEdad = acumEdad / 5;
         
		if(flag == 0){
			mayorTemperatura = temperatura;
			mujerMasTemperatura = nombre;
			flag = 1;
		}else if(temperatura > mayorTemperatura){
			mujerMayorTemperatura = nombre;
		}
}
console.log("A. Cantidad de mujeres " + contadorMujeres + ". Cantidad de hombres: " + contadorHombres + ".");
console.log("B. El promedio de todas las edades es de " + promedioEdad + ".");

if (contadorMujeres === 0) {
	console.log("C. No hay mujeres.");
}
else {
console.log("C.La mujer con mayor temperatura se llama: " + mujerMayorTemperatura);

}
}

