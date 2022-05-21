/*
Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N, números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros.
*/

function tipoDeNumerosEnArreglo() {
  let arreglo: number[] = []; // arreglo vacio
  let cantidadDeElementos: number = Number(
    prompt("Ingrese la cantidad de elementos del arreglo")
  );
  for (let i = 0; i < cantidadDeElementos; i++) {
    //Pido los elementos del arreglo.
    arreglo[i] = Number(prompt("Ingrese un numero")); //Los guardo en el arreglo.
    console.log(arreglo[i]); //Imprimo el arreglo de entrada.
  }
  let cantidadDePositivos: number = 0;
  let cantidadDeNegativos: number = 0;
  let cantidadDeCeros: number = 0;
  for (let i = 0; i < cantidadDeElementos; i++) {
    //Recorro el arreglo.
    if (arreglo[i] > 0) {
      //Si el elemento es positivo.
      cantidadDePositivos++; //Aumento la cantidad de positivos.
    } else if (arreglo[i] < 0) {
      //Si el elemento es negativo.
      cantidadDeNegativos++; //Aumento la cantidad de negativos.
    } else {
      //Si el elemento es cero.
      cantidadDeCeros++; //Aumento la cantidad de ceros.
    }
  }
  console.log("La cantidad de positivos es: " + cantidadDePositivos); //Imprimo la cantidad de positivos
  console.log("La cantidad de negativos es: " + cantidadDeNegativos); //Imprimo la cantidad de negativos
  console.log("La cantidad de ceros es: " + cantidadDeCeros); //Imprimo la cantidad de ceros
}

tipoDeNumerosEnArreglo(); //Llamo a la funcion
