/*function Persona() {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const persona1 = new Persona ({
    nombre: "Homer",
    edad: 32,
    calle: "Av.Siempreviva 742"
});

persona1.edad = 31;

console.log(persona1);*/

class Pizza {
    constructor () {
        this.ingrediente1 = "bacon";
        this.ingrediente2 = "salchicha";
        this.ingrediente3 = "pollo";
    }
    bacon() {
        console.log("Tu pizza sera de " + this.ingrediente1 + ".");
    }
}


/*const pizza = new Pizza();

console.log(pizza.ingrediente1);
console.log(pizza.ingrediente2);
console.log(pizza.ingrediente3);*/
console.log(new Pizza()?.bacon());