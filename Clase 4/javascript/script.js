//------------------------------------------------------------------------Array de objetos------------------------------------------
const Ingredientes = [
    {
        id: 0,
        nombre: "Pepperoni",
        cantidad: 100,
        precio: 1.99
    },
    {
        id: 1,
        nombre: "Salchicha Italiana",
        cantidad:80,
        precio: 1.99
    },
    {
        id: 2,
        nombre: "Jamon",
        cantidad: 150,
        precio: 1.99
    },
    {
        id: 3,
        nombre: "Tocino",
        cantidad: 200,
        precio: 1.99
    },
    {
        id: 4,
        nombre: "Pollo",
        cantidad: 100,
        precio: 2.99
    },
    {
        id: 5,
        nombre: "Anchoas",
        cantidad: 75,
        precio: 3.99
    },
    {
        id: 6,
        nombre: "Champiñones",
        cantidad: 100,
        precio: 2.99
    },
    {
        id: 7,
        nombre: "Jalapeños",
        cantidad: 80,
        precio: 1.99
    },
    {
        id: 8,
        nombre: "Espinaca",
        cantidad: 60,
        precio: 2.99
    },
    {
        id: 9,
        nombre: "Cebolla",
        cantidad: 120,
        precio: 1.99
    },
    {
        id: 10,
        nombre: "Aceitunas Negras",
        cantidad: 150,
        precio:2.99
    },
    {
        id: 11,
        nombre: "Pimientos Verdes",
        cantidad: 200,
        precio: 1.99
    }
];
//-----------------------------------------------------------------Funcion de ordenar ingredientes----------------------------------------
function ordenarIngredientes(propiedad){
    if(propiedad=="id"){
        console.log(Ingredientes.sort((a,b) => a.id - b.id));
    } else if (propiedad=="nombre"){
        console.log(Ingredientes.sort((a,b) => (a.nombre < b.nombre) ? -1 : (a.nombre > b.nombre) ? 1 : 0));
    } else if (propiedad=="cantidad"){
        console.log(Ingredientes.sort((a,b) => a.cantidad - b.cantidad));
    }  else if (propiedad=="precio"){
        console.log(Ingredientes.sort((a,b) => a.precio - b.precio));
    } else {
        console.log("Error escribe literalmente: 'id', 'nombre', 'cantidad', 'precio'");
    }
}
//------------------------------------------------------------------Funcion de pedido de pizza-----------------------------------------------
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
//---------------------------------------------------------------Array de porcentaje para propinas----------------------------------------------
const porcentaje = [0, 1, 2, 3, 4];

function propina(total,porcentaje) {
    return total + total*porcentaje;
}

function iva(total) {
    return (total + total*0.0475).toFixed(2);
}

function entrega(direccion) {
    if (direccion.length>0){
        return "El pedido sera entregado a la direccion: " + direccion + ".";
    }else {
        return "Recoger pedido en la pizzeria.";
    }
}
//---------------------------------------------------------------Clase de objeto para usuarios-------------------------------------------------
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

document.onload = console.log("loading :D");

console.log(porcentaje.join(" - "));

const usuarioRegistrado = new Usuario (prompt("Cual es su nombre?"),prompt("Escriba una contraseña:"),prompt("Cual es su correo electronico?"),prompt("Escriba su direccion:"),prompt("Numero de telefono:"));

// console.log(ordenarIngredientes(prompt("Como desearia ordenar los ingredientes? \nid \nnombre \ncantidad \nprecio")));

alert("El costo total del pedido es: $" + iva(propina(comprarPizza(),porcentaje.map(x => x / 20)[parseInt(prompt("Escoge cuanto desea donar de propina: \n1 - 0% \n2 - 5% \n3 - 10% \n4 - 15% \n5 - 20%"))-1])) + "\n" + entrega(usuarioRegistrado.direccion));
usuarioRegistrado.mostrarDatos();