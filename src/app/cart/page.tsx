"use client";
import { RemoveShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import React, { useContext } from "react";

import { ProductCard } from "@/components/ProductCard";
import { CartContext } from "@/providers/CartProvider";
import PrimaryButton from "@/components/PrimaryButton";
import BuyNow from "@/components/BuyNow";

const CartPage = () => {
  const cartService = useContext(CartContext);

  if (!cartService) {
    return;
  }
  const handleRemove = (id: number) => () => cartService.removeFromCart(id);

  const handleBuy = () => cartService.checkOut();

  const totalPrice = cartService.totalPrice();
  if (cartService.cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 px-2 pt-28">
        <span className="text-3xl">Cart is Empty</span>
        <Link href={"/"} className="text-2xl text-blue-500">
          Shop Here 🙂
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-4 flex-wrap justify-center items-start pt-5 ">
      {cartService.cart.map((i) => (
        <div
          key={i.id}
          className="flex flex-col gap-3 justify-center items-center mb-28"
        >
          <ProductCard product={i} />
          <span className="flex gap-2 text-lg">
            <button
              onClick={() => cartService.decQuantity(i.id)}
              className="text-white bg-slate-900 w-10 rounded-md hover:bg-slate-800 active:bg-slate-950"
            >
              -
            </button>
            <p>{i.quantity}</p>
            <button
              onClick={() => cartService.incQuantity(i.id)}
              className="text-white bg-slate-900 w-10 rounded-md hover:bg-slate-800 active:bg-slate-950"
            >
              +
            </button>
          </span>
          <PrimaryButton onClick={handleRemove(i.id)}>
            <RemoveShoppingCart /> Remove Item
          </PrimaryButton>
        </div>
      ))}
      <div className="fixed bottom-0 p-2 bg-slate-900 w-full text-white flex gap-2 items-center">
        <span>Total: ${totalPrice}</span>
        <span>
          <BuyNow
            price={totalPrice}
            onBuy={handleBuy}
            className="bg-blue-600 hover:bg-blue-500"
          />
        </span>
      </div>
    </div>
  );
};

export default CartPage;
