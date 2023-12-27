"use server";
import { ApiError } from "next/dist/server/api-utils";
import { ErrorResponse, fetcher } from "../utils";

const url = "https://dummyjson.com";

// get product by id
export const getProductById = async (id: string | number) => {
  try {
    const product: ProductType = await fetcher(`${url}/products/${id}`, {
      cache: "no-cache",
    });
    return product;
  } catch (err: any) {
    console.log(err);

    return ErrorResponse(err.statusCode, err.message);
  }
};

// get products per page
export const getProducts = async (page: number = 0, limit: number = 12) => {
  try {
    const manyProducts: ManyProducts = await fetcher(
      `${url}/products?limit=${limit}&skip=${page * limit}`,
      {
        cache: "no-cache",
      }
    );

    return manyProducts;
  } catch (err: any) {
    console.log(err);

    return ErrorResponse(err.statusCode, err.message);
  }
};

// login form
export const login = async (e: FormData) => {
  try {
    const username = e.get("username");
    const password = e.get("password");

    const res = await fetcher(`${url}/auth/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        // expiresInMins: 60, // optional
      }),
    });
    return res as UserType;
  } catch (err: any) {
    console.log(err);
    return ErrorResponse(err.statusCode, err.message);
  }
};

// get all categories
export const getCat = async () => {
  try {
    const cat: ProductType["category"][] = await fetcher(
      `${url}/products/categories`
    );
    return cat;
  } catch (err: any) {
    console.log(err);
    return ErrorResponse(err.statusCode, err.message);
  }
};

// search a product

export const searchProduct = async (
  query: string,
  limit: number = 5,
  page: number = 0
) => {
  try {
    const searchedProduct: ManyProducts = await fetcher(
      `${url}/products/search?q=${query}&limit=${limit}&skip=${page * limit}`
    );
    return searchedProduct;
  } catch (err: any) {
    console.log(err);
    return ErrorResponse(err.statusCode, err.message);
  }
};

// @def filter products

export const filterProducts = async (
  price: number,
  type: "<" | ">",
  page: number = 0,
  limit: number = 12
) => {
  try {
    const manyProducts: ManyProducts = await fetcher(
      `${url}/products?limit=100`
    );
    if (price == 0) {
      throw new ApiError(403, "Not price found");
    }
    let newProducts: ProductType[] = [];
    if (!("error" in manyProducts)) {
      const { products } = manyProducts;

      if (type == "<") newProducts = products.filter((i) => i.price < price);
      else newProducts = products.filter((i) => i.price > price);
    }
    const prev = page * limit;
    const productSlice = newProducts.slice(prev, prev + limit);
    manyProducts.products = productSlice;
    manyProducts.limit = productSlice.length;
    manyProducts.total = newProducts.length;
    return manyProducts;
  } catch (err: any) {
    console.log(err);

    return ErrorResponse(err.statusCode, err.message);
  }
};
