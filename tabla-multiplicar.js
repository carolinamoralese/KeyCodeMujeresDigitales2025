let base = 1;
let indice = 1;

while (base <= 10) {
  console.log(`${base} x ${indice} = ${base * indice}`);

  if (indice === 10) {
    base++;
    indice = 1;
    console.log(`\nTabla del ${base}:`);
  } else {
    indice++;
  }
}
