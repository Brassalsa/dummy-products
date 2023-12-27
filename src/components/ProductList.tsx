import React from "react";
import { ProductCard } from "./ProductCard";
import Paging from "./Paging";

type Props = {
  products: ProductType[];
  total: ManyProducts["total"];
  limit: ManyProducts["limit"];
  skip?: ManyProducts["skip"];
};

const ProductList = ({ products, total, limit }: Props) => {
  if (products.length == 0) {
    return (
      <div className="text-xl flex flex-col justify-center items-center h-60 ">
        Product Not Found
        <span className="text-3xl">😔</span>
      </div>
    );
  }
  return (
    <div className="flex gap-4 flex-wrap justify-center items-start pt-5 p-1">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Paging total={total} limit={limit} />
    </div>
  );
};

export default ProductList;
