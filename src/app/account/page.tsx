"use client";

import {
  HelpOutline,
  Settings,
  ShoppingCartCheckout,
  SupportAgent,
} from "@mui/icons-material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { UserContext } from "@/providers/UserProvider";

const UserAccount = () => {
  const userService = useContext(UserContext);
  const user = userService?.user;
  const hanldeLogout = () => userService?.logout();
  if (user)
    return (
      <div className="flex flex-col gap-2 px-2">
        <div className="flex  gap-2 w-full">
          <Image
            src={user.image || ""}
            alt="user image"
            height={100}
            width={100}
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {user.firstName + " " + user.lastName}
            </h3>
            <p>{user.email}</p>
          </div>
          <span className="flex-1 flex justify-end p-3">
            <button
              className="justify-end bg-red-500 hover:bg-red-400 transition-all duration-200 text-white w-fit h-fit text-xl p-2 rounded-md"
              onClick={hanldeLogout}
            >
              Logout
            </button>
          </span>
        </div>
        <div className="p-4 text-lg flex flex-col gap-2  justify-center items-center">
          <Link
            href={"/cart"}
            className="bg-slate-700 p-1 rounded-md text-white hover:bg-slate-600 hover:py-2 transition-all duration-200 max-w-xl w-full flex items-center gap-2"
          >
            <ShoppingCart /> Go to Cart
          </Link>

          <div className="bg-slate-700 p-1 rounded-md text-white hover:bg-slate-600 hover:py-2 transition-all duration-200 max-w-xl w-full flex items-center gap-2">
            <ShoppingCartCheckout />
            Your Order
          </div>

          <div className="bg-slate-700 p-1 rounded-md text-white hover:bg-slate-600 hover:py-2 transition-all duration-200 max-w-xl w-full flex items-center gap-2">
            <Settings /> Settings
          </div>

          <div className="bg-slate-700 p-1 rounded-md text-white hover:bg-slate-600 hover:py-2 transition-all duration-200 max-w-xl w-full flex items-center gap-2">
            <SupportAgent /> Customer Support
          </div>

          <div className="bg-slate-700 p-1 rounded-md text-white hover:bg-slate-600 hover:py-2 transition-all duration-200 max-w-xl w-full flex items-center gap-2">
            <HelpOutline /> Help
          </div>
        </div>
      </div>
    );
};

export default UserAccount;
