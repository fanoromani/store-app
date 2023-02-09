import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full h-20 bg-base-background gap-64 flex items-center justify-center shadow-md">
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

      <div className="font-prompt flex gap-12 text-lg text-purple-300">
        <button className="hover:text-purple-100 hover:border-b-2 border-purple-100 py-6">
          Clube
        </button>
        <button className="hover:text-purple-100 hover:border-b-2 border-purple-100 py-6">
          Loja
        </button>
        <button className="hover:text-purple-100 hover:border-b-2 border-purple-100 py-6">
          Produtos
        </button>
        <button className="hover:text-purple-100 hover:border-b-2 border-purple-100 py-6">
          Ofertas
        </button>
        <button className="hover:text-purple-100 hover:border-b-2 border-purple-100 py-6">
          Eventos
        </button>
      </div>
      <div className="flex gap-10">
        <MagnifyingGlass size={32} color="#0c0c03" />
        <User size={32} color="#0c0c03" />
        <ShoppingCart size={32} color="#0c0c03" weight="fill" />
      </div>
    </header>
  );
}
