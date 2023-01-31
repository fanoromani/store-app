import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full h-20 bg-white flex items-center">
        <Image src="/logo.svg" alt="WINE Logo" width={100} height={32} />
      </header>
    </>
  );
}
