import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const NavLogo = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    router.push(`/${locale}`);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer h-full w-16 text-4xl md:border-r-2 bg-fieldInk text-paper md:border-paper flex justify-center items-center font-secondary hover:underline"
    >
      FG
    </div>
  );
};
