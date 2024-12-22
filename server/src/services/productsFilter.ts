import { QueryParamsProduct } from './../interfaces/queyParamsProductInterface';
import { Request } from "express";
import Products from "../models/Product.model"
import { CalcPagePagination } from '../libs/calcPagePagination';
import { ServiceResponse } from '../interfaces/serviceResponse';

export const getProductsRandoms = async (): Promise<ServiceResponse> => {
    const products = await Products.aggregate([
        { $sample: { size: 8 } },
        { $sort: { price: -1 } }
    ])
    return {
        success: true,
        message: "Products randoms",
        data: products
    }
}

export const getProductsByCategory = async (req: Request<{}, {} ,{}, QueryParamsProduct>): Promise<ServiceResponse> => {
    const { category, page } = req.query
    const limit: number = 8
    if(!category || !page){
        return {
            success: false,
            message: "Params of category and/or page is wrong",
        }
    }
    const filterCategory = (category == "todo") ? {} : {category: category}
    const count = await Products.countDocuments(filterCategory)
    const isValidPage = CalcPagePagination(count, limit, page)
    if(!isValidPage){
        return {
            success: false,
            message: "Page not is valid"
        }
    }
    const products = await Products.find(filterCategory).skip((page - 1) * limit).limit(limit)
    return  {
        success: true,
        message: `Products of category: ${category}`,
        countDocuments: count,
        data: products
    }
};

export const getProduct = async (req: Request): Promise<ServiceResponse> => {
    const { productID } = req.params
    const foundProduct = await Products.findOne({title: productID})
    if(!foundProduct){
        return {
            success: false,
            message: "No exist this product"
        }
    }
    return {
        success: true,
        message: "It got the product",
        data: [foundProduct]
    }
}