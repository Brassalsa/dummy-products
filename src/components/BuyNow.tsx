"use client";

import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { ShoppingBagIcon } from "lucide-react";

type Props = {
  onBuy?: () => any;
  price: number;
  className?: string;
};

const BuyNow = (p: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const handleYes = () => {
    p.onBuy?.();
    setShowDialog(false);
  };
  const handleNo = () => {
    setShowDialog(false);
  };
  return (
    <>
      <PrimaryButton
        className={p.className}
        onClick={() => setShowDialog(true)}
      >
        <ShoppingBagIcon />
        Buy Now
      </PrimaryButton>
      {showDialog && (
        <div
          className="fixed z-50 top-0 left-0 bg-black/25 w-full h-full flex justify-center items-center"
          onClick={() => setShowDialog(false)}
        >
          <div
            className="bg-white flex flex-col gap-2 justify-center items-center p-4 rounded-md text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl">Total Price: ${p.price}</h2>
            <h3 className="text-lg">Are you sure you want to buy ?</h3>
            <span className="flex gap-2">
              <PrimaryButton
                className="bg-blue-500 hover:bg-blue-400"
                onClick={handleYes}
              >
                Yes
              </PrimaryButton>
              <PrimaryButton
                className="bg-red-500 hover:bg-red-400"
                onClick={handleNo}
              >
                No
              </PrimaryButton>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNow;
