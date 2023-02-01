import { Card } from "./Card";

export function Products() {
  return (
    <div>
      <span className="text-gray-600 text-lg">
        <span className="font-bold">49</span> produtos encontrados
      </span>
      <div className="flex flex-wrap gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
