import Cart from "./model";
import { ICart } from "../../types";

class CartDao {
  async addCart(cart: ICart) {
    console.log(cart);
    try {
      const newCart = await Cart.create(cart);
      console.log(newCart);
      return newCart;
    } catch (error) {
      console.log(error)
      throw Error((error as Error).message);
    }
  }

  async getCarts() {
    try {
      const carts = await Cart.find();  // Cambiado para usar find() y obtener los carritos
      console.log(carts);
      return carts;
    } catch (error) {
      console.log(error);
      throw Error((error as Error).message);
    }
  }

  async updateCart(cartId: string, cartUpdate: ICart) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(cartId, cartUpdate, {
        new: true,  // Para devolver el documento actualizado
      });
      console.log(updatedCart);
      return updatedCart;
    } catch (error) {
      console.log(error);
      throw Error((error as Error).message);
    }
  }
}

export const cartDao = new CartDao();