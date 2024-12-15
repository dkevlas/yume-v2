import app from './app'
import { config } from './config'
import { ConnectDB } from './database'

ConnectDB();

app.listen(config.PORT, config.HOST, ()=>{
    console.log(`Lisa baila en http://${config.HOST}:${config.PORT}`)
    console.log('Lisa bailando...')
})