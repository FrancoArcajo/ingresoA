/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/ function mostrar() {
    let seguir;
    let peso;
    let tipo;
    let marca;
    let precio;
    let acumPeso = 0;
    let liquidosCarosPrecio = 0;
    let flagLiquidosCaros = 0;
    let marcaLiquidosCaros;
    let marcaSolidosLivianos;
    let flagSolidosLivianosPeso = 0;
    let solidosLivianosPeso = 0;
    
  
    do {
      marca = prompt("Ingrese la marca del producto");
      precio = parseFloat(prompt("Ingrese el precio del producto"));
      while (precio <= 0 || isNaN(precio)) {
        precio = parseFloat(prompt("Inválido. Ingrese el precio del producto"));
      }
  
      peso = parseFloat(prompt("Ingrese el peso del producto."));
      while (peso <= 0 || isNaN(peso)) {
        peso = parseFloat(prompt("Inválido. Ingrese el peso del producto."));
      }
  
      tipo = prompt('Ingrese el tipo de producto: "solido" o "liquido"').toLowerCase();
      while (tipo != "solido" && tipo != "liquido") {
        tipo = prompt('Inválido. Ingrese el tipo de producto: "solido" o "liquido"').toLowerCase();
      }
      
  acumPeso += peso;

      switch (tipo) {

        case "solido":
            if (!(flagSolidosLivianosPeso) || peso < solidosLivianosPeso) {
              solidosLivianosPeso = peso;
              flagSolidosLivianosPeso = 1;
              marcaSolidosLivianos = marca;
            }

        case "liquido":
          if (!(flagLiquidosCaros) || precio > liquidosCarosPrecio) {
            liquidosCarosPrecio = precio;
            flagLiquidosCaros= 1;
            marcaLiquidosCaros = marca;        
      }
    }
      seguir = prompt("¿Desea ingresar otro producto?").toLowerCase();
    } while (seguir === 's');
  
    console.log("A. El peso total de la compra es: " + acumPeso);

    console.log("B. El producto líquido más caro es marca " + marcaLiquidosCaros + ".");

    console.log("C. El producto sólido más liviano es marca " + marcaSolidosLivianos + ".");
  }

