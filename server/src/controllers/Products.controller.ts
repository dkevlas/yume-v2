import { Request, Response } from "express";
import { ApiResponse } from "../interfaces/response.interface";

import Products from "../models/Product.model";
import { ProductModel } from "../interfaces/product.interface";
import { QueryParamsProduct } from "../interfaces/queyParamsProductInterface";
import { ErrorUnknown } from "../libs/ErrorUnknown";

class ProductsControllers {
    async getProducts(req: Request<{}, {}, {}, QueryParamsProduct>, res: Response){
        try{
            const limit: number = 10
            let products: ProductModel[]
            const { page } = req.query 
            if (page){
                products = await Products.find().sort({createdAt: -1}).skip( (page - 1) * limit).limit(limit)
                res.json({
                    data: products
                })
            } else {
                products = await  Products.find().sort({createdAt: -1}).limit(10)
                const response: ApiResponse<any> = {
                    message: 'Se obtuvo los productos',
                    success: true,
                    data: products
                }
                console.log(products.length)
                res.status(200).json(response)
            }
            
        } catch(err){
            ErrorUnknown(err, res)
        }
    }

    async insertProduct(req: Request, res: Response){
        try{
            const data = req.body;
            const newProduct = new Products(data)
            await newProduct.save()
            const response: ApiResponse<any>= {
                success: true,
                message: "Se agregó el producto correctamente",
                data: newProduct
            }
            res.status(202).json(response)
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
}

export default new ProductsControllers();
