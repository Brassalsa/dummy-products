"use client";

import useGetAndSaveToLocalStorage from "@/hooks/getAndSaveToLacal";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

type CartContextValue = {
  cart: CartType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: CartType["id"]) => void;
  checkOut: () => void;
  totalPrice: () => number;
  incQuantity: (id: CartType["id"]) => void;
  decQuantity: (id: CartType["id"]) => void;
  isProductInCart: (id: CartType["id"]) => boolean;
};

export const CartContext = createContext<CartContextValue | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType[]>([]);

  const getAndSave = useGetAndSaveToLocalStorage({
    state: cart,
    setState: setCart,
    interval: 500,
    key: "cart",
  });

  // add item to cart
  const addToCart = (product: ProductType) => {
    const temp = [...cart];
    let alreadyAdded = false;
    temp.map((i) => {
      if (i.id === product.id) {
        i.quantity += 1;
        alreadyAdded = true;
      }
    });
    if (!alreadyAdded) temp.push({ ...product, quantity: 1 });
    setCart(temp);
  };

  // check item is present
  const isProductInCart = (id: ProductType["id"]) => {
    let isPresent = false;
    cart.forEach((i) => {
      if (i.id === id) {
        isPresent = true;
      }
    });
    return isPresent;
  };

  // remove from cart
  const removeFromCart = (id: ProductType["id"]) => {
    const newCart = cart.filter((i) => i.id !== id);
    setCart(newCart);
  };

  // buy all
  const checkOut = () => {
    setCart([]);
  };

  // calculate total price
  const totalPrice = () => {
    let tp = 0;
    cart.forEach((i) => {
      tp += i.price * i.quantity;
    });
    return tp;
  };

  // inc quantity
  const incQuantity = (id: CartType["id"]) => {
    const temp = [...cart];
    temp.map((i) => {
      if (i.id === id) {
        i.quantity += 1;
      }
    });
    setCart(temp);
  };

  // dec quantity
  const decQuantity = (id: CartType["id"]) => {
    const temp = [...cart];
    let removed = false;
    temp.map((i) => {
      if (i.id === id) {
        i.quantity -= 1;
        if (i.quantity < 1) {
          removed = true;
        }
      }
    });
    if (removed) {
      removeFromCart(id);
      return;
    }
    setCart(temp);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    checkOut,
    totalPrice,
    incQuantity,
    decQuantity,
    isProductInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
