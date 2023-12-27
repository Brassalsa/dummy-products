import Error from "@/app/error";
import ProductCarousel from "@/components/ProductCarousel";
import ProductDetailsActionButton from "@/components/ProductDetailsActionButton";
import ProductStars from "@/components/ProductStars";
import { getProductById } from "@/lib/actions";

import React from "react";

type Props = {
  params: {
    id: ProductType["id"];
  };
};

const ProductPage = async ({ params }: Props) => {
  const { id } = params;
  const res = await getProductById(id);
  if ("error" in res) {
    const err = res.error;
    return <Error statusCode={err.statusCode} message={err.message} />;
  }
  const product = res;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-2 ">
      <div className="lg:flex gap-3 justify-center items-center">
        <div className="max-w-[80%] mx-auto flex justify-center">
          <ProductCarousel images={product.images} alt={product.title} />
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h2 className="text-xl font-bold w-full ">{product.title}</h2>
          <ProductStars count={product.rating} />
          <p>
            {product.title} by {product.brand}{" "}
            <span className="text-red-400">@</span>{" "}
            <span className="text-xl font-bold">${product.price}</span>
          </p>
          <p className="text-base">
            Shop now and Get{" "}
            <span className="text-lg text-red-500">
              {" "}
              {product.discountPercentage}%{" "}
            </span>
            of discount and more exclusive offers.
          </p>
          <div className="flex flex-col gap-1 w-36 mx-auto md:flex-row md:w-full md:gap-4 md:justify-center">
            <ProductDetailsActionButton product={product} />
          </div>
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-semibold pb-2">Description</h3>
        <div className="flex flex-col gap-2">
          <p>{product.description + ","}</p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            nostrum, sint ab reprehenderit odit sed at quas dolorum repellendus
            a ullam, quis, quisquam autem recusandae labore tenetur natus animi
            debitis. Ratione, magnam! Vitae saepe, inventore similique, dolorum
            veniam hic, corrupti pariatur fugit accusamus sequi possimus sunt
            commodi maxime dolores et fugiat dicta nisi odio a veritatis
            aspernatur! Eum, earum culpa. Veniam deleniti temporibus est neque.
            Vitae, ex dolorem? Consectetur ullam eum amet iure cum dolore,
            necessitatibus veritatis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            facere beatae, quos praesentium, natus ut accusamus perspiciatis
            numquam vero consectetur deserunt debitis soluta sapiente veniam
            earum, optio architecto quisquam officia. Alias voluptatem
            perspiciatis quos? Nemo voluptates magni nisi odit quasi fuga animi
            nesciunt consectetur asperiores accusamus fugit libero aliquam
            molestiae magnam consequuntur eveniet, repellat corporis architecto
            nobis fugiat quia! Distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
