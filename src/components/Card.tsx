import Image from "next/image";

export function Card() {
  return (
    <div className="flex flex-col text-center items-center bg-white w-64">
      <Image src="/wine.png" width={200} height={180} alt="Wine Bottle" />
      <p>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</p>
      <p>R$ 37,40</p> <span>60% OFF</span>
      <p>Sócio wine</p> <span>R$ 30,00</span>
      <p>Não sócio R$ 37,40</p>
      <button>Adicionar</button>
    </div>
  );
}
