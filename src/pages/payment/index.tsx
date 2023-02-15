import { PaymentAddress } from "@/components/PaymentAddress";
import { PaymentMethod } from "@/components/PaymentMethod";
import Image from "next/image";
import { Minus, Plus } from "phosphor-react";

export default function PaymentPage() {
  return (
    <div className="px-40 mt-10 flex gap-8">
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
        <div className="card">
          <div className="products">
            <div className="product">
              <Image src={"/banner.png"} alt="" width={64} height={64} />
              <p>Expresso Tradicional</p>
              <div className="bg-base-button p-2 flex items-center gap-2 rounded-md">
                <button>
                  <Minus className="text-sm text-purple-base" />
                </button>
                <p>1</p>
                <button>
                  <Plus className="text-sm text-purple-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
