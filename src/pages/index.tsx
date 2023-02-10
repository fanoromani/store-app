import Banner from "@/components/Banner";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { useState } from "react";

export default function Home({ finalCart, setFinalCart }: any) {
  console.log(finalCart, "aqui");

  return (
    <div className="px-96">
      <Banner />
      <Products setFinalCart={setFinalCart} finalCart={finalCart} />
    </div>
  );
}
