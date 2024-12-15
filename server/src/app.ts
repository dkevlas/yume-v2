import express, { json } from "express"
import routerProducts from "./routes/product.routes"

const app = express()
app.use(json())

app.use('/api/products', routerProducts)

app.get('/api', (_req, res)=>{
    res.json({
        message: "Lisa te amo"
    })
})

export default app 