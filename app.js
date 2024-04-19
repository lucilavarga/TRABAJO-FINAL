//1. IMPORTAR LAS DEPENDENCIAS QUE VAMOS A USAR
import express from "express";
import path from "path";
import dotenv from "dotenv";



//2.CONFIGURAR NUESTRO SERVIDOR
const app = express();
const puerto = 6000;

//2.1 confirar las variables de entorno
dotenv.config();



//3.ESTABLECER LA CONEXION CON NUESTRO FRONT


//4.INICIALIZAMOS EL SERVIDOR

app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en http//localhost:${puerto}`);
});
