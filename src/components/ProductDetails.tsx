import { ProductDetailProps } from "@/types";
import Image from "next/image";
import { CaretRight, MinusCircle, PlusCircle, Star } from "phosphor-react";

export function ProductDetails({
  title,
  price,
  discountPercentage,
  brand,
  category,
  description,
  images,
  rating,
  stock,
}: ProductDetailProps) {
  return (
    <div className="flex gap-40">
      <Image src={images[1]} width={380} height={580} alt="Wine Bottle" />
      <div className="flex flex-col gap-2 justify-start">
        <div className="flex items-center gap-2 text-gray-300 font-bold">
          <span className="text-pink-200 capitalize">{category}</span>
          <CaretRight />
          <span className="text-pink-200 capitalize">{brand}</span>
        </div>
        <p className="font-bold text-3xl font-dosis">{title}</p>
        <div className="flex gap-2 text-sm text-gray-400">
          <span>
            Stock: <span className="font-bold">{stock}</span>
          </span>
          <span>
            {rating}{" "}
            <Star className="inline" size={16} color="#F9B950" weight="fill" />
          </span>
        </div>
        <div className="my-12">
          <p className="text-pink-200 font-black text-2xl">
            R$
            <span className="text-4xl">
              {(price - price * (discountPercentage * 0.01))
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </p>
          <p className="text-gray-300 font-bold">NON MEMBER ${price},00/UN</p>
        </div>
        <p className="font-dosis font-bold text-xl">Description</p>
        <p className="text-gray-400 font-saira">{description}</p>
        <div className="text-white flex items-center">
          <div className="flex gap-4 items-center bg-button-200 py-3 px-4 rounded-l-md">
            <button>
              <MinusCircle size={24} />
            </button>
            <span className="text-2xl">1</span>
            <button>
              <PlusCircle size={24} />
            </button>
          </div>
          <button className="font-bold py-4 rounded-r-md px-12 bg-button-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
