import app from './app'
import { config } from './config'
import { ConnectDB } from './database'

ConnectDB();

app.listen(config.PORT, config.HOST, ()=>{
    console.log(`Server running... https://${config.HOST}:${config.PORT}`)
})