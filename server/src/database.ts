import mongoose from "mongoose"
import { config } from "./config"

export async function ConnectDB() {
    try{ 
        await mongoose.connect(config.MONGO_URI)
        console.log('Conection DB successful')
    } catch(err: unknown){
        console.log('Connection DB failed')
        console.log(err)
    }
}