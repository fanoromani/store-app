import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className="w-full h-20 px-96 bg-white flex items-center justify-between shadow-md">
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
            style={{ minWidth: "100px", minHeight: "30px" }}
          />
        </Link>

        <div className="font-dosis flex gap-12 text-lg">
          <button className="hover:text-pink-100 hover:border-b-2 border-pink-100 py-6">
            Clube
          </button>
          <button className="hover:text-pink-100 hover:border-b-2 border-pink-100 py-6">
            Loja
          </button>
          <button className="hover:text-pink-100 hover:border-b-2 border-pink-100 py-6">
            Produtos
          </button>
          <button className="hover:text-pink-100 hover:border-b-2 border-pink-100 py-6">
            Ofertas
          </button>
          <button className="hover:text-pink-100 hover:border-b-2 border-pink-100 py-6">
            Eventos
          </button>
        </div>
        <div className="flex gap-10">
          <Image src="/search.svg" alt="Search Icon" width={56} height={56} />
          <Image src="/avatar.svg" alt="Avatar Icon" width={56} height={56} />
          <Image src="/winebox.svg" alt="Winebox Icon" width={56} height={56} />
        </div>
      </header>
    </>
  );
}
