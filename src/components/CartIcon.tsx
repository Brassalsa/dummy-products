import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { ReactNode } from "react";

const CartIcon = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <Link href={"/cart"} className={className}>
      <ShoppingCartIcon />
      {children}
    </Link>
  );
};

export default CartIcon;
