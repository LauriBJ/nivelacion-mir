function entero(n){
    let matriz = new Array();
    nro =1
    for (fila = 0; fila <n; fila++){
        matriz[fila]=new Array();
        for(columna =0; columna <n; columna++){
            matriz[fila][columna] = nro;
            nro = nro+1;
            for (columna = fila; columna <fila; columna --){
                fila --;
                matriz[fila][columna] = nro;
                nro = nro+1;
            }
        }
    }
    return matriz
   
}

console.log(entero(2))