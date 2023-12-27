import Error from "@/app/error";
import ProductList from "@/components/ProductList";
import { searchProduct } from "@/lib/actions";

type Props = {
  searchParams: {
    q: string;
    cat: string;
    page: number;
  };
};

const SearchProduct = async ({ searchParams }: Props) => {
  const { q, page } = searchParams;

  const res = await searchProduct(q, 12, page);
  if ("error" in res) {
    const { error } = res;
    return <Error statusCode={error.statusCode} message={error.message} />;
  }
  const { products, limit, total } = res;
  return (
    <>
      <div className="text-lg pl-1">Showing results for &quot;{q}&quot;</div>
      <ProductList products={products} limit={limit} total={total} />
    </>
  );
};

export default SearchProduct;
