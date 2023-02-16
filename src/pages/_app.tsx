import { FinalCart } from "@/@types";
import { Header } from "@/components/Header";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [finalCart, setFinalCart] = useState<FinalCart[]>([
    { id: 1, title: "celular", price: 4, discountPercentage: 10, amount: 2 },
    { id: 2, title: "tablet", price: 6, discountPercentage: 15, amount: 4 },
  ]);
  return (
    <>
      <Header finalCart={finalCart} />
      <Component
        {...pageProps}
        finalCart={finalCart}
        setFinalCart={setFinalCart}
      />
    </>
  );
}
