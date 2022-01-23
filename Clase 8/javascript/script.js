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

const porcentaje = [.10,.15,.20,.25,.30];

function propina(total,porcentaje) {
    return total + total*porcentaje;
}

function iva(total) {
    return (total + total*0.0475).toFixed(2);
}

carritoDeCompras=[{id: 12,nombre: "Queso",cantidad: true, precio: 5.00}];

function agregarIngrediente(pizza){
    let orden = document.createElement("p");
    orden.innerHTML = `${pizza.nombre} - $${pizza.precio}`;
    document.getElementById("pagar").appendChild(orden);
    carritoDeCompras.push(pizza);
}

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

document.getElementById("boton").addEventListener("click", () => {
    let pagoTotal = 0;
    carritoDeCompras.forEach((pizza) => {
        pagoTotal+=pizza.precio;
    });
    console.log(propina(pagoTotal,.5));
});