import { Header } from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  CaretLeft,
  CaretRight,
  CaretDoubleLeft,
  CaretCircleRight,
  PlusCircle,
  MinusCircle,
} from "phosphor-react";

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
        <div className="flex gap-40">
          <Image
            src="/bigwine.png"
            width={380}
            height={580}
            alt="Wine Bottle"
          />
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex items-center gap-2 text-gray-300 font-bold">
              <span className="text-pink-200">Vinhos</span>
              <CaretRight />
              <span className="text-pink-200">EUA</span>
              <CaretRight />
              <span>California</span>
            </div>
            <p className="font-bold text-3xl font-dosis">Apothic Red 2019</p>
            <div className="flex gap-2 text-sm text-gray-400">
              <span>EUA</span>
              <span>Tinto</span>
              <span>Meio Seco</span>
              <span>750 ml</span>
            </div>
            <div className="my-12">
              <p className="text-pink-200 font-black text-2xl">
                R$<span className="text-4xl">63</span>,00
              </p>
              <p className="text-gray-300 font-bold">NAO SOCIO R$120,95/UN</p>
            </div>
            <p className="font-dosis font-bold text-xl">
              Comentario do Sommelier
            </p>
            <p className="text-gray-400 font-saira">
              Produzido no terroir californiano, esse tinto mescla as variedades
              Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
              inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
              misterioso onde há mais de 800 anos os viticultores misturavam e
              armazenavam seus cobiçados vinhos.
            </p>
            <div className="text-white flex items-center">
              <div className="flex gap-4 items-center bg-button-200 py-3 px-4 rounded-l-md">
                <button>
                  <MinusCircle size={24} />
                </button>
                <span className="text-2xl">1</span>
                <button>
                  <PlusCircle size={24} />
                </button>
              </div>
              <button className="font-bold py-4 rounded-r-md px-12 bg-button-200">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
