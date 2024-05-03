


// 1.Verificar conexion con html
console.log("Holaaa soy admi");

//Funcio para obtener los datos de mi base de datos
const mostrarUsuarios = async () =>{
    try{
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        if (!respuesta.ok) {
            throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarTabla(usuarios);
    }catch(error){
        console.error("Error al obtener los usuarios,", error);
    }
}

//funcion para crear una fila en mi tabla por cada usuario
function mostrarTabla(usuarios){
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML ="";

    usuarios.forEach(usuario =>{
        tabla.innerHTML += 
            `<tr>
                <td>${usuario.nombreCompleto}</td>
                <td>${usuario.correo}</td>
                <td>
                    <button type="button" class="btn btn-danger" id="${usuario._id}"  onclick="eliminarUsuario(event)">
                        <i class="bi bi-trash"></i>eliminar
                    </button>
                </td>
            </tr>`
        ;
    });
}

mostrarUsuarios();

//Funcion para eliminar usuarios por id
async function eliminarUsuario(event){
    console.log("Eliminar");

    const IdUsuarioEliminar = event.target.id;
    console.log(IdUsuarioEliminar);

    try {
        const response = await fetch(`http://localhost:9000/api/eliminarUsuario/${IdUsuarioEliminar}`, {method:"DELETE"});
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            alert("Usuario eliminado correctamente");
            mostrarUsuarios();
        }
    } catch(error) {
        console.log("Error al eliminar usuario ", error);
    }}





