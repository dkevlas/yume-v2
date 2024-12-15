import mongoose from "mongoose"
import { config } from "./config"

export async function ConnectDB() {
    try{ 
        await mongoose.connect(config.MONGO_URI)
        console.log('Conexión a la base de datos exitosa')
    } catch(err: unknown){
        console.log('Lisa no puede cantar DB')
        console.log(err)
    }
}