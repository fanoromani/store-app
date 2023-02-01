import { Filters } from "@/components/Filters";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mt-10 px-96 flex gap-40">
        <Filters />
        <Products />
      </div>
    </>
  );
}
