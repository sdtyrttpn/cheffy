import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="max-w-md text-center flex flex-col justify-center gap-6">
        <div className="text-7xl">🍳</div>

        <h1 className="text-4xl font-extrabold text-primary">Oops! Page Not Found</h1>

        <p className="text-dark/70 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved. Try going back or
          exploring something delicious instead.
        </p>

        <div className="flex items-center gap-2 justify-center shrink-0">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-light px-5 py-3 font-semibold hover:bg-primary/90 transition text-center truncate"
          >
            Home Page
          </Link>
          <Link
            href="/categories"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-dark px-5 py-3 font-semibold hover:bg-gray-50 transition text-center truncate"
          >
            Explore Categories
          </Link>
        </div>
      </div>
    </main>
  );
}
