"use client";
import { FormEvent, useEffect, useState } from "react";
import { searchProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
  const [inp, setInp] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<
    ProductType[] | null
  >(null);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInp("");
    router.push("/product/search?q=" + inp + "&cat=" + cat);
  };

  useEffect(() => {
    setSearchedProducts(null);
    const getSearchedProduct = async () => {
      if (!inp) return;
      const res = await searchProduct(inp);

      if (!("error" in res)) {
        const { products } = res;
        setSearchedProducts(products);
      }
    };

    const debounce = setTimeout(async () => {
      if (inp === "") return;
      await getSearchedProduct();
    }, 500);
    return () => clearTimeout(debounce);
  }, [inp]);

  return (
    <div className=" flex gap-2  items-center z-20 w-full max-w-7xl mx-auto px-2">
      <form className="flex gap-2 w-full p-2" onSubmit={handleSubmit}>
        <button></button>
        <div className="relative max-w-xl mx-auto w-full">
          <div className="flex gap-1 items-center">
            <SearchOutlined />
            <input
              placeholder="Search a product..."
              className="border-b border-gray-300 focus-within:border-gray-500 outline-none w-full max-w-xl mx-auto p-2"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
          </div>
          {inp && (
            <div className="absolute w-full">
              <ul className="bg-white flex flex-col gap-1">
                {!searchedProducts ? (
                  <li>Searching...</li>
                ) : (
                  searchedProducts.map((i) => (
                    <li className="hover:bg-slate-200" key={i.id}>
                      <Link
                        href={"/product/" + i.id}
                        className="flex p-1"
                        onClick={() => setInp("")}
                      >
                        {i.title}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
