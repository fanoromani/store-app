import { Card } from "./Card";

export function Products() {
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <p className="text-gray-600 text-lg mb-8">
        <span className="font-bold">49</span> produtos encontrados
      </p>
      <div className="flex flex-wrap gap-8">
        {products.map((product) => (
          <Card key={product} />
        ))}
      </div>
    </div>
  );
}
