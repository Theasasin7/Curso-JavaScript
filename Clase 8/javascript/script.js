//-------------------------------------------------------------Array de Objetos Ingredientes--------------------------------------------------

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
//---------------------------------------------Array de porcentajes y sus funciones para sumarlas al total------------------------------------
const porcentaje = [.10,.15,.20,.25,.30];

function propina(total,porcentaje) {
    return total + total*porcentaje;
}

function iva(total) {
    return (total + total*0.0475).toFixed(2);
}

//-------------------------------------------------------------Array de objeto del carrito de compras-------------------------------------

carritoDeCompras = [];

//------------------------------------------------------------------Clase de el Objeto Comprar-----------------------------------------

class Comprar{
    constructor(id,nombre,cantidad,precio){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
//----------------------------------------Funciones de agregar y eliminar Ingredientes al carrito de compras y Local Storage--------------------------- 

function agregarIngrediente(pizza){
    let orden = document.createElement("p");
    orden.setAttribute ("id","eliminar"+pizza.id);
    orden.innerHTML = `${pizza.nombre} - $${pizza.precio} <strong id="eliminarAlmacen${pizza.id}">X</strong>`;
    document.getElementById("pagar").appendChild(orden);
    agregarCompraAlmacenLocal(pizza.id);
    document.getElementById("eliminarAlmacen"+pizza.id).addEventListener("click",()=>{
        document.getElementById("eliminar"+pizza.id).remove();
        eliminarIngredienteAlmacenLocal(pizza.id);
    });
    repintarRestaTotal();
}


function agregarIngredienteAlmacenLocal() {
    if(JSON.parse(localStorage.getItem('carritoDeCompra')) != null){
        JSON.parse(localStorage.getItem('carritoDeCompra')).forEach(comprar => {
            let orden = document.createElement("p");
            orden.setAttribute ("id","eliminar"+comprar.id);
    orden.innerHTML = `${comprar.nombre} - $${comprar.precio} <strong id="eliminarAlmacen${comprar.id}">X</strong>`;
    document.getElementById("pagar").appendChild(orden);
        });
        eliminarIngredienteCarrito();
    }
}

function repintarRestaTotal(){
    const almacenLocalCarritoCompra = document.getElementById("pagar");
    let total = 5;
    if(JSON.parse(localStorage.getItem('carritoDeCompra')) != null){
        JSON.parse(localStorage.getItem('carritoDeCompra')).forEach(comprar => {
            total+=parseFloat(comprar.precio);
            if (document.getElementById("precioTotal") !=null || total == 0) {
                document.getElementById("precioTotal").remove();
            }
        });
        if (total > 5) {
            let precioTotal = document.createElement("div");
            precioTotal.innerHTML = `<p>total: $${total.toFixed(2)}</p>`;
            precioTotal.setAttribute("id","precioTotal");
            almacenLocalCarritoCompra.appendChild(precioTotal);
        }else {
            document.getElementById("precioTotal").remove();
        }
    }
}

function eliminarIngredienteCarrito() {
    JSON.parse(localStorage.getItem('carritoDeCompra')).forEach(comprar =>{
        document.getElementById("eliminarAlmacen"+comprar.id).addEventListener("click",()=>{
            document.getElementById("eliminar"+comprar.id).remove();
            eliminarIngredienteAlmacenLocal(comprar.id);
        });
    })
}

function eliminarIngredienteAlmacenLocal(id) {
    carritoDeCompras.splice(carritoDeCompras.findIndex(el => el.id == id),1);
    localStorage.setItem("carritoDeCompra", JSON.stringify(carritoDeCompras));
    try {
        repintarRestaTotal();
    }catch{}
}

agregarIngredienteAlmacenLocal();

function agregarCompraAlmacenLocal(posicion){
    carritoDeCompras.push(new Comprar(carritoDeCompras.length,Ingredientes[posicion].nombre,Ingredientes[posicion].cantidad,Ingredientes[posicion].precio));
    localStorage.setItem("carritoDeCompra", JSON.stringify(carritoDeCompras));
}

function carritoDeCompraAlmacenLocal(){
    const almacenLocalCarritoCompra = JSON.parse(localStorage.getItem('carritoDeCompra'));
    if(almacenLocalCarritoCompra != null){
        almacenLocalCarritoCompra.forEach(comprar => {
            carritoDeCompras.push(comprar);
        });
        try {
            repintarRestaTotal();
        } catch (error) {
            
        }
    }
}
carritoDeCompraAlmacenLocal();
//------------------------------------------------------DOM de array de objetos para separarlas en 2 listas----------------------------------

const listaCarnes = document.getElementById ("carnes");
const listaVegetales = document.getElementById ("vegetales");

const carnes = Ingredientes.filter(ingrediente => ingrediente.id <=5);

carnes.forEach((carne) => {
    let listaC = document.createElement("li");
    listaC.innerHTML = `${carne.nombre} - $${carne.precio} <button id="${carne.nombre}">Agregar</button>`;
    listaCarnes.appendChild(listaC);
    document.getElementById(carne.nombre).addEventListener("click",() => {
        agregarIngrediente(carne);
    });
});

const vegetales = Ingredientes.filter(ingrediente => ingrediente.id >= 6);


vegetales.forEach((vegetal) => {
    let listaV = document.createElement("li");
    listaV.innerHTML = `${vegetal.nombre} - $${vegetal.precio} <button id="${vegetal.nombre}">Agregar</button>`;
    listaVegetales.appendChild(listaV);
    document.getElementById(vegetal.nombre).addEventListener("click",() => {
        agregarIngrediente(vegetal);
    });
});

//------------------------------------------------------------------Evento del boton para pagar---------------------------------------------

document.getElementById("boton").addEventListener("click", () => {
    let pagoTotal = 0;
    carritoDeCompras.forEach((pizza) => {
        pagoTotal+=pizza.precio;
    });
    console.log(propina(pagoTotal,.5));
});