import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-center mt-10 mb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-prompt font-extrabold text-base-title text-5xl mb-4">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl text-base-subtitle mb-16">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-yellow-dark rounded-full"></div>
                <div>Simple and safe purchases</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-yellow-base rounded-full"></div>
                <div>Fast and tracked deliveries</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-base-text rounded-full"></div>
                <div>Quality packaging</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-purple-base rounded-full"></div>
                <div>Quality packaging</div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/banner.png"}
          alt="banner image"
          width={376}
          height={360}
        />
      </div>
    </div>
  );
}
