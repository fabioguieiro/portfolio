export const CardHeader = () => {
  return (
    <div className="bg-purple-400 w-full h-4 rounded-t-md border-b-2 border-black flex items-center px-1 gap-0.5">
      <div
        className="rounded-full  w-2 h-2 bg-red-400"
        style={{ border: "solid 1px black" }}
      ></div>
      <div
        className="rounded-full  w-2 h-2 bg-yellow-400"
        style={{ border: "solid 1px black" }}
      ></div>
      <div
        className="rounded-full  w-2 h-2 bg-green-400"
        style={{ border: "solid 1px black" }}
      ></div>
    </div>
  );
};
