function sum(arreglo){
    let suma = 0;
    for (i=0; i<arreglo.length; i++){
        suma = suma + arreglo[i];
    }
    return suma      
}
console.log(sum([1,2,3]));
console.log(sum([10,8,12,5]));
console.log(sum([]));




