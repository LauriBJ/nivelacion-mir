function suma(numero){
    let num1=0;
    if (numero>0){
        for (let i = 1; i <= numero; i++)  
        {
            num1 = num1+i;
            
        }  
    }
    return(num1);
}
console.log("La suma es: " + suma(4));
console.log("La suma es: " + suma(10));
console.log("La suma es: " + suma(15))