export function Filters() {
  return (
    <div className="filtros">
      <p className="font-dosis font-bold text-xl">Refine sua busca</p>
      <p className="font-bold mt-8 mb-4 text-gray-500 text-lg">Por preço</p>
      <ul className="flex flex-col gap-6">
        <li className="flex gap-3 items-center">
          <div className=" rounded-full w-4 h-4 border-sl border-gray-300 border-2"></div>
          <span className="text-gray-700 text-sm">Até R$40</span>
        </li>
        <li className="flex gap-3 items-center">
          <div className=" rounded-full w-4 h-4 border-sl border-gray-300 border-2"></div>
          <span className="text-gray-700 text-sm">R$40 A R$60</span>
        </li>
        <li className="flex gap-3 items-center">
          <div className=" rounded-full w-4 h-4 border-sl border-gray-300 border-2"></div>
          <span className="text-gray-700 text-sm">R$100 A R$200</span>
        </li>
        <li className="flex gap-3 items-center">
          <div className=" rounded-full w-4 h-4 border-sl border-gray-300 border-2"></div>
          <span className="text-gray-700 text-sm">R$200 A R$500</span>
        </li>
        <li className="flex gap-3 items-center">
          <div className=" rounded-full w-4 h-4 border-sl border-gray-300 border-2"></div>
          <span className="text-gray-700 text-sm">Acima de R$500</span>
        </li>
      </ul>
    </div>
  );
}
