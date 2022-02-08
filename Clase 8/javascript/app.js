const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

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

//--------------------------------------Funcion para registrar un usuario hace push al array cuentas y array almacenlocal------------------------
function registrarCuenta(nombre,correo,contra,direccion,telefono){
  cuentas.push(new Usuario(nombre,correo,contra,direccion,telefono));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registro", (req, res) => {
  registrarCuenta(req.body.nombre,req.body.correo,req.body.contra,req.body.direccion,req.body.telefono);
  console.log(cuentas);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
