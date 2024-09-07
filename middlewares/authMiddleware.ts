import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

// Extender la interfaz Request de Express para incluir la propiedad user
interface CustomRequest extends Request {
    user?: {
        userId: string;
        email: string;
        role: string;
    };
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header("authtoken");
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        const decoded = verify(token, process.env.JWT_SECRET!) as CustomRequest["user"];
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({ message: "Invalid token." });
    }
};