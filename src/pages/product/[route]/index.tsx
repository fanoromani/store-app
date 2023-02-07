import { Header } from "@/components/Header";
import { ProductDetails } from "@/components/ProductDetails";
import Image from "next/image";
import { useRouter } from "next/router";
import { CaretLeft, CaretRight, PlusCircle, MinusCircle } from "phosphor-react";

export default function ProductPage() {
  const router = useRouter();
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
        <ProductDetails />
      </div>
    </>
  );
}
