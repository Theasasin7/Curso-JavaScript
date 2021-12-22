for (let n = 0; n <= 4; n++) {
    let numero = parseInt(prompt("Tienes " + (5-n) + " intentos. Introduce un numero aleatorio para saber si es par o impar:"));
    if ((numero%2)==0) {
        alert ("El numero que introdujo es par.");
    }else {
        alert ("El numero que introdujo es impar.");
    }
}