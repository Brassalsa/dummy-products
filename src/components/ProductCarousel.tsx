"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

function ProductCarousel({ images, alt }: Props) {
  return (
    <div className="relative sm:px-10 py-5 sm:pt-20 pb-5 max-w-[560px] h-[66svh] sm:h-3/6 w-full bg-white rounded-[30px] sm:mx-auto">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={true}
        showArrows={true}
        stopOnHover={true}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-96 w-auto  flex justify-center items-center object-contain"
          >
            <Image
              src={img}
              alt={alt}
              className="object-contain"
              width={500}
              height={500}
              key={alt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
