function palindrome(cadena) {
  const pal = cadena.toLowerCase().split(" ").join("");
  const lap = pal.split("").reverse().join("");
  let resultado = pal === lap ? true : false;
  console.log(pal);
  console.log(lap);
  return resultado;
}

console.log(palindrome("Amor a Roma")); // Output: true

console.log(palindrome("vamos makers!")); // Output: false
