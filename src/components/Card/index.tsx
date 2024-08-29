import { ReactNode } from "react";
import { CardHeader } from "./CardHeader";

type TCardProps = {
  image: ReactNode;
  children: ReactNode;
  title: string;
  imageOnRight?: boolean;
};
export const Card = ({
  image,
  title,
  children,
  imageOnRight = false,
}: TCardProps) => {
  return (
    <div
      className={`bg-cream w-96 rounded-lg border-black border-2 relative mt-4 min-h-52`}
    >
      <CardHeader />
      <div className="flex ">
        {!imageOnRight && <div className="h-32 w-1/3 self-center">{image}</div>}
        <div className="px-2 w-2/3 py-2">
          <p className="text-xl font-bold mb-3">{title}</p>
          {children}
        </div>
      </div>
      {imageOnRight && <div className="absolute right-2 bottom-1">{image}</div>}
    </div>
  );
};
