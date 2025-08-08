export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-[6rem] font-extrabold text-black-600 tracking-tight leading-none font-sans">
        404
      </h1>

      <p className="text-xl sm:text-2xl text-gray-700 mt-2">
        Oops! Looks like you're lost.
      </p>

      <p className="text-muted-foreground max-w-md mt-1">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <img
        src="/cofi.png" 
        alt="Cofi"
        className="mt-8 w-[300px] h-[300px] rounded-xl object-cover shadow-lg"
      />

      <a
        href="/"
        className="mt-6 inline-block text-blue-600 hover:underline font-medium"
      >
        ← Go back home
      </a>
    </main>
  )
}
