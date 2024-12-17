import { NextFunction, Request, Response } from "express"
import { z, ZodObject } from "zod"

interface ErrorZod {
    success: boolean,
    message: string,
    path: string
}
export const validateZod = ( validator: ZodObject<any> ) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try{
            validator.parse(req.body);
            next();
        } catch(err: unknown){
            if( err instanceof z.ZodError){
                const message = err.issues[0].message
                const path = err.issues[0].path[0].toString()
                console.log(path)
                const responseErrorValidator: ErrorZod = {
                    success: false,
                    message: message,
                    path: path
                }
                res.status(403).json({responseErrorValidator, err})
            } else {
                console.error('Error desconocido al validar datos del Producto');
                res.status(505).json({
                    error: "error interno"
                })
            }
        }
    }
}