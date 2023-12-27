import { getProducts } from "@/lib/actions";
import ProductList from "@/components/ProductList";
import Error from "./error";

type Props = {
  searchParams: {
    page?: number;
  };
};

export default async function Home({ searchParams }: Props) {
  const { page } = searchParams;
  const res = await getProducts(page || 0);

  if ("error" in res) {
    const { error } = res;
    return <Error statusCode={error.statusCode} message={error.message} />;
  }
  const { products, limit, total } = res;
  return <ProductList products={products} limit={limit} total={total} />;
}
