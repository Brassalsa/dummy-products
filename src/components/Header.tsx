"use client";
import Link from "next/link";
import { Badge } from "@mui/material";
import { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { CartContext } from "@/providers/CartProvider";
import Search from "./Search";
import CartIcon from "./CartIcon";
import FilterProducts from "./FilterProducts";

const Header = () => {
  const service = useContext(CartContext);
  return (
    <div className="mb-8 flex flex-col gap-1">
      <div className="bg-slate-900 text-slate-50 py-6 float px-2 w-full">
        <div className="mx-auto max-w-7xl flex flex-wrap gap-1 items-center">
          <Link href={"/"} className="text-2xl font-semibold flex-1 w-full">
            Dummy Products
          </Link>

          <div className="px-2 flex gap-4">
            <Badge badgeContent={service?.cart.length}>
              <CartIcon />
            </Badge>
            <Link href={"/account"}>
              <AccountCircleIcon />
            </Link>
          </div>
        </div>
      </div>
      <span className="flex px-2 items-center justify-center">
        <FilterProducts />
        <Search />
      </span>
    </div>
  );
};

export default Header;
