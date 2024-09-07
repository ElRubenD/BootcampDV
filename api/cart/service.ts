import { ICart } from "../../types";
import { cartDao } from "./dao";

const { addCart, getCarts, updateCart } = cartDao;

class CartService {
  async addCart(cart: ICart) {
    try {
      const newCart = await addCart(cart);
      return newCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async getCarts() {
    try {
      const carts = await getCarts();
      return carts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async updateCart(id: string, cart: ICart) {
    try {
      const updateCart = await cartDao.updateCart(id, cart);
      return updateCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartService = new CartService();