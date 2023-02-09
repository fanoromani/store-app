import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full h-20 gap-64 flex items-center justify-center shadow-md">
      <Link
        href={{
          pathname: `/`,
          query: { route: "" },
        }}
      >
        <Image
          src="/logo.svg"
          alt="WINE Logo"
          width={0}
          height={0}
          style={{ minWidth: "120px", minHeight: "50px" }}
        />
      </Link>

      <div className="font-josefin flex gap-12 text-lg text-purple-dark">
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base py-6">
          Clube
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base py-6">
          Loja
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base py-6">
          Produtos
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base py-6">
          Ofertas
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base py-6">
          Eventos
        </button>
      </div>
      <div className="flex gap-10">
        <MagnifyingGlass size={32} color="#8047F8" />
        <User size={32} color="#8047F8" />
        <div className="p-2 bg-yellow-light rounded-md relative">
          <div className="text-xs font-bold rounded-full bg-yellow-dark text-white h-5 w-5 flex items-center justify-center absolute top-[-10px] right-[-10px]">
            15
          </div>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </div>
      </div>
    </header>
  );
}
