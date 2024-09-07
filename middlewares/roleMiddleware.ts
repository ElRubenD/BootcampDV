import { Request, Response, NextFunction } from "express";

// Extender la interfaz Request de Express para incluir la propiedad user
interface CustomRequest extends Request {
    user?: {
        userId: string;
        email: string;
        role: string;
    };
}

export const authorizeRoles = (...allowedRoles: string[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;
        if (!userRole || !allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: "Access denied. Insufficient permissions." });
        }
        next();
    };
};