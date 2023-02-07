import { Card } from "./Card";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductProps } from "@/types";

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios("https://dummyjson.com/products");
      setProducts(response.data.products);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);

  return (
    <div>
      <p className="text-gray-600 text-lg mb-8">
        <span className="font-bold">49</span> produtos encontrados
      </p>
      <div className="flex flex-wrap gap-8">
        {products && products.map((product) => <Card key={product.id} />)}
      </div>
      <div className="flex justify-center items-center mt-7 gap-2">
        <button className="text-pink-200 flex gap-1">
          <CaretDoubleLeft size={24} />
          First
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
        <button className="text-pink-200 flex gap-1">
          Last
          <CaretDoubleRight size={24} />
        </button>
      </div>
    </div>
  );
}
