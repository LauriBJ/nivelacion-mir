let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
}

pedro.estatura = 1.8;
delete pedro.activo;

for (let key in pedro){
    if (pedro.hasOwnProperty(key)){
        console.log(key + ": " + pedro[key]);
    }
}

pedro.saluda = function ( ) {
    return ("Hola me llamo:" + pedro.nombre)
    
}
console.log(pedro.saluda());

//console.log(pedro);

