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

function entrega(direccion) {
    if (direccion.length>0){
        return "El pedido sera entregado a " + direccion + ".";
    }else {
        return "Recoger pedido en la pizzeria.";
    }
}

class Usuario {
    constructor (nombre,contra,correo,direccion,telefono){
        this.nombre = nombre;
        this.contra = contra;
        this.correo = correo;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    modificarDireccion(direccion){
        this.direccion = direccion;
    }

    mostrarDatos(){
        alert("Tu nombre es " + this.nombre + ".\nTu contraseña es " + this.contra + ".\nTu correo es " + this.correo + ".\nTu direccion es " + this.direccion + ".\nTu numero de telefono es " + this.telefono + ".");
    }
}


const usuarioRegistrado = new Usuario (prompt("Cual es su nombre?"),prompt("Escriba una contraseña:"),prompt("Cual es su correo electronico?"),prompt("Escriba su direccion:"),prompt("Numero de telefono:"));

alert("El costo total del pedido es: $" + iva(propina(.10,comprarPizza())) + "\nDireccion de envio: " + entrega(usuarioRegistrado.direccion));
usuarioRegistrado.mostrarDatos();
usuarioRegistrado.modificarDireccion(prompt("Escribe una nueva direccion."));
usuarioRegistrado.mostrarDatos();