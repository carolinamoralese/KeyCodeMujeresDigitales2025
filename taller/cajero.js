const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

let cuenta = {
    numero: "9096",
    propietario: "carolina",
    pin: "1111",
    saldo: 5000000
}

const preguntar = (pregunta) =>{
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve (respuesta))
    })
}


const iniciar = async () => {
    console.log("=== BIENVENIDOS AL CAJERO");
    
    const numeroIngresado = await preguntar("digite el numero de su cuenta: ")
    const pinIngresado = await preguntar("digite el pin: ")


    if(numeroIngresado === cuenta.numero && pinIngresado === cuenta.pin){
        console.log("puende ingresar");
        
    }else{
        console.log("no puede ingresar");
        rl.close()
        
    }
}

iniciar()