type UserRole = "admin" | "comprador" | "vendedor" | undefined;

export interface IUser {
  _id: string | undefined;
  firts_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  role: UserRole;
  avatar: string | undefined;
};


export interface IProduct {
    _id: string | undefined;
    name: string;
    description: string;
    stock: number;
    price: number;
    brand: string;
    size: string;
    //ver distintos tipos de talles
    category: string;
    image: string | undefined;
}

export interface ICart {
  products: { _id: string; quantify: number }[];
  totalPrice: number;
}