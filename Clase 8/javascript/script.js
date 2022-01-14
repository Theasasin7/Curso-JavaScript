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

const listaCarnes = document.getElementById ("carnes");

Ingredientes.forEach((ingrediente) => {

    let listaC = document.createElement("li");
    if (ingrediente.id<=5)

    listaC.innerHTML = `${ingrediente.nombre} - ${ingrediente.precio}`;

listaCarnes.appendChild(listaC);
});
const listaVegetales = document.getElementById ("vegetales");

Ingredientes.forEach((ingrediente) => {
    let listaV = document.createElement("li");
    if (ingrediente.id>5)

    listaV.innerHTML = `${ingrediente.nombre} - ${ingrediente.precio}`;

listaCarnes.appendChild(listaV);
});