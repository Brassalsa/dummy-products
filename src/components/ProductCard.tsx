import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  if (product)
    return (
      <Link
        href={"/product/" + product.id}
        className="flex flex-col gap-2 sm:w-[30%] min-w-72 w-full min-h-72 hover:opacity-80 transition-all duration-300"
      >
        <div className="flex-1 relative flex flex-col gap-5 rounded-md object-contain">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="max-h-[250px] object-cover w-full h-full bg-transparent"
          />
        </div>
        <span className="flex gap-4 flex-wrap">
          <h3 className="text-lg font-semibold ">{product.title}</h3>
          <p className="text-lg font-semibold">
            {" "}
            <span className="text-red-400">@</span>${product.price}
          </p>
        </span>
      </Link>
    );
};
