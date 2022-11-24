function max(arreglo){
    maxNum = 0;
    for (let i =0; i < arreglo.length; i++){
        if (maxNum < arreglo[i]){
            maxNum = arreglo[i];
        }
    }
    return maxNum
}

console.log(max([1,3,2]))
console.log(max([10,9,8,7,6,5,4]))
console.log(max([]))

