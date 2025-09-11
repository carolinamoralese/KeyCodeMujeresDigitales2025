const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cuentas = [
  {
    numero: "9096",
    propietario: "carolina",
    pin: "1111",
    saldo: 5000000,
  },
  {
    numero: "1396",
    propietario: "Dani",
    pin: "2810",
    saldo: 10000000,
  },
];

let cuentaActiva = null;

const preguntar = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => resolve(respuesta));
  });
};

const menu = async () => {
  console.log("-------Menu-----");
  console.log("1. Consultar saldo");
  console.log("2. Depositar dinero");
  console.log("3. Retirar dinero");
  console.log("4. Cerrar sesion");
  console.log("5. Salir \n");

  const opcionIngresada = await preguntar("Selecciona una opcion");
  switch (opcionIngresada) {
    case "1":
      console.clear();
      console.log("=== Consulta Saldo ===");
      console.log(`Su saldo actual es ${cuentaActiva.saldo}`);
      break;
    case "2":
      console.clear();
      console.log("=== Depositar dinero ===");
      const valorDeposito = Number(await preguntar("Monto a depositar"));

      if (valorDeposito > 0) {
        cuentaActiva.saldo += valorDeposito;
        console.log(`Deposito existo, su nuevo saldo es ${cuentaActiva.saldo}`);
      } else {
        console.log("Monto invalido");
      }

      break;
    case "3":
      console.clear();
      console.log("=== Retirar dinero ===");
      const valorRetiro = Number(await preguntar("Monto a retirar"));

      if (valorRetiro > 0 && valorRetiro <= cuentaActiva.saldo) {
        cuentaActiva.saldo -= valorRetiro;
        console.log(`Retiro existo, su nuevo saldo es ${cuentaActiva.saldo}`);
      } else {
        console.log("Fondos insuficiente o Monto invalido");
      }
      break;
    case "4":
      console.clear();
      console.log("=== Gracias por usar ===");
      cuentaActiva = null;
      return;

    case "5":
      console.log("=== Session cerrada ===");
      return iniciar();
      
    default:
      console.log("=== Opcion no valida ===");
      break;
  }

  menu();
};

const iniciar = async () => {
  console.clear();

  console.log("=== BIENVENIDOS AL CAJERO ===");

  const numeroIngresado = await preguntar("digite el numero de su cuenta: ");
  const pinIngresado = await preguntar("digite el pin: ");

  const cuentaEncontrada = cuentas.find(
    (cuenta) => cuenta.numero === numeroIngresado && cuenta.pin === pinIngresado
  );

  if (cuentaEncontrada) {
    cuentaActiva = cuentaEncontrada;
    console.log(`Cuenta valida ${cuentaActiva.propietario ?? "Invitado"}`);
    menu();
  } else {
    console.log("Credenciales invalidadas");
    rl.close();
  }
};

iniciar();
