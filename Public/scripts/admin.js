

// 1.Verificar conexion con html
console.log("Holaaa soy admi");


//Funcio para obtener los datos de mi base de datos
const mostrarUsuarios = async () =>{

    try{
const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
const ususarios = await respuesta.json();
console.log(usuarios);
mostrarTabla();

    }catch(error){
     console.error("Error al obtener los usuarios,error");   
    }
}

//funcion para crear una fila en mi tabla por cada usuario
function mostrarTabla(usuarios){
const tabla = document.getElementById("miTabla");
tabla.innerHTML ="";

usuarios.forEach(usuario =>{
    //por cada (forEach)usuario,me va a crear una fila en la tabla
//alt+96 => comillas invertidas
    tabla.innerHTML += `

    <tr>
    <td>${usuario.nombreCompleto}</td>
    <td>${usuario.correo}</td>
    <td>
        <button type="button" class="btn btn-danger" id="${usuario._id}"  onclick="eliminarUsuario(event)">
            <i class="bi bi-trash"></i>eliminar
        </button>
    </td>
  </tr>
    `
});




}

mostrarUsuarios();


//Funcion para eliminar usuarios por id
function eliminarUsuario(event){
    console.log("Eliminar");

    const IdUsuarioEliminar = event.target.id;
    console.log(idUsuarioEliminar);

    fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}`,{method:"DELETE"}). then(
        response => {
            if(!response.ok) {
                console.error("error! no se pudo eliminar usuario");
            } else {
                alert("Usuario eleminado correctamente");
                mostrarUsuarios();
            }

        }).catch(error =>{
            console.log("Error al eliminar usuario ", error);
        });
}




