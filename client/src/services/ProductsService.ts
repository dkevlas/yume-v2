import axios, { AxiosInstance } from "axios";
import { AxiosError } from "../libs/AxiosError";

const urlServer: string = import.meta.env.VITE_URL_SERVER

const apiAxios: AxiosInstance = axios.create({
    baseURL: urlServer,
    withCredentials: true
})

export const getProductsRandoms = async () => {
    try{
        const response = await apiAxios.get(`/products-filters/random`)
        return response.data
    } catch(err){
        return AxiosError(err)
    }
}

export const getProductsByCategory = async (category: string) => {
    try {
        const response = await apiAxios.get(`/products-filters/category?category=${category}`)
        return response.data
    } catch(err){
        return AxiosError(err)
    }
}