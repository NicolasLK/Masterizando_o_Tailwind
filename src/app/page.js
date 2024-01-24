export default function Home() {
  return (
    <main className="h-screen bg-red-500 p-4">
      <h1
        className="font-extrabold 
      flex 
      items-center 
      gap-3 
      before:w-0.5 before:h-6 before:bg-sky-600 before:flex"
      >
        TailWind
      </h1>
      <h2 className="text-3xl text-blue-200">Tailwind</h2>
      <p>Tailwind</p>
      <button
        disabled
        className="bg-sky-500 
        px-4 
        py-2 
        rounded-md 
        font-semibold 
        mt-4 
        cursor-pointer
        enabled:hover:bg-sky-900 
        disabled:opacity-60 
        disabled:cursor-not-allowed"
      >
        Sing In
      </button>
    </main>
  );
}
