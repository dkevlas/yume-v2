import { ErrorUnknown } from "../libs/ErrorUnknown";
import * as productsFilter from "../services/productsFilter"

import express, { Request, Response }  from "express";

const router = express.Router()


router.get('/by-category', async (req: Request, res: Response)=>{
    try {
        const response = await productsFilter.getProductsByCategory(req)
        if(!response.success){
            res.status(400).json(response)
        } else{
            res.status(200).json(response)
        }
    } catch (err){
        ErrorUnknown(err, res)
    }
})

router.get('/randoms', async (_req, res: Response)=>{
    try{
        const response = await productsFilter.getProductsRandoms()
        res.status(200).json(response)
    } catch(err){
        ErrorUnknown(err, res)
    }
})

export default router