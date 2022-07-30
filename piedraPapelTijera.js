const prompt = require("prompt-sync")({ sigint: true });

let ingresoUsuario = parseInt(prompt("Ingrese 1:piedra 2:papel 3:tijera      =  "));
let ganaUsuario="        uFFFFF he Perdido .... ˘_˘٥ . ¡¡ Tú has Ganado !!"
let pierdeUsuario="        He GANADO!. Lo siento"
let empate="        ¡ EMPATE ! "

let aleatorio =()=> {
    a=parseInt(Math.random()*3+1) //devuelve 1 2 o 3
    let r=""
    switch(a){
        case 1:
            r="PIEDRA"
            console.log(r);
            break
        case 2:
            r="PAPEL"
            console.log(r);
            break
        case 3:
            r="TIJERA"
            console.log(r);
            break
       }
    if(ingresoUsuario===1 && r=== "PIEDRA"){console.log(empate);}
    if(ingresoUsuario===1 && r=== "PAPEL"){console.log(pierdeUsuario);}
    if(ingresoUsuario===1 && r=== "TIJERA"){console.log(ganaUsuario);}

    if(ingresoUsuario===2 && r=== "PIEDRA"){console.log(ganaUsuario);}
    if(ingresoUsuario===2 && r=== "PAPEL"){console.log(empate);}
    if(ingresoUsuario===2 && r=== "TIJERA"){console.log(pierdeUsuario);}

    if(ingresoUsuario===3 && r=== "PIEDRA"){console.log(pierdeUsuario);}
    if(ingresoUsuario===3 && r=== "PAPEL"){console.log(ganaUsuario);}
    if(ingresoUsuario===3 && r=== "TIJERA"){console.log(empate);}

 
    
}

while (isNaN(ingresoUsuario) == true  || ingresoUsuario<1  || ingresoUsuario>3) {
    ingresoUsuario = parseInt(prompt("Ingrese 1:piedra 2:papel 3:tijera y que sean numeros enteros   "));
  }
switch(ingresoUsuario){
    case 1:
        console.log("Ingresó: PIEDRA");
        break
    case 2:
        console.log("Ingresó: PAPEL");
        break
    case 3:
        console.log("Ingresó: TIJERA");
        break
   }
console.log("Ahora es mi turno!!! : ");
aleatorio()
