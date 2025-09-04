//const number = 10;

const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

rl.question("escribe un numero", (n) => {
    const number = Number(n)
    if (isNaN(number)) {
        console.log("Entrada invalida, no es un número ");
        rl.close()
    } else if (number % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Impar");
    }
    rl.close()
})



//for
for (let index = 0; index <= 5; index++) {
    console.log(`vuelve numero: ${index}`);
    
    
}

