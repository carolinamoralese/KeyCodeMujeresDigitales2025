const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askNumber = (ask) => {
  return new Promise((resolver) => {
    rl.question(ask, (respuesta) => {
      const numero = Number(respuesta);

      if (isNaN(numero)) {
        console.log("Ingresa un número válido");
        resolver(askNumber(ask))
      } else {
        resolver(numero);
      }
    });
  });
};


const menu = async () => {
  let numberOne

  let numberTwo

  let resultado;
  console.log("Opciones Calculadora");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Porcentaje");
  console.log("6. Salir");

  const optionEntered = await askNumber("Que operacion necesitas hacer? ");

   if (optionEntered !== 6) {
    numberOne = await askNumber("Ingrese el número uno: ");
    numberTwo = await askNumber("Ingrese el número dos: ");
  }

  
  switch (optionEntered) {
    case 1:
      console.clear();
      console.log(`Sumar ${numberOne} + ${numberTwo}`);

      if (numberOne >= 0 && numberTwo >= 0) {
        resultado = numberOne + numberTwo;
        console.log(`==== El resultado de la operacion es: ${resultado} ===== \n`);
      }
      break;

    case 2:
      console.clear();
      console.log(`Restar ${numberOne} - ${numberTwo}`);

      if (numberOne >= 0 && numberTwo >= 0) {
        resultado = numberOne - numberTwo;
        console.log(`==== El resultado de la operacion es: ${resultado} ==== \n`);
      }else{
        console.log("El numero dos no puede ser menor al numero uno ");
        
      }
      break;

    case 3:
      console.clear();
      console.log(`Multiplicar ${numberOne} * ${numberTwo}`);

      if (numberOne >= 0 && numberTwo >= 0) {
        resultado = numberOne * numberTwo;
        console.log(`======= El resultado de la operacion es: ${resultado} ====== \n`);
      }
      break;

    case 4:
      console.clear();
      console.log(`Dividir ${numberOne} / ${numberTwo}`);

      if (numberOne >= 0 && numberTwo >= 0 && numberTwo > 0) {
        resultado = numberOne / numberTwo;
        console.log(`==== El resultado de la operacion es: ${resultado} ==== \n`);
      }
      break;

    case 5:
      console.clear();
      console.log(`Porcentaje ${numberOne} % ${numberTwo}`);

      if (numberOne >= 0 && numberTwo >= 0) {
        resultado = (numberOne * numberTwo) / 100;
        console.log(`==== El resultado de la operacion es: ${resultado} ====\n`);
      }
      break;

    case 6:
      console.clear();
      console.log("==== Gracias por usar la calculadora==== \n");
      rl.close();
      return;

    default:
      break;
  }

  menu();
};

const start = async () => {
  console.clear;

  console.log("Calculadora tech");
  menu();
};

start();
