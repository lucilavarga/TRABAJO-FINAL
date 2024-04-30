const { application, json } = require("express");

// 1. verificar conexion con thml
console.log("holaaa soy registro");


//2. crear mi funcion para registro

const registrarUsuario = async() =>{

//2.1 Obtener los datos de mi formulario
const nombreCompleto = document.getElementById("nombreCompleto").value;
const correo = document.getElementById("correo").value;
const contrasena = document.getElementById("contrasena").value;

console.log(nombreCompleto, correo, contrasena);


//2.2 crear un objeto con los datos del usuario
const datosUsuario = {
    nombreCompleto,
    correo,
    contrasena
}

console.log(datosUsuario);

//2.3 Hacer la peticion POST para crear usuario en nuestra base de datos

try{
// Aca estamos creando el ususarioen la base de datos
    const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
    {
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(datosUsuario)    
    }
);
const nuevoUsuario = await respuesta.json();
console.log("Usuario creado exitosamente",nuevoUsuario);

//condicional para redireccionara ingreso.html
if(nuevoUsuario){
    alert("Registro exitoso");
    window.location.href = "./pages/ingreso.html"
} else{
    alert("Ups! error de registro, intentelo nuevamente");
}

}catch(error){
    console.error("Error al registrar ususario",error);
}
}
