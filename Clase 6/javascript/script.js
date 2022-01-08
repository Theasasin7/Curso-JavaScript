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

document.onload = console.log("loading :D");

console.log(ordenarIngredientes(prompt("Como desearia ordenar los ingredientes? \nid \nnombre \ncantidad \nprecio")));