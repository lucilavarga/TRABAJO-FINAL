//1. verificar conexion con html
console.log("holaaa soy ingreso");

//Crear mi funcion
const iniciarSesion = async () =>{

    //1.Obtener los valores ingresados por el usuario
    const correo = document.getElementById("correo").value;
const contrasena = document.getElementById("contrasea").value;

console.log(correo, contrasena);

try{

    //2. Realizar la peticion GET a nuestra base de datos
const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");

const usuarios = await respuesta.json();
console.log(usuarios);

//Verificar si se encontro un usuario con el correo y la contraseña dados

const esUsuarioRegistrado = usuarios.find(usuario. correo == correo && usuario,contrasena == contrasena);

if(esUsuarioRegistrado){

    //Verificamos si es administrador
    const correoAdmin = "admin@gmail.com";

    if (esUsuarioRegistrado.correo == correoAdmin){
        alert("Hola administrador");
        window.location.href ="./page/admin.html"  
    } else{
        alert("Ingreso exitoso");
        window.location.href = "./index.html"
    }

}else{
    alert("Correo o contrasea incorrectos. Usuario no encontrado! vuelve a intentar o registrate");
}
  


}catch(error){
    console.error("Error al verificar inicio de sesion:",error);
}



}