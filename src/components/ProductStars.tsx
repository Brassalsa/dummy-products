"use client";

import ReactStars from "react-stars";

type Props = {
  count: number;
  size?: number;
  color?: string;
};

const ProductStars = ({ count, size = 24, color = "#ffd700" }: Props) => {
  return (
    <ReactStars
      count={count}
      size={size}
      color1="red"
      color2="grey"
      edit={false}
    />
  );
};

export default ProductStars;
