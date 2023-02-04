import { Card } from "./Card";
import { CaretLeft, CaretRight } from "phosphor-react";

export function Products() {
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <p className="text-gray-600 text-lg mb-8">
        <span className="font-bold">49</span> produtos encontrados
      </p>
      <div className="flex flex-wrap gap-8">
        {products.map((product) => (
          <Card key={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-7 gap-2">
        <button className="text-pink-200">
          <CaretLeft size={24} />
        </button>
        <button className="px-4 py-3 rounded-md border-[1px] border-pink-200 bg-pink-200 text-white">
          1
        </button>
        <button className="px-4 py-3 rounded-md border-[1px] border-pink-200 text-pink-200">
          2
        </button>
        <button className="px-4 py-3 rounded-md border-[1px] border-pink-200 text-pink-200">
          3
        </button>
        <button className="text-pink-200">
          <CaretRight size={24} />
        </button>
      </div>
    </div>
  );
}
