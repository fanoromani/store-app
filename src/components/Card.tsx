import Image from "next/image";

export function Card() {
  return (
    <div>
      <Image src="/wine.png" width={200} height={180} alt="Wine Bottle" />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
