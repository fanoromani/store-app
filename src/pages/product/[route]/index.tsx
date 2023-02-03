import { Header } from "@/components/Header";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mt-10 flex mx-96">
        <button className="flex items-center text-xl gap-5 text-gray-700">
          <span>
            <Image
              src="/l_arrow.svg"
              alt="Left Arrow"
              width={12}
              height={10}
            ></Image>
          </span>{" "}
          Voltar
        </button>
      </div>
    </>
  );
}
