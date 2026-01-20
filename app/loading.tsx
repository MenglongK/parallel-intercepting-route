export default function Loading() {
  return (
    <>
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-[#4c1d95] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-[#1e3a8a] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-[#312e81] rounded-full animate-bounce"></div>
      </div>
    </>
  );
}
