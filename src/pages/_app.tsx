import { Header } from "@/components/Header";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [finalCart, setFinalCart] = useState<number>(0);
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
