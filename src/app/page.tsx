import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="font-spicy text-cream">Portfólio</h1>
      <div className="flex row gap-3">
        <div className="w-4 h-4 bg-cream"></div>
        <div className="w-4 h-4 bg-tomato"></div>
        <div className="w-4 h-4 bg-rose"></div>
        <div className="w-4 h-4 bg-petroleum"></div>
        <div className="w-4 h-4 bg-lightBlue"></div>
      </div>
    </main>
  );
}
