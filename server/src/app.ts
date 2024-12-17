import express, { json } from "express";
import cors from "cors";
import routerProducts from "./routes/product.routes";
import routerProductsFilters from "./routes/productFilter.routes";
import { config } from "./config";

const app = express()

app.use(cors({
    origin: config.URL_CLIENT,
    credentials: true
}))
app.use(json())

app.use('/api/products', routerProducts)
app.use('/api/products-filters', routerProductsFilters)

app.get('/api', (_req, res)=>{
    res.json({
        message: "Lisa te amo"
    })
})

export default app 