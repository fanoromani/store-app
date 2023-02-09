import Banner from "@/components/Banner";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-96">
        <Banner />
        <Products />
      </div>
    </>
  );
}
