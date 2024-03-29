import Image from "next/image";
import { Clock, Handshake, Package, ShoppingCart, Timer } from "phosphor-react";

export default function Banner() {
  return (
    <div className="flex justify-center mt-10 mb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-josefin font-extrabold text-base-title text-5xl mb-4">
            Find the perfect products. Anytime. All the time.
          </h1>
          <p className="text-xl text-base-subtitle mb-16">
            Have them delivered to you where ever you are. Quick and easy.
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-dark rounded-full">
                  <ShoppingCart fill="#fff" weight="fill" />
                </div>
                <div>Simple and safe purchases</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-base rounded-full">
                  <Timer fill="#fff" weight="fill" />
                </div>
                <div>Fast and tracked deliveries</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2  bg-base-text rounded-full">
                  <Package fill="#fff" weight="fill" />
                </div>
                <div>Quality packaging</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-base rounded-full">
                  <Handshake fill="#fff" weight="fill" />
                </div>
                <div>Ethics and Responsability</div>
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
