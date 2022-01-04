let direccion;

function comprarPizza(){
    let precio = 5;
    let exit = true;

    while(exit){
        let tipoDePizza = parseInt(prompt("Que ingredientes desearia en su pizza:\n1 - Carnes \n2 - Vegetales\n3 - Pagar"));
        let pizzaSeleccionada;
        if(tipoDePizza==1){
            pizzaSeleccionada = parseInt(prompt("Estas son las carnes que tenemos disponibles\n1 - Pepperoni\n2 - Salchicha Italiana\n3 - Jamon\n4 - Tocino\n5 - Pollo\n6 - Anchoas"));
            if(pizzaSeleccionada==1){
                precio+= 1.99;
            }else if(pizzaSeleccionada==2){
                precio+= 1.99;
            }else if(pizzaSeleccionada==3){
                precio+= 1.99;
            }else if(pizzaSeleccionada==4){
                precio+= 1.99;
            }else if(pizzaSeleccionada==5){
                precio+= 2.99;
            }else if(pizzaSeleccionada==6){
                precio+= 3.99;
            }else{
                alert("Error porfavor elija un numero del 1 al 6.");
            }
        }else if(tipoDePizza == 2){
            pizzaSeleccionada = parseInt(prompt("Estos son los vegetales que tenemos disponibles\n1 - Champiñones\n2 - Jalapeños\n3 - Espinaca\n4 - Cebolla\n5 - Aceitunas negras\n6 - Pimientos verdes"));
            if(pizzaSeleccionada==1){
                precio+= 2.99;
            }else if(pizzaSeleccionada==2){
                precio+= 1.99;
            }else if(pizzaSeleccionada==3){
                precio+= 2.99;
            }else if(pizzaSeleccionada==4){
                precio+= 1.99;
            }else if(pizzaSeleccionada==5){
                precio+= 2.99;
            }else if(pizzaSeleccionada==6){
                precio+= 1.99;
            }else{
                alert("Error porfavor elija un numero del 1 al 6.");
            }
        }else if(tipoDePizza == 3){
            return precio;
            exit = false;
        }else{
            alert("Error porfavor escribe un numero del 1 al 3.");
        }
    }    
}

function propina(porcentaje,total) {
    return total + total*porcentaje;
}

function iva(total) {
    return (total + total*0.0475).toFixed(2);
}

function entrega() {
    let domicilio = prompt("Quiere entrega a domicilio? Escribe Si o No");

    if (domicilio=="Si"){
        return prompt("Escriba su direccion de entrega:");
    }else {
        return "Recoger pedido en la pizzeria.";
    }
}

direccion = entrega();
alert("El costo total del pedido es: $" + iva(propina(.10,comprarPizza())) + "\nDireccion de envio: " + direccion);