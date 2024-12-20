import { Response } from "express";

export const ErrorUnknown = (err: any, res: Response) =>{
    const responseErr = {
        success: false,
        message: 'Error Desconocido',
        details: err.message
    }
    return res.status(500).json(responseErr)
};