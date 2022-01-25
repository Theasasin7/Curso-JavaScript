//--------------------------------------------------------------Clase Usuario con su constructor-------------------------------------------
class Usuario {
    constructor (nombre,correo,contra,direccion,telefono){
        this.nombre = nombre;
        this.correo = correo;
        this.contra = contra;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

//-----------------------------------------------------------------Array de objetos cuentas------------------------------------------------

const cuentas = [
    {
        nombre: "admin",
        correo: "admin@admin.com",
        contra: "admin",
        direccion: "direccion",
        telefono: "0123456789"
    }
];

//--------------------------------------------------------------Evento de obtencion de datos de usuarios registrados----------------------------

document.getElementById("completarData").addEventListener("submit",(e) => {
    e.preventDefault();
    const datosObtenidos = document.getElementById("completarData");
    registrarCuenta(datosObtenidos.children[0].children[1].value,datosObtenidos.children[0].children[2].value,datosObtenidos.children[0].children[3].value,datosObtenidos.children[0].children[4].value,datosObtenidos.children[0].children[5].value);
    datosObtenidos.children[0].children[1].value = "";
    datosObtenidos.children[0].children[2].value = "";
    datosObtenidos.children[0].children[3].value = "";
    datosObtenidos.children[0].children[4].value = "";
    datosObtenidos.children[0].children[5].value = "";
    let registroExitoso = document.createElement("p");
    registroExitoso.innerHTML = "Te haz registrado correctamente."
    datosObtenidos.appendChild(registroExitoso);
});


//--------------------------------------Funcion para registrar un usuario hace push al array cuentas y array almacenlocal------------------------
function registrarCuenta(nombre,correo,contra,direccion,telefono){
    cuentas.push(new Usuario(nombre,correo,contra,direccion,telefono));    
    actualizarCuentaAlmacenLocal(cuentas);
}


//------------------------------------Funcion para agregar al localstorage los elementos del array cuentas------------------------------------
function actualizarCuentaAlmacenLocal(cuentas){
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

//funcion para agregar al array cuentas del local storage el contenido
function actualizarArrayCuentas(){
    const cuentasAlmacenLocal = JSON.parse(localStorage.getItem('cuentas'));
    if(cuentasAlmacenLocal != null){
        cuentasAlmacenLocal.forEach(cuenta =>{
            if(cuenta.nombre != "admin"){
                cuentas.push(cuenta);
            }
        });
    }
}


actualizarArrayCuentas();