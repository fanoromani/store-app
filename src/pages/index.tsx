import { Filters } from "@/components/Filters";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <div>
            <div>
              <div></div>
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
      <div className="max-w-[1440px] mt-10 flex gap-40 mx-96">
        {/* <Filters /> */}
        <Products />
      </div>
    </>
  );
}
