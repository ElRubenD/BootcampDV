import { Request, Response } from "express";
import { cartService } from "./service";
import { ICart } from "../../types";
const { addCart, getCarts } = cartService;
import { decode, verify } from "jsonwebtoken";
import Cart from "./model";

class CartController {
  async addCart(req: Request, res: Response) {
    const cart = req.body;
    //const token = req.headers["authtoken"] as string;
    //const decoded:any = verify(token, process.env.JWT_SECRET!);
    console.log("Valor de user_id:", req.user?.userId); // Verifica el valor aquí
    const newCart = new Cart({
      user_id: req.user?.userId,
      products: cart.products,
      total_price: cart.total_price,
    })
    try {
      const saveCart = await addCart(newCart);
      console.log("estoy en el controller"); 
      return res.status(200).json(saveCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

/*     async addCart(req: CustomRequest, res: Response) {
      // Extraer la información del token
      const userId = req.user?.userId;
      if (!userId) {
          return res.status(400).json({ message: "User ID not found in token." });
      }
  
      const cart = {
          ...req.body,
          user_id: userId, // Añadimos el user_id al carrito
      };
  
      console.log("Valor de user_id:", cart.user_id); // Verifica que el valor se esté estableciendo correctamente
  
      try {
          const newCart = await addCart(cart);
          console.log("Carrito añadido correctamente");
          return res.status(200).json(newCart);
      } catch (error) {
          console.error("Error añadiendo el carrito:", error);
          return res.status(500).json({ error: "Internal server error." });
      }
  } */

  async getCarts(req: Request, res: Response) {
    try {
      const carts = await getCarts();
      return res.status(200).json(carts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export const cartController = new CartController();