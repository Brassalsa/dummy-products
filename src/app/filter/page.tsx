import { filterProducts } from "@/lib/actions";
import React from "react";
import Error from "../error";
import ProductList from "@/components/ProductList";
type Props = {
  searchParams: {
    price: string;
    type: "<" | ">";
    page?: number;
  };
};

const FilterPage = async ({ searchParams }: Props) => {
  const { page, price, type } = searchParams;
  const res = await filterProducts(+price, type, page || 0);

  if ("error" in res) {
    const { error } = res;
    return <Error statusCode={error.statusCode} message={error.message} />;
  }
  const { products, limit, total } = res;
  return (
    <>
      <h2 className="text-xl px-4">Filtered Results</h2>
      <ProductList products={products} limit={limit} total={total} />;
    </>
  );
};

export default FilterPage;
