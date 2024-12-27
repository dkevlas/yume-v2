import express, { json } from "express";
import cors from "cors";
import routerProducts from "./routes/product.routes";
import routerProductsFilters from "./routes/productFilter.routes";
import { config } from "./config";
import { notFound } from "./middlewares/notFound";
import { handlerError } from "./middlewares/handlerError";
import morgan from "morgan"
const app = express()


const corsOptions = {
    origin: config.URL_CLIENT,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'] 
}
app.use(cors(corsOptions))
app.options("*", cors(corsOptions))
app.use(json())

app.use(morgan("dev"))

app.head('/ping', (_req, res) => {
    res.status(200).send(); // Responde con un 200 OK, pero sin cuerpo para evitar la hibernación en Render
});

app.use('/api/products', routerProducts)
app.use('/api/products-filters', routerProductsFilters)

app.use(notFound)
app.use(handlerError)

export default app 
