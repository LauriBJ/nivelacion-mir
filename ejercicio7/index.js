let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push(
  {
    nombre: "pan",
    cantidad: 2,
  },
  {
    nombre: "queso",
    cantidad: 1,
  }
);

console.log(receta.ingredientes[0].nombre);

let suma = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  suma = suma + receta.ingredientes[i].cantidad;
}
console.log(suma);
