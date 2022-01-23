class Usuario {
    constructor (nombre,correo,contra,direccion,telefono){
        this.nombre = nombre;
        this.correo = correo;
        this.contra = contra;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

const cuentas = [
    {
        nombre: "admin",
        correo: "admin@admin.com",
        contra: "admin",
        direccion: "direccion",
        telefono: "0123456789"
    }
];

document.getElementById("completarData").addEventListener("submit",(e) => {
    e.preventDefault();
    const datosObtenidos = document.getElementById("completarData");
    cuentas.push(new Usuario(datosObtenidos.children[0].children[1].value,datosObtenidos.children[0].children[2].value,datosObtenidos.children[0].children[3].value,datosObtenidos.children[0].children[4].value,datosObtenidos.children[0].children[5].value));
    datosObtenidos.children[0].children[1].value = "";
    datosObtenidos.children[0].children[2].value = "";
    datosObtenidos.children[0].children[3].value = "";
    datosObtenidos.children[0].children[4].value = "";
    datosObtenidos.children[0].children[5].value = "";
    let registroExitoso = document.createElement("p");
    registroExitoso.innerHTML = "Te haz registrado correctamente."
    datosObtenidos.appendChild(registroExitoso);
});


