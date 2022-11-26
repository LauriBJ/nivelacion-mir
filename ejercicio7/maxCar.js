function maxCaracter(cadena) {
  let repetidos = {};
  for (let i = 0; i < cadena.length; i++) {
    if (repetidos[cadena[i]]) {
      //si esta el valor
      repetidos[cadena[i]]++;
    } else {
      repetidos[cadena[i]] = 1; // crea uno nuevo valor al objeto
    }
  }
  console.log(repetidos);
  let max = 0;
  let char = " ";
  for (let key in repetidos) {
    if (repetidos[key] > max) {
      char = key;
      max = repetidos[key];
    }
  }
  return char;
}
console.log(maxCaracter("abcccccd")); // "c"
