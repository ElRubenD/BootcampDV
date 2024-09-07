import { Request, Response } from "express";
import { cartService } from "./service";
import { ICart } from "../../types";
const { addCart, getCarts } = cartService;

class CartController {
  async addCart(req: Request, res: Response) {
    const cart = req.body;
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
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