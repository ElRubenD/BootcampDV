import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";

// Extender la interfaz Request de Express para incluir la propiedad user

declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            userId: string;
            email: string;
            role: string;
        };
    }
}



/* export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers["authtoken"];
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        console.log(1);    
        const decoded = verify(token as string, process.env.JWT_SECRET!) as CustomRequest["user"];
        req.user = decoded;
        console.log(2); 
        next();
    } catch (err) {      
        return res.status(400).json({ message: "Invalid token." });
    }
}; */

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authtoken"] as string;
    console.log('Token recibido:', token); // Verifica el token recibido

    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded:any = verify(token, process.env.JWT_SECRET!) /* as CustomRequest["user"]; */
        console.log('Token decodificado:', decoded); // Verifica el token decodificado
        req.user = decoded;
        next();
    } catch (err) {
        console.log('Error al verificar el token:', err);
        return res.status(400).json({ message: "Invalid token." });
    }
};