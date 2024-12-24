import express, { json } from "express";
import cors from "cors";
import routerProducts from "./routes/product.routes";
import routerProductsFilters from "./routes/productFilter.routes";
import { config } from "./config";
import { notFound } from "./middlewares/notFound";
import { handlerError } from "./middlewares/handlerError";

const app = express()

app.use(cors({
    origin: config.URL_CLIENT,
    credentials: true
}))
app.use(json())

app.use('/api/products', routerProducts)
app.use('/api/products-filters', routerProductsFilters)

app.use(notFound)
app.use(handlerError)
console.log(config.URL_CLIENT)
export default app 
