import Banner from "@/components/Banner";
import { Products } from "@/components/Products";

export default function Home({ finalCart, setFinalCart }: any) {
  console.log(finalCart, "aqui");

  return (
    <div className="px-96">
      <Banner />
      <Products setFinalCart={setFinalCart} finalCart={finalCart} />
    </div>
  );
}
