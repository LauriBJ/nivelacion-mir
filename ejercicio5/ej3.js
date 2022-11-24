function maxIndex(arreglo){
    maxNum = 0;
    indice = 0;
    if (arreglo.length > 0){
        for (let i =0; i < arreglo.length; i++){
            if (maxNum < arreglo[i]){
                maxNum = arreglo[i];
                indice = i;
            }
        
        }
    }else {indice = -1}
    
    return indice
}

console.log(maxIndex([1,3,2]))
console.log(maxIndex([10,9,8,7,6,5,4]))
console.log(maxIndex([]))

