import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

export function Card({
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
}: ProductCardProps) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex p-4 pt-4 flex-col text-center justify-between items-center bg-base-card rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl w-64 shadow-lg">
      <Link
        href={{
          pathname: `/product/[route]`,
          query: { route: id },
        }}
      >
        <div>
          <Image
            src={thumbnail}
            width={200}
            height={180}
            alt="Wine Bottle"
            style={{
              width: "200px",
              height: "180px",
              borderRadius: "8px",
              marginRight: "8px",
              marginLeft: "8px",
            }}
          />
          <p className="font-josefin mx-4 text-xl font-bold text-base-subtitle my-1">
            {title}
          </p>
          <div className="flex gap-1 items-center justify-center my-2">
            <p className="font-bold text-base-300 text-xs line-through">
              $ {price},00
            </p>{" "}
            <span className="text-josefin bg-yellow-light text-yellow-dark text-sm rounded-sm py-[1px] px-[2px]">
              {discountPercentage}% OFF
            </span>
          </div>
          <div className="flex gap-1 justify-center items-baseline mb-1">
            <p className="text-base-700 text-xs font-bold uppercase">
              Club Member
            </p>{" "}
            <span className="text-purple-dark text-base font-bold font-josefin">
              ${" "}
              <span className="text-2xl">
                {(price - price * (discountPercentage * 0.01))
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")}
              </span>
            </span>
          </div>
          <p className="text-base-300 font-bold text-xs uppercase">
            Not Member R$ {price},00
          </p>
        </div>
      </Link>
      <div className="flex gap-2 mt-2">
        <div className="bg-base-button p-2 flex items-center gap-2 rounded-md">
          <button onClick={() => setCounter(counter - 1)}>
            <Minus className="text-sm text-purple-base" />
          </button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>
            <Plus className="text-sm text-purple-base" />
          </button>
        </div>
        <button className="bg-purple-dark py-3 px-6 uppercase text-white font-bold rounded text-sm hover:bg-button-100">
          Add to cart
        </button>
      </div>
    </div>
  );
}
