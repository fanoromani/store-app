import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="flex flex-col text-center items-center bg-white w-64 shadow-lg pb-5 pt-1">
      <Image src="/wine.png" width={200} height={180} alt="Wine Bottle" />
      <p className="font-bold text-base my-1">
        Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014
      </p>
      <div className="flex gap-1 items-center my-2">
        <p className="font-bold text-gray-300 text-xs line-through">R$ 37,40</p>{" "}
        <span className="text-fontSale bg-sale text-white rounded-sm py-[1px] px-[2px]">
          60% OFF
        </span>
      </div>
      <div className="flex gap-1 items-baseline mb-1">
        <p className="text-gray-700 text-xs font-bold uppercase">Sócio wine</p>{" "}
        <span className="text-pink-200 text-base font-bold">
          R$ <span className="text-2xl">30</span>,00
        </span>
      </div>
      <p className="text-gray-300 font-bold text-xs uppercase">
        Não sócio R$ 37,40
      </p>
    </div>
  );
}
