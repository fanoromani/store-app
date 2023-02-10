import { Card } from "./Card";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductProps } from "@/types";

export function Products({ finalCart, setFinalCart }: any) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `https://dummyjson.com/products?limit=16&skip=${skip}`
      );
      setProducts(response.data.products);
    };
    callApi();
  }, [skip]);

  const getPage = () => {
    if (currentPage < 3) return [1, 2, 3];

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  console.log(products);
  console.log(skip);

  return (
    <div>
      <p className="text-base-subtitle font-extrabold text-3xl font-josefin mb-10">
        Products found
      </p>
      <div className="flex justify-center flex-wrap gap-8">
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              thumbnail={product.thumbnail}
              finalCart={finalCart}
              setFinalCart={setFinalCart}
            />
          ))}
      </div>

      <div className="flex justify-center items-center mt-7 gap-2">
        <button
          className="text-purple-base flex gap-1"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentPage(1);
            setSkip(0);
          }}
        >
          First
          <CaretDoubleLeft size={24} />
        </button>
        <button
          className="text-purple-base flex gap-1"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentPage(currentPage - 1);
            setSkip(skip - 16);
          }}
        >
          <CaretLeft size={24} />
        </button>

        {getPage().map((page) => (
          <button
            key={page}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              if (currentPage > page) setSkip(skip - 16);
              else if (currentPage < page) setSkip(skip + 16);
              setCurrentPage(page);
            }}
            className={`px-4 py-3 rounded-md border-[1px] border-purple-base text-white ${
              currentPage === page
                ? "bg-purple-dark"
                : "bg-purple-base text-purple-base"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className="text-purple-base flex gap-1"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentPage(currentPage + 1);
            setSkip(skip + 16);
          }}
        >
          <CaretRight size={24} />
        </button>
      </div>
    </div>
  );
}
