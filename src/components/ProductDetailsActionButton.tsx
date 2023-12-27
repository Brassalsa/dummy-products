"use client";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import PrimaryButton from "@/components/PrimaryButton";
import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";

import CartIcon from "./CartIcon";
import BuyNow from "./BuyNow";
const ProductDetailsActionButton = ({ product }: { product: ProductType }) => {
  const service = useContext(CartContext);
  const addToCart = () => {
    service?.addToCart(product);
  };
  const isProductInCart = service?.isProductInCart(product.id);
  return (
    <>
      <BuyNow price={product.price} />
      {isProductInCart ? (
        <PrimaryButton>
          <CartIcon>In Cart</CartIcon>
        </PrimaryButton>
      ) : (
        <PrimaryButton
          className="w-full bg-blue-700 text-white p-2 hover:bg-blue-500 transition-all duration-200"
          onClick={addToCart}
        >
          <AddShoppingCartIcon />
          Add to Cart
        </PrimaryButton>
      )}
    </>
  );
};

export default ProductDetailsActionButton;
