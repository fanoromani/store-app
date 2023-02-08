import { Header } from "@/components/Header";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductProps } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";
import { CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(
        `https://dummyjson.com/products/${router.query.route}`
      );
      setProduct(response.data);
    };
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-[1440px] mt-10 flex flex-col gap-6 mx-96">
        <button
          className="flex items-center text-xl gap-5 text-gray-700"
          onClick={() => router.back()}
        >
          <CaretLeft size={32} />
          Voltar
        </button>
        {product && (
          <ProductDetails
            title={product.title}
            brand={product.brand}
            category={product.category}
            description={product.description}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            stock={product.stock}
            images={product.images}
          />
        )}
      </div>
    </>
  );
}
