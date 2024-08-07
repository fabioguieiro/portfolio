import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src={`/avatar.png`}
      alt={"A portrait of me"}
      width="256"
      height="256"
    />
  );
}

export const Banner = () => {
  return (
    <div className="w-full h-72 bg-petroleum flex items-center justify-evenly border-b-4 border-black">
      <Avatar />
      <div className="w-1/4">
        <h1 className="font-hand text-3xl text-cream mb-4">
          Oi, meu nome é Fabio
        </h1>
        <h1 className="font-primary text-cream">
          Desenvolvedor front-end apaixonado por criar interfaces deslumbrantes
          e centradas no usuário. Transformo requisitos complexos em designs
          lindos e funcionais.
        </h1>
      </div>
    </div>
  );
};
