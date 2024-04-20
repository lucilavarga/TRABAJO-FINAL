//importamos las dependencias que necesitamos
import mongoose from "mongoose";

//Crear una funcion que nos conecte la base de datos
const conexionMongo = async() =>{

await mongoose.connect(process.env.BD_URL,{})

//Control de errores con try - catch
try{
    console.log("Exelente!Conexion exitosa");
} catch(error){
    console.log("Errorde conexion:, error.message");
}

}

//Tenemos que exportar nuestra funcion para llamarla desde nuestro servidor
export default conexionMongo;