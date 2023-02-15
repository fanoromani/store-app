import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";

export function Header({ finalCart }: any) {
  return (
    <header className="px-40 py-4 flex items-center justify-around shadow-md">
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
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base">
          Clube
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base">
          Loja
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base">
          Produtos
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base">
          Ofertas
        </button>
        <button className="hover:text-purple-base hover:border-b-2 border-purple-base">
          Eventos
        </button>
      </div>
      <div className="flex gap-10">
        <MagnifyingGlass size={32} color="#8047F8" />
        <User size={32} color="#8047F8" />
        <Link
          href={{
            pathname: `/payment`,
          }}
        >
          <button className="p-2 bg-yellow-light rounded-md relative">
            <div className="text-xs font-bold rounded-full bg-yellow-dark text-black h-5 w-5 flex items-center justify-center absolute top-[-10px] right-[-10px]">
              {finalCart}
            </div>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </button>
        </Link>
      </div>
    </header>
  );
}
