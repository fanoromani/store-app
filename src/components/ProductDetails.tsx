import { ProductDetailProps } from "@/types";
import Image from "next/image";
import { CaretRight, MinusCircle, PlusCircle, Star } from "phosphor-react";
import { useState } from "react";

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
  finalCart,
  setFinalCart,
}: ProductDetailProps) {
  const [counter, setCounter] = useState(0);
  console.log(finalCart);
  return (
    <div className="flex gap-40">
      <Image src={images[0]} width={380} height={580} alt="Product image" />
      <div className="flex flex-col gap-2 justify-start">
        <div className="flex items-center gap-2 text-base-300 font-bold">
          <span className="text-purple-base capitalize">{category}</span>
          <CaretRight />
          <span className="text-purple-base capitalize">{brand}</span>
        </div>
        <p className="font-bold text-3xl font-josefin">{title}</p>
        <div className="flex gap-10 text-sm text-base-400">
          <span>
            Stock: <span className="font-bold">{stock}</span>
          </span>
          <span className="flex gap-1">
            {rating}{" "}
            <Star
              className="mt-[1px]"
              size={16}
              color="#F9B950"
              weight="fill"
            />
          </span>
        </div>
        <div className="my-12">
          <p className="text-purple-dark font-black text-2xl">
            $
            <span className="text-4xl">
              {(price - price * (discountPercentage * 0.01))
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </p>
          <p className="text-base-300 font-bold">NON MEMBER ${price},00/UN</p>
        </div>
        <p className="font-josefin font-bold text-xl">Description</p>
        <p className="text-base-400 font-saira">{description}</p>
        <div className="text-white w-fit mt-10 flex items-center bg-purple-dark">
          <div className="flex gap-4 items-center bg-button-200 py-3 px-4 rounded-l-md">
            <button>
              <MinusCircle
                onClick={() => {
                  setCounter(counter - 1);
                }}
                size={24}
              />
            </button>
            <span className="text-2xl">{counter}</span>
            <button>
              <PlusCircle
                onClick={() => {
                  setCounter(counter + 1);
                }}
                size={24}
              />
            </button>
          </div>
          <button
            onClick={() => {
              setFinalCart(finalCart + counter);
              setCounter(0);
            }}
            className="font-bold py-4 rounded-r-md border-l-[1px] hover:bg-purple-base border-l-purple-light px-12 bg-button-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
