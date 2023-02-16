import { PaymentProductsProps } from "@/@types";
import Image from "next/image";
import { Minus, Plus, Trash } from "phosphor-react";

export function PaymentProducts(finalCart: PaymentProductsProps) {
  return (
    <div className="flex flex-col gap-6 bg-base-card p-10 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl">
      <div className="flex gap-5 border-b-[1px] border-base-button py-6">
        <Image src={"/banner.png"} alt="" width={64} height={64} />
        <div>
          <p className="text-base-subtitle">{finalCart.finalCart.title}</p>
          <div className="flex gap-2">
            <div className="bg-base-button w-fit p-1 flex items-center gap-2 rounded-md">
              <button>
                <Minus className="text-sm text-purple-base" />
              </button>
              <p className="text-base-title">1</p>
              <button>
                <Plus className="text-sm text-purple-base" />
              </button>
            </div>
            <button className="bg-base-button items-center px-2 text-base-text text-xs uppercase flex gap-2 rounded-md">
              <Trash size={16} color="#8047F8" />
              remove
            </button>
          </div>
        </div>
        <p className="ml-8 font-bold text-base-text">
          ${finalCart.finalCart.price},90
        </p>
      </div>
      <div className="flex gap-5 border-b-[1px] border-base-button py-6">
        <Image src={"/banner.png"} alt="" width={64} height={64} />
        <div>
          <p className="text-base-subtitle">Expresso Tradicional</p>
          <div className="flex gap-2">
            <div className="bg-base-button w-fit p-1 flex items-center gap-2 rounded-md">
              <button>
                <Minus className="text-sm text-purple-base" />
              </button>
              <p className="text-base-title">1</p>
              <button>
                <Plus className="text-sm text-purple-base" />
              </button>
            </div>
            <button className="bg-base-button items-center px-2 text-base-text text-xs uppercase flex gap-2 rounded-md">
              <Trash size={16} color="#8047F8" />
              remove
            </button>
          </div>
        </div>
        <p className="ml-8 font-bold text-base-text">$9,90</p>
      </div>
      <div className="flex gap-5 border-b-[1px] border-base-button py-6">
        <Image src={"/banner.png"} alt="" width={64} height={64} />
        <div>
          <p className="text-base-subtitle">Expresso Tradicional</p>
          <div className="flex gap-2">
            <div className="bg-base-button w-fit p-1 flex items-center gap-2 rounded-md">
              <button>
                <Minus className="text-sm text-purple-base" />
              </button>
              <p className="text-base-title">1</p>
              <button>
                <Plus className="text-sm text-purple-base" />
              </button>
            </div>
            <button className="bg-base-button items-center px-2 text-base-text text-xs uppercase flex gap-2 rounded-md">
              <Trash size={16} color="#8047F8" />
              remove
            </button>
          </div>
        </div>
        <p className="ml-8 font-bold text-base-text">$9,90</p>
      </div>
      <div className="text-base-text flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-sm">Items Total</p>
          <p>$29,70</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Delivery</p>
          <p>$3,50</p>
        </div>
        <div className="flex justify-between font-bold text-xl text-base-subtitle">
          <p>Total</p>
          <p>$33,70</p>
        </div>
      </div>
      <button className="bg-yellow-base w-full py-3 px-2 text-white uppercase font-bold text-sm rounded-md">
        Proceed to Check-out
      </button>
    </div>
  );
}
