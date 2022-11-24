let productos = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 },
];

function productosBaratos(productos) {
  let baratos = []; // para filtrar
  for (let i = 0; i < productos.length; i++) {
    //console.log(productos[i]);
    if (productos[i].precio >= 5 && productos[i].precio <= 10) {
      baratos.push(productos[i].nombre);
    }
  }

  return baratos;
}

console.log(productosBaratos(productos));
