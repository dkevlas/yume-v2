import { NextFunction, Request, Response } from "express";

export const handlerError = ((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json('Algo salió mal!');
});