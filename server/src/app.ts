import express, { json, NextFunction, Response } from "express";
import cors from "cors";
import routerProducts from "./routes/product.routes";
import routerProductsFilters from "./routes/productFilter.routes";
import { config } from "./config";
import { notFound } from "./middlewares/notFound";
import { handlerError } from "./middlewares/handlerError";
import morgan from "morgan"
const app = express()
app.use((_req, res: Response, next: NextFunction)=>{
    res.set("Cache-control", "no-store")
    next()
});

const corsOptions = {
    origin: config.URL_CLIENT,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}
app.use(cors(corsOptions))
app.options("*", cors(corsOptions))
app.use(json())

app.use(morgan("dev"))

app.use('/api/products', routerProducts)
app.use('/api/products-filters', routerProductsFilters)

app.use(notFound)
app.use(handlerError)
console.log("app: ",config.URL_CLIENT)
export default app 
