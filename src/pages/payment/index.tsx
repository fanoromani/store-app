import { PaymentAddress } from "@/components/PaymentAddress";
import { PaymentMethod } from "@/components/PaymentMethod";
import { PaymentProducts } from "@/components/PaymentProducts";
import Image from "next/image";
import { Minus, Plus, Trash } from "phosphor-react";

export default function PaymentPage() {
  return (
    <div className="mt-10 flex gap-8 justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="font-josefin text-lg font-bold text-base-subtitle">
          Finish your order
        </h1>
        <PaymentAddress />
        <PaymentMethod />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-josefin text-lg font-bold text-base-subtitle">
          Selected Products
        </h1>
        <PaymentProducts />
      </div>
    </div>
  );
}
