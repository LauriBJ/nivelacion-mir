function join(arreglo){
    cadena = "";
    for (let i =0; i<arreglo.length; i++)
    {
        cadena = cadena + arreglo[i] + " ";
    }
    return cadena;
}    
console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));
