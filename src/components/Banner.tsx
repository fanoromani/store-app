import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <div>
          <h1 className="font-prompt font-extrabold text-base-title text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <div>
              <div className="flex">
                <div className="h-8 w-8 bg-yellow-dark rounded-full"></div>
                <div>Simple and safe purchases</div>
              </div>
              <div>
                <div></div>
                <div>Fast and tracked deliveries</div>
              </div>
              <div>
                <div></div>
                <div>Quality packaging</div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/banner.png"}
          alt="banner image"
          width={476}
          height={360}
        />
      </div>
    </div>
  );
}
