//Importamos dependencias lo que necesitemos para el funcionamiento del codigo

import usuarioModel from "../models/usuario.models.js";



/*
    ->PETICIONES
    GET -> me muestra mis usuarios
    POST -> crear usuarios
    PUT -> Me modifica mis usuarios
    DELETE -> Me elimina mis usuarios
*/


//Prueba inicial

//LÓGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    return res.send("Funciona la petición GET");
}

//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
    return res.send("Funciona la petición POST");
}

//LÓGICA PARA MODIFICAR USUARIOS
export const putUsuario = async(req, res) => {
    return res.send("Funciona la petición PUT");
}

//LÓGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async(req, res) => {
    return res.send("Funciona la petición DELETE");
}