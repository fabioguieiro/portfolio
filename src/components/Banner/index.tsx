import { Avatar } from "../../../public/images/Avatar";

export const Banner = () => {
  return (
    <div className="w-full h-64 bg-petroleum flex items-center justify-evenly border-b-4 border-black">
      <Avatar />
      <div className="w-1/4">
        <h1 className="font-hand text-3xl text-cream mb-4">
          Oi, meu nome é Fabio
        </h1>
        <h1 className="font-primary text-cream">
          Desenvolvedor front-end apaixonado por criar interfaces deslumbrantes
          e centradas no usuário. Transformo requisitos complexos em designs
          elegantes e funcionais.
        </h1>
      </div>
    </div>
  );
};
