import { useRouter } from "next/navigation";

export const NavLogo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace(`/`);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer h-full w-16 text-4xl md:border-r-2 bg-black text-white md:border-white flex justify-center items-center font-secondary hover:underline"
    >
      FG
    </div>
  );
};
