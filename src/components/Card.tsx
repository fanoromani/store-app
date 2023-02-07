import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function Card({
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
}: ProductCardProps) {
  return (
    <div>
      <Link
        href={{
          pathname: `/product/[route]`,
          query: { route: id },
        }}
      >
        <div className="flex flex-col text-center items-center bg-white w-64 shadow-lg pb-5 pt-1">
          <Image
            src={thumbnail}
            width={200}
            height={180}
            alt="Wine Bottle"
            style={{ width: "200px", height: "180px" }}
          />
          <p className="font-bold text-base my-1">{title}</p>
          <div className="flex gap-1 items-center my-2">
            <p className="font-bold text-gray-300 text-xs line-through">
              R$ {price},00
            </p>{" "}
            <span className="text-fontSale bg-sale text-white rounded-sm py-[1px] px-[2px]">
              {discountPercentage}% OFF
            </span>
          </div>
          <div className="flex gap-1 items-baseline mb-1">
            <p className="text-gray-700 text-xs font-bold uppercase">
              Club Member
            </p>{" "}
            <span className="text-pink-200 text-base font-bold">
              R${" "}
              <span className="text-2xl">
                {(price - price * (discountPercentage * 0.01))
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")}
              </span>
            </span>
          </div>
          <p className="text-gray-300 font-bold text-xs uppercase">
            Not Member R$ {price},00
          </p>
        </div>
      </Link>
      <button className="bg-button-200 w-full py-3 px-6 uppercase text-white font-bold rounded text-sm mt-4 shadow-md hover:bg-button-100">
        Add to cart
      </button>
    </div>
  );
}
